/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React, { useEffect, useMemo, useState, useRef } from "react";
import { throttle } from "lodash";
import BookCard from "../../UI/BookCard/BookCard";
import { bookContentType, returnBookContentType } from "@/types/books";
import { useIsResponsive } from "@/components/Responsive/useIsResponsive";

import UseAnimations from "react-useanimations";
import loading2 from "react-useanimations/lib/loading2";

interface VerticalScrollProps {
  // API: ({fetchedData, prevId, prevScore, size}: {fetchedData: any; prevId?: number; prevScore?: number; size: number}) => Promise<any>;
  API: ({
    lastContent,
    size,
  }: {
    lastContent?: bookContentType;
    size: number;
  }) => Promise<any>;
  identifier: string;
}

const VerticalScroll = ({ API, identifier }: VerticalScrollProps) => {
  const [isDeskTop, isTablet, isMobile] = useIsResponsive();
  const cardLayout = {
    width: isDeskTop ? "200px" : "45vw",
    height: isDeskTop ? "300px" : "70vw",
    minWidth: isDeskTop ? "200px" : "45vw",
    minHeight: isDeskTop ? "300px" : "70vw",
    padding: "0.5vw",
    margin: isDeskTop ? "16px" : "2vw",
  };

  const [fetchedData, setFetchedData] = useState<any>([]);
  const [quantityPerPage, setQuantityPerPage] = useState<number>(20);
  // const [offset, setOffset] = useState<number>(0)
  const [getFetch, setGetFetch] = useState<boolean>(false);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const pageClassRef = useRef<any>([]);
  const actualPageRef = useRef<any>(null);
  const [onScreenContentIdx, setOnScreenContentIdx] = useState<number>(0);
  const [hasNext, setHasNext] = useState<boolean>(
    window.sessionStorage.getItem(`${identifier}-vertical-inf_has_next`)
      ? JSON.parse(
          String(
            window.sessionStorage.getItem(`${identifier}-vertical-inf_has_next`)
          )
        )
      : true
  );

  useEffect(() => {
    const loadData = window.sessionStorage.getItem(
      `${identifier}-inf_fetched_data`
    );
    const loadPage = window.sessionStorage.getItem(`${identifier}-recent_page`);
    const localHasNext = JSON.parse(
      String(
        window.sessionStorage.getItem(`${identifier}-horizontal-inf_has_next`)
      )
    );
    const scrollTiming = JSON.parse(
      String(window.sessionStorage.getItem(`scroll_timing`))
    );

    // console.log('로드', loadData && JSON.parse(loadData))
    if (loadData && scrollTiming) {
      setFetchedData(() => JSON.parse(loadData));
      setHasNext(() => localHasNext);
    } else {
      if (hasNext) {
        API({ size: quantityPerPage })
          .then((res: returnBookContentType) => {
            if (res.content.length !== 0 || res.content !== null) {
              const temp = [[...res.content]];
              setFetchedData(() => temp);
              setHasNext(() => res.hasNext);
            }
          })
          .catch((err) => {});
      }

      // API({fetchedData: fetchedData, size: quantityPerPage})
      // .then((res: returnBookContentType) => {
      //     if (res.content.length !== 0 || res.content !== null) {
      //         setFetchedData(() => [[...res.content]])
      //     }
      // })
    }

    if (loadPage) {
      setOnScreenContentIdx(() => JSON.parse(loadPage));
    }
  }, []);

  useEffect(() => {
    const loadScroll = window.sessionStorage.getItem(
      `${identifier}-recent_scroll`
    );
    const scrollTiming = JSON.parse(
      String(window.sessionStorage.getItem(`scroll_timing`))
    );

    if (loadScroll && fetchedData.length !== 0 && scrollTiming) {
      // setTimeout(function() {

      // }, 1000)
      window.scrollTo(0, Number(JSON.parse(loadScroll)));
      window.sessionStorage.removeItem(`scroll_timing`);
    }
  }, [fetchedData.length !== 0]);

  useEffect(() => {
    if (getFetch === true && fetchedData) {
      const lastContent =
        fetchedData[fetchedData.length - 1][
          fetchedData[fetchedData.length - 1].length - 1
        ];
      if (lastContent && hasNext === true) {
        // console.log(lastContent)

        API({ lastContent: lastContent, size: quantityPerPage }).then(
          (res: returnBookContentType) => {
            if (res.content.length !== 0 || res.content !== null) {
              const temp = [...fetchedData, [...res.content]];
              setFetchedData(() => temp);
              // setOffset((prev) => prev + 1)
              window.sessionStorage.setItem(
                `${identifier}-inf_fetched_data`,
                JSON.stringify(temp)
              );
              window.sessionStorage.setItem(
                `${identifier}-horizontal-inf_has_next`,
                JSON.stringify(res.hasNext)
              );
              setHasNext(() => res.hasNext);
            }
          }
        );

        // API({fetchedData: fetchedData, prevId: lastContent.bookId, prevScore: lastContent.avgScore, size: quantityPerPage})
        // .then((res: returnBookContentType) => {
        //     // setFetchedData(() => [...fetchedData, [...res.content]])
        //     if (res.content.length !== 0 || res.content !== null) {
        //         const temp = [...fetchedData, [...res.content]]
        //         setFetchedData(() => temp)
        //         // setOffset((prev) => prev + 1)
        //         window.sessionStorage.setItem('inf_fetched_data', JSON.stringify(temp))
        //         console.log(fetchedData)
        //     }

        // })
      }
      setFetch(false);
    }
  }, [getFetch]);

  const setFetch = (value: boolean) => {
    setGetFetch(() => value);
  };

  const onScrollHandler = useMemo(
    () =>
      throttle((event) => {
        // if (window && (((document.body.scrollHeight - 10) < document.body.clientHeight) || document.body.scrollTop > document.body.scrollHeight - document.body.clientHeight - 100)) {
        //     setFetch(true)
        // }
        if (document.documentElement.scrollTop !== 0) {
          window.sessionStorage.setItem(
            `${identifier}-recent_scroll`,
            String(document.documentElement.scrollTop)
          );
          window.sessionStorage.setItem(
            `prevent_index_scroll`,
            JSON.stringify(true)
          );
        }
      }, 1000),
    [fetchedData]
  );

  useEffect(() => {
    document.addEventListener("wheel", onScrollHandler);
    document.addEventListener("touchmove", onScrollHandler);
    return () => {
      document.removeEventListener("wheel", onScrollHandler);
      document.removeEventListener("touchmove", onScrollHandler);
    };
  }, []);

  const pageRender = fetchedData.map((page: any, pageIdx: number) => {
    const contentRender = page.map(
      (content: bookContentType, contentIdx: number) => {
        return (
          <div
            key={`${identifier}-infinity-card-${
              pageIdx * quantityPerPage + contentIdx
            }`}
            css={cardWrapperCSS({
              width: cardLayout.width,
              height: cardLayout.height,
              minWidth: cardLayout.minWidth,
              minHeight: cardLayout.minHeight,
              margin: cardLayout.margin,
            })}
          >
            <BookCard
              hideType={true}
              showPlatform={true}
              bookData={content}
              minWidth={cardLayout.minWidth}
              minHeight={cardLayout.minHeight}
            />
          </div>
        );
      }
    );

    if (page.length !== 0) {
      return (
        <div
          css={css`
            ${isDeskTop ? "width: auto;" : "width: 100vw;"}
          `}
          key={`${identifier}-infinity-${pageIdx}`}
          id={`${pageIdx}`}
          ref={(el) => {
            pageClassRef.current[pageIdx] = el;
          }}
        >
          <div
            ref={page.length === quantityPerPage ? actualPageRef : null}
            css={contentPageWrapperCSS({ isMobile, isTablet, isDeskTop })}
          >
            {contentRender}
          </div>
        </div>
      );
    }
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // entry의 target으로 DOM에 접근합니다.
      const $target = entry.target;

      // 화면에 노출 상태에 따라 해당 엘리먼트의 class를 컨트롤 합니다.
      if (entry.isIntersecting) {
        if ($target.id !== "scrollStart") {
          setOnScreenContentIdx(() => Number($target.id));
          window.sessionStorage.setItem(
            `${identifier}-recent_page`,
            $target.id
          );
        }
        if ($target.id === "scrollStart" && fetchedData.length !== 0) {
          setFetch(true);
        }

        // console.log('화면에 보이는 Div', $target.id)
        // $target.classList.add("screening");
      }
    });
  });

  useEffect(() => {
    pageClassRef.current.forEach((item: any) => {
      if (item) {
        io.observe(item);
      }
    });

    if (scrollWrapperRef.current !== null) {
      io.observe(scrollWrapperRef.current);
    }

    return () => io.disconnect();
  }, [pageClassRef.current.length, fetchedData]);

  return (
    <div css={scrollWrapperCSS}>
      {pageRender}

      {hasNext && (
        <div css={scrollDivCSS} id={"scrollStart"} ref={scrollWrapperRef}>
          {/* ∨ */}
          <UseAnimations
            strokeColor={"var(--text-color)"}
            fillColor={"var(--back-color-2)"}
            animation={loading2}
            size={50}
          />
        </div>
      )}
    </div>
  );
};

const scrollWrapperCSS = css`
  /* height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden; */
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const contentPageWrapperCSS = ({
  isMobile,
  isTablet,
  isDeskTop,
}: {
  isMobile: boolean;
  isTablet: boolean;
  isDeskTop: boolean;
}) => {
  return css`
    ${isDeskTop === false ? "width: 100vw;" : "width: 100%"};
    /* display: flex;
        flex-direction: column;
        align-items: center; */
    display: grid;
    grid-template-columns: ${isDeskTop ? "repeat(5,1fr)" : "50% 50%"};
    /* grid-template-columns: 50% 50%; */
    place-items: center;
    /* content-visibility: auto; */
  `;
};

const scrollDivCSS = css`
  display: flex;
  justify-content: center;
  height: 48px;
  font-size: 24px;
  font-weight: 700;
`;

const cardWrapperCSS = ({
  width,
  height,
  minWidth,
  minHeight,
  margin,
}: {
  width: string;
  height: string;
  minWidth: string;
  minHeight: string;
  margin: string;
}) => {
  return css`
    width: ${width};
    height: ${height};
    margin: ${margin};
    content-visibility: auto;
  `;
};

export default VerticalScroll;
