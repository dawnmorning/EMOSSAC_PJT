/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React, { useState, useRef, useEffect, useMemo } from "react";
// import ScrollableCarousel from "@/components/UI/ScrollableCarousel/ScrollableCarousel";
import SwipeableGallery from "@/components/UI/SwipeableCarousel/SwipeableGallery";
import { recvBooks } from "@/api/DummyData";
// import banner1 from "../../assets/temp_banner_1.png";
// import banner2 from "../../assets/temp_banner_2.png";
import Image from "next/image";
import HighlightedCarousel from "@/components/bookTab/HighlightedCarousel/HighlightedCarousel";
import RowTitle from "@/components/bookTab/RowTitle/RowTitle";
import { useIsResponsive } from "@/components/Responsive/useIsResponsive";
// import contentBannerDesktop from "/assets/content_banner_desktop_tablet.png"
// import contentBannerMobile from "/assets/content_banner_mobile.png"
import { getBooksByGenre } from "@/api/book/getBooksByGenre";
import { bookContentType } from "@/types/books";
import { useRouter } from "next/router";
import { getGenres } from "@/api/book/getGenres";
import { returnGenresType } from "@/types/books";
import GenreList from "@/components/bookTab/MenuTab/GenreList";
import DayList from "@/components/bookTab/MenuTab/DayList";
import SortByRows from "@/components/bookTab/SortByRows";
import SortByDay from "@/components/bookTab/SortByDay";
import Waterfall from "@/components/scan/Waterfall/Waterfall";
import FloatingButton from "@/components/scan/FloatingButton/FloatingButton";
// import HorizontalCarousel from "@/components/UI/ScrollableCarousel/HorizontalCarousel";

import { getHighPrediction } from "@/api/recommendation/getHighPrediction";
import { getMdRecommendation } from "@/api/recommendation/getMdRecommendation";
import { getPersonalRecommendation } from "@/api/recommendation/getPersonalRecommendation";
import { getRelative } from "@/api/recommendation/getRelative";
import { getReleased } from "@/api/recommendation/getReleased";
import { getTop3GenreBooks } from "@/api/recommendation/getTop3GenreBooks";
import { getTop30 } from "@/api/recommendation/getTop30";
import { getUserCharacteristicRecommendation } from "@/api/recommendation/getUserCharacteristicRecommendation";
import { getBooksByDay } from "@/api/book/getBooksByDay";
import VerticalScroll from "@/components/UI/VerticalScroll/VerticalScroll";
import SortByGenre from "@/components/bookTab/SortByGenre";
import { throttle, debounce } from "lodash";
import Footer from "@/components/UI/Footer/Footer";

interface HomeProps {
  highlightedBookData: bookContentType[];
  genres: returnGenresType;
  params: any;
  isDarkMode: boolean;
  myInfo: any;
}

export default function Home({
  highlightedBookData,
  genres,
  params,
  isDarkMode,
  myInfo,
}: HomeProps) {
  // webtoon, novel
  const parentRef = useRef<HTMLDivElement>(null);
  const indexWrapperRef = useRef<HTMLDivElement>(null);
  const [selectedGenre, setSelectedGenre] = useState<number>(-2);
  const [isDeskTop, isTablet, isMobile] = useIsResponsive();
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [selectedDay, setSelectedDay] = useState<number>(
    window.sessionStorage.getItem(`${params}-selected_day`)
      ? Number(window.sessionStorage.getItem(`${params}-selected_day`))
      : 0
  );
  const [randomIdentifier, setRandomIdentifier] = useState<number>(0);

  const [bannerLoading, setBannerLoading] = useState<boolean>(true)

  // useEffect(() => {
  //   return () => {
  //     setSelectedGenre(() => window.localStorage.getItem(`${params}-_genre`) ? Number(window.localStorage.getItem(`${params}-selected_genre`)) : -2)
  //   setSelectedDay(() => window.localStorage.getItem(`${params}-selected_day`) ? Number(window.localStorage.getItem(`${params}-selected_day`)) : 0)
  //   }

  // }, [params])

  useEffect(() => {
    setRandomIdentifier(() => Math.floor(Math.random() * 100000));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", throttleScroll);
    window.addEventListener("scroll", debounceScroll);
    return () => {
      window.removeEventListener("scroll", throttleScroll); //clean up
      window.removeEventListener("scroll", debounceScroll); //clean up
    };
  }, []);

  const throttleScroll = useMemo(
    () =>
      throttle(() => {
        if (indexWrapperRef.current) {
          indexWrapperRef.current.style.pointerEvents = "none";
        }

        setIsScrolling(() => true);
      }, 100),
    []
  );
  const debounceScroll = useMemo(
    () =>
      debounce(() => {
        if (indexWrapperRef.current) {
          indexWrapperRef.current.style.pointerEvents = "auto";
        }
        if (document.documentElement.scrollTop !== 0) {
          window.localStorage.setItem(
            `index_scroll_value`,
            String(document.documentElement.scrollTop)
          );
          window.sessionStorage.removeItem(`scroll_timing_horizontal`);
        }

        setIsScrolling(() => false);
      }, 200),
    []
  );

  const postData = {
    content: [
      <img
        src={
          isMobile
            ? "/assets/temp_banner_1_mobile.png"
            : "/assets/temp_banner_1.png"
        }
        alt={""}
        css={bannerImage({bannerLoading})}
        onLoad={() => {setBannerLoading(() => false)}}
      />,
      <img
        src={
          isMobile
            ? "/assets/temp_banner_2_mobile.png"
            : "/assets/temp_banner_2.png"
        }
        alt={""}
        css={bannerImage({bannerLoading})}
      />,
    ],
  };

  const selectGenreHandler = (selected: number) => {
    window.sessionStorage.setItem(`${params}-selected_genre`, String(selected));

    setSelectedGenre(() => selected);
  };

  const selectDayHandler = (selected: number) => {
    window.sessionStorage.setItem(`${params}-selected_day`, String(selected));
    setSelectedDay(() => selected);
  };

  const days = ["일", "월", "화", "수", "목", "금", "토"];

  const getBooksByDayAPI = ({
    lastContent,
    size,
  }: {
    lastContent?: bookContentType;
    size: number;
  }) => {
    // return getBooksByGenre({genreCode: 11, typeCode: 0, prevId, prevScore, size})
    const prevId = lastContent ? lastContent.bookId : 0;
    const prevScore = lastContent ? lastContent.avgScore : 10;
    return getBooksByDay({
      day: days[new Date().getDay()],
      typeCode: params === "webtoon" ? 0 : 1,
      prevId: prevId,
      prevScore: prevScore,
      genreCode: selectedGenre,
      size,
    });
  };

  const getBooksByGenreAPI = ({
    lastContent,
    size,
  }: {
    lastContent?: bookContentType;
    size: number;
  }) => {
    const prevId = lastContent ? lastContent.bookId : 0;
    const prevScore = lastContent ? lastContent.avgScore : 10;
    return getBooksByGenre({
      genreCode: selectedGenre,
      typeCode: params === "webtoon" ? 0 : 1,
      prevId: prevId,
      prevScore: prevScore,
      size: size,
    });
  };

  const getHighPredictionAPI = ({
    lastContent,
    size,
  }: {
    lastContent: bookContentType;
    size: number;
  }) => {
    const prevId = lastContent ? lastContent.bookId : 0;
    const prevScore = lastContent ? lastContent.predictScore : 10;
    return getHighPrediction({
      typeCode: params === "webtoon" ? 0 : 1,
      prevId: prevId,
      prevScore: prevScore,
      size: size,
    });
  };

  const getReleasedAPI = ({
    lastContent,
    size,
  }: {
    lastContent: bookContentType;
    size: number;
  }) => {
    const prevId = lastContent ? lastContent.bookId : 20000;
    const prevRegist = lastContent ? lastContent.regist : "2023.03.20";
    return getReleased({
      typeCode: params === "webtoon" ? 0 : 1,
      prevId: prevId,
      prevRegist: prevRegist,
      size: size,
    });
  };

  const getTop1GenreBooksAPI = ({
    lastContent,
    size,
  }: {
    lastContent: bookContentType;
    size: number;
  }) => {
    const prevId = lastContent ? lastContent.bookId : 0;
    const prevScore = lastContent ? lastContent.avgScore : 10;
    return getTop3GenreBooks({
      order: 1,
      typeCode: params === "webtoon" ? 0 : 1,
      prevId: prevId,
      prevScore: prevScore,
      size: size,
    });
  };

  const getTop2GenreBooksAPI = ({
    lastContent,
    size,
  }: {
    lastContent: bookContentType;
    size: number;
  }) => {
    const prevId = lastContent ? lastContent.bookId : 0;
    const prevScore = lastContent ? lastContent.avgScore : 10;
    return getTop3GenreBooks({
      order: 2,
      typeCode: params === "webtoon" ? 0 : 1,
      prevId: prevId,
      prevScore: prevScore,
      size: size,
    });
  };

  const getTop30API = ({
    lastContent,
    size,
  }: {
    lastContent: bookContentType;
    size: number;
  }) => {
    const prevId = lastContent ? lastContent.bookId : 20000;
    const prevScore = lastContent ? lastContent.avgScore : 10;
    const hit = lastContent ? lastContent.hit : 1000;
    return getTop30({
      typeCode: params === "webtoon" ? 0 : 1,
      prevId: prevId,
      prevScore: prevScore,
      size: size,
      hit: hit,
    });
  };

  const getMdRecommendationAPI = ({
    lastContent,
    size,
  }: {
    lastContent: bookContentType;
    size: number;
  }) => {
    return getMdRecommendation({
      typeCode: params === "webtoon" ? 0 : 1,
    });
  };

  const getPersonalRecommendationAPI = ({
    lastContent,
    size,
  }: {
    lastContent: bookContentType;
    size: number;
  }) => {
    return getPersonalRecommendation({
      typeCode: params === "webtoon" ? 0 : 1,
    });
  };

  const getRelativeAPI = ({
    lastContent,
    size,
  }: {
    lastContent: bookContentType;
    size: number;
  }) => {
    return getRelative({
      bookId: 0,
    });
  };

  const getUserCharacteristicRecommendationAPI = ({
    lastContent,
    size,
  }: {
    lastContent: bookContentType;
    size: number;
  }) => {
    return getUserCharacteristicRecommendation({
      typeCode: params === "webtoon" ? 0 : 1,
    });
  };

  const bookHomeFetchList = [
    {
      API: getHighPredictionAPI,
      identifier: `HighPrediction-${params}`,
      beforeLabel: `놀라지마세요, `,
      highlightedLabel: "완전 내 취향",
      afterLabel: ` ${params === "webtoon" ? "웹툰" : "웹소설"}을 보여줄게요`,
      requireLogin: true,
    },
    {
      API: getRelativeAPI,
      identifier: `Relative-${params}-${randomIdentifier}`,
      beforeLabel: "최근 읽은 작품과  ",
      highlightedLabel: "비슷한",
      afterLabel: ` ${params === "webtoon" ? "웹툰" : "웹소설"}을 보여줄게요`,
      requireLogin: true,
    },
    {
      API: getTop1GenreBooksAPI,
      identifier: `Top1GenreBooks-${params}`,
      highlightedLabel: "가장 선호하는 장르 ",
      afterLabel: "를 보여줄게요",
      requireLogin: true,
    },
    {
      API: getTop2GenreBooksAPI,
      identifier: `Top2GenreBooks-${params}`,
      highlightedLabel: "두번째 선호하는 장르",
      afterLabel: "를 보여줄게요",
      requireLogin: true,
    },

    {
      API: getUserCharacteristicRecommendationAPI,
      identifier: `UserCharacteristicRecommendation-${params}`,
      highlightedLabel: `${myInfo.age}대 ${
        myInfo.gender === 0 ? "남성" : "여성"
      }`,
      afterLabel: `이 많이 본 ${params === "webtoon" ? "웹툰" : "웹소설"}`,
      requireLogin: true,
    },
    {
      API: getReleasedAPI,
      identifier: `Released-${params}`,
      beforeLabel: "지난 1년간  ",
      highlightedLabel: "새로 나온",
      afterLabel: ` ${params === "webtoon" ? "웹툰" : "웹소설"}`,
      requireLogin: false,
    },
    {
      API: getTop30API,
      identifier: `Top30-${params}`,
      beforeLabel: "이모들이  ",
      highlightedLabel: "가장 많이 조회한",
      afterLabel: " 작품",
      requireLogin: false,
    },
  ];

  const bookGenreFetchList = [
    {
      API: getBooksByDayAPI,
      identifier: `getBooksByGenre-${params}-${selectedGenre}`,
      beforeLabel: "장르 추천 ",
      highlightedLabel: "EMOSAAC!",
      requireLogin: false,
    },
  ];


  const rowTitleAfterLabel = ` ${
    params === "webtoon" ? "웹툰" : "웹소설"
  }을 보여줄게요`;
  const highlightedCarouselRender = (
    <>
      <div css={whiteSpace1CSS} />
      <div css={innerLayoutWrapperCSS({ isDeskTop, isTablet, isMobile })}>
        <RowTitle
          beforeLabel="MD가 "
          highlightedLabel="강력 추천하는"
          afterLabel={rowTitleAfterLabel}
          noLine={true}
          marginBottom={"35px"}
        />
      </div>

      <div css={highlightedCarouselWrapper}>
        <HighlightedCarousel
          key={params}
          bookData={highlightedBookData}
          windowWrapperRef={indexWrapperRef}
          identifier={params}
        />
      </div>
      <div css={whiteSpace2CSS} />
    </>
  );



  return (
    <React.Fragment>

    
    <div ref={indexWrapperRef} css={indexWrapperCSS({ isScrolling })}>
      {/* <FloatingButton isDarkMode={isDarkMode}/> */}
      {myInfo !== false && <FloatingButton isDarkMode={isDarkMode} />}
      <div css={bannerWrapperCSS} ref={parentRef}>
        <SwipeableGallery parentRef={parentRef} content={postData} />
      </div>

      <GenreList
        genres={genres}
        selected={selectedGenre}
        selectHandler={selectGenreHandler}
        params={params}
      />
      {selectedGenre === -1 && (
        <DayList selected={selectedDay} selectHandler={selectDayHandler} />
      )}

      {selectedGenre === -2 && highlightedCarouselRender}

      {selectedGenre === -2 && (
        <SortByRows fetchList={bookHomeFetchList} myInfo={myInfo} />
      )}

      {selectedGenre === -1 && (
        <SortByDay params={params} selectedDay={selectedDay} />
      )}

      {selectedGenre >= 0 && (
        <SortByRows fetchList={bookGenreFetchList} myInfo={myInfo} />
      )}

      {selectedGenre >= 0 && (
        <SortByGenre selectedGenre={selectedGenre} params={params} />
      )}


      

    </div>
    
    </React.Fragment>
  );
}


export async function getStaticPaths(context: any) {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

  const paths = [
    { params: { books: "webtoon" } },
    { params: { books: "novel" } },
  ];


  return { paths, fallback: false };

}


export const getStaticProps = async (context: any) => {
  type paramsType = "webtoon" | "novel";
  const params: paramsType = context.params.books;
  const genreTypeCode: { webtoon: number; novel: number } = {
    webtoon: 0,
    novel: 1,
  };

  let genres = null;
  if (params === "webtoon" || params === "novel") {
    genres = await getGenres({ typeCode: genreTypeCode[params] }).then(
      (res) => {
        if (res !== null) {
          return res;
        }
      }
    );
  }



  const highlightedBookData = await getMdRecommendation({
    typeCode: params === "webtoon" ? 0 : 1,
  })
    .then((res) => {
      if (res !== null) {
        return res.content;
      }
    })
    .catch((err) => {
      console.log("pages/books/index.tsx => getBooksByGenre", err);
    });

  return {
    props: {
      highlightedBookData: highlightedBookData,
      genres: genres,
      params: params,
    },
    revalidate: 86400,
  };
};

const indexWrapperCSS = ({ isScrolling }: { isScrolling: boolean }) => {
  return css`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 64px;
  `;
};

const bannerImage = ({bannerLoading}: {bannerLoading: boolean}) => {
  return css`
    width: 100%;
    height: auto;
    transition-duration: 0.3s;
    transition-property: opacity;
    opacity: ${bannerLoading === false ? '100%' : '0%'};
    
  `;
} 

const whiteSpace1CSS = css`
  width: 100%;
  height: 5vw;
  min-height: 48px;
`;

const whiteSpace2CSS = css`
  width: 100%;
  height: 7vw;
  min-height: 72px;
`;

const bannerWrapperCSS = css`
  width: 100%;
  overflow: hidden;
`;

const highlightedCarouselWrapper = css`
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: center;
`;

const bookCarouselWrapperCSS = css`
  width: 100%;
  /* overflow: hidden; */
  border-radius: 10px; ;
`;

interface innerLayoutWrapperCSSProps {
  isDeskTop: boolean;
  isTablet: boolean;
  isMobile: boolean;
}
const innerLayoutWrapperCSS = ({
  isDeskTop,
  isTablet,
  isMobile,
}: innerLayoutWrapperCSSProps) => {
  const whiteSpace = (isDeskTop && 210) || (isTablet && 100) || (isMobile && 0);
  return css`
    width: calc(100% - ${whiteSpace}px);
    /* margin: 0px 105px; */
  `;
};
