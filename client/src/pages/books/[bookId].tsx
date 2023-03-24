/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { getBookDetail } from "@/api/book/getBookDetail";
import { useEffect, useState } from "react";
import { resolve } from "node:path/win32";
import { BiChevronRightCircle } from "react-icons/bi";
import Button from "@/components/UI/Button/Button";
import {
  BookmarkToggle,
  HasBeenReadToggle,
  CommentBtn,
} from "../../components/bookDetail/icons";
import TagList from "@/components/bookDetail/TagList";
import RedirButton from "@/components/bookDetail/RedirButton";
import StarRating from "@/components/bookDetail/StarRating";
import FixedModal from "@/components/UI/FixedModal/FixedModal";
import DetailComment from "@/components/DetailComment/DetailComment";
import { useIsResponsive } from "@/components/Responsive/useIsResponsive";

type bookDataType = {
  bookId: number;
  platform: number;
  thumbnail: string;
  title: string;
  author: string;
  href: string;
  story: string;
  tag: string;
  genre: string;
  regist: string;
  grade: string;
  avgScore: number;
  hit: number;
  day: string;
  bookmark: boolean;
  read: boolean;
  myScore: number;
};

interface BookDetailProps {
  bookData: any;
}



const BookDetail = ({ bookData }: BookDetailProps) => {

  const [isDeskTop, isTablet, isMobile] = useIsResponsive();
  const [commentModalState, setCommentModalState] = useState<boolean>(false)

  useEffect(() => {
    console.log(bookData);
  }, []);

  const desktopDecoration = (
  <div css={backgroundWrapperCSS} className={"third-level-el-background"}>
          <div css={blurredImgCSS({ thumbnail: bookData.thumbnail, isDeskTop: isDeskTop })} />
          <div css={verticalGradientCSS({isDeskTop })} className={"vertical-gradient"}/>
          {isDeskTop && <div css={horizontalGradientCSS} />}
        </div>
  )

  const iconBtn = (
    <div css={iconFunctionCSS}>
      <CommentBtn bookId={bookData.bookId} stateHandler={setCommentModalState} />
      <BookmarkToggle
        bookId={bookData.bookId}
        isClicked={bookData.bookmark}
      />
      <HasBeenReadToggle
        bookId={bookData.bookId}
        isClicked={bookData.read}
      />
      {/* <button onClick={() => {setCommentModalState(true); console.log(commentModalState)}}>test</button> */}
    </div>
  )

  const content = (
    <div className={'content'} css={contentCSS({isDeskTop})}>
              <div className={'rowGrid'} css={rowGridCSS({isDeskTop})}>
                <div>
                  {isDeskTop === false && iconBtn}
                  {isDeskTop === true && <TagList tag={bookData.tag} />}
                  
                  <div css={titleCSS({isDeskTop})}>{bookData.title}</div>
                  <div css={scoreDivCSS}>
                    평균 평점 : {bookData.avgScore}
                    <BiChevronRightCircle css={scoreBtnCSS} />
                    {/* <StarRating /> */}
                  </div>
                  {isDeskTop === false && <div css={lineCSS}/>}
                </div>

                <div css={bottomContentCSS}>
                  <div>
                    {isDeskTop && iconBtn}
                    <div css={bookInfoWrapperCSS({isDeskTop})}>
                      <div css={boldTextCSS}>
                        {bookData.genre} ·{" "}
                        {new Date(bookData.regist).getFullYear()} &nbsp; &nbsp;
                      </div>
                      <div>{bookData.author}</div>
                    </div>

                    <div css={storyWrapperCSS}>{bookData.story}</div>
                  </div>
                  <div css={buttonWrapperCSS({isDeskTop})}>
                    <RedirButton
                      width={isMobile ? "100%" : "50%"}
                      height={"64px"}
                      platform={bookData.platform}
                      href={bookData.href}
                    />
                  </div>
                  
                </div>
              </div>
            </div>
  )

  const thumbnail = (

      <div css={thumbnailGridCSS}>
  
        <img css={thumbnailCSS({isDeskTop})} src={bookData.thumbnail} />
      </div>

    
  )

  return (
    <div css={mainContentCSS} className={"top-level-el"}>
      <FixedModal
         modalState={commentModalState}
         stateHandler={setCommentModalState}
         content={<DetailComment bookId={bookData.bookId} />}
      />

      <div css={mainContentInnerWrapperCSS} className={"second-level-el"} >
        {/* {isDeskTop && desktopDecoration} */}
        {desktopDecoration}
        <div css={contentOuterWrapperCSS({isDeskTop})} className={"third-level-el"}>
          <div css={columnGridCSS({isDeskTop})} className={"column-grid"}>
            
            {isDeskTop ? <>{content}{thumbnail}</> : <>{thumbnail}{content}</>}

            

          </div>
        </div>
      </div>
    </div>
  );
};

// getServerSideProps는 async/await를 사용하여 API를 모두 받아올 때까지 대기하였다가 컴포넌트로 props를 넘겨주고, 이후 컴포넌트는 사전 생성 됩니다.
export const getServerSideProps = async (context: any) => {
  const params = await context.params;
  const data = await getBookDetail(params.bookId)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("pages/books/[bookId].tsx => ", err);
    });

  return await {
    props: {
      bookData: data,
    },
  };
};

const mainContentCSS = css`
  width: 100%;
  /* height: 100vh; */
  
  /* overflow-x: hidden; */
`;

const backgroundWrapperCSS = css`
  width: 100%;
    height: 100%;

  
  position: absolute;
`;

interface blurredImgProps {
  thumbnail: string;
  isDeskTop: boolean;
}
const blurredImgCSS = ({ thumbnail, isDeskTop }: blurredImgProps) => {
  return css`
    background: no-repeat url("${thumbnail}") 0 / cover;
    filter: blur(10px);
    -webkit-filter: blur(20px);
    pointer-events: none;
    position: absolute;
    ${isDeskTop && 'right: 0'};

    ${isDeskTop ? 'width: 70vw' : 'width: 100vw'};
    ${isDeskTop ? 'height: 120vh' : 'height: calc(90% - 72px)'};
    ${isDeskTop ? 'opacity: 100%;' : 'opacity: 50%;'};
    

    
  `;
};

const verticalGradientCSS = ({isDeskTop}: {isDeskTop: boolean}) => {
  return css`
    width: 100vw;
    height: ${isDeskTop ? '125vh' : 'calc(100% - 72px)'};
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, var(--back-color) 90%);
    position: absolute;
  `;
}

const horizontalGradientCSS = css`
  width: 100vw;
  height: 125vh;
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0) 0%,
    var(--back-color) 60%
  );
  position: absolute;
`;

const contentOuterWrapperCSS = ({isDeskTop}: {isDeskTop: boolean}) => { 
  return css`
    width: 100vw;
    height: ${isDeskTop ? 'calc(100vh - 72px)' : '100%'};
    /* height: calc(100vh - 72px); */
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding */
  `;
}

const columnGridCSS = ({isDeskTop}: {isDeskTop: boolean}) => {
  return css`
    position: relative;
    display: grid;
    ${isDeskTop ? 'grid-template-columns: 50% 50%' : 'grid-template-rows: 100vw auto'};
    
    /* background-color: red; */
    height: ${isDeskTop ? '80vh' : 'auto'};
    width: 100vw;


  `;
}

const thumbnailGridCSS = css`
  width: 100%;
  /* height: calc(100vh - 72px); */
  display: flex;
  justify-content: center;

  align-items: center;
`;

const thumbnailCSS = ({isDeskTop}: {isDeskTop: boolean}) => {
  return css`
  ${isDeskTop ? 'height: 80vh; width: auto;' : 'height: auto; width: 70vw;'}
    
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  `;
}

const contentCSS = ({isDeskTop}: {isDeskTop: boolean}) => {
  return css`
    width: 100%;
    ${isDeskTop ? 'padding-left: 10vw' : 'padding: 24px;'};
  `;
}

const rowGridCSS = ({isDeskTop}: {isDeskTop: boolean}) => {
  return css`
    display: grid;
    grid-template-rows: ${isDeskTop ? '50%' : 'auto'} 50%;
    ${isDeskTop && 'height: 100%'};
    /* background-color: red; */
  `;
}

const titleCSS = ({isDeskTop}: {isDeskTop: boolean}) => {
  return css`
    font-size: 6vw;
    font-weight: 700;
    margin-bottom: ${isDeskTop ? '24px' : '12px'};
  `;
}

const scoreDivCSS = css`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const scoreBtnCSS = css`
  margin-left: 12px;
  width: 24px;
  height: 24px;
`;

const bottomContentCSS = css`
  display: flex;
  flex-direction: column;
  justify-content: end;
  
  /* justify-content: space-between; */
`;

const iconFunctionCSS = css`
  display: flex;
`;

const bookInfoWrapperCSS = ({isDeskTop}: {isDeskTop: boolean}) => {
  return css`
    display: flex;
    margin-bottom: ${isDeskTop ? '24px' : '12px'};
    margin-top: 12px;
  `;
}

const boldTextCSS = css`
  font-weight: 700;
`;

const storyWrapperCSS = css`
  /* width: 70%; */
  /* height: 70px; */

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  margin-bottom: 24px;
`;

const buttonWrapperCSS = ({isDeskTop}: {isDeskTop: boolean}) => {
 return css`
  width: 100%;
  ${isDeskTop === false && 'display: flex; justify-content: center;'}
 `
}

const lineCSS = css`
  border-bottom: 1px var(--text-color-4) solid;
`

const mainContentInnerWrapperCSS = css`
  height: 100%;
  width: 100%;
`

export default BookDetail;
