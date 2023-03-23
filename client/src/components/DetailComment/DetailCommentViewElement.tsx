/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { CommentType } from "@/types/comments"




// export type CommentType = {
//     "commentId": number;
//     "content": string;
//     "writerInfo": {
//         "userId": string;
//         "nickname": string;
//         "profileImg": string;
//     },
//     "parentWriterNickName": string | null;
//     "depth": number;
//     "createdDate": string;
//     "modifiedDate": string;
//     "isDelete": boolean;
//     "isChild": boolean;
//     }

const DetailCommentViewElement = ({comment}: {comment: CommentType}) => {

    return (
        <div css={commentWrapperCSS}>
            <div css={commentInfoWrapperCSS}>
                <div css={writerInfoWrapperCSS}>
                    <div css={profileImgWrapperCSS}>
                        <img src={comment.writerInfo.profileImg} />
                    </div>
                    <span>{comment.writerInfo.nickname}</span>
                </div>
                <span>{comment.createdDate}</span>
                
            </div>
            <div css={commentContentWrapperCSS}>
                {comment.content}
            </div>
            
        </div>
    )
}

const commentWrapperCSS = css`
    border-bottom: 1px solid var(--back-color-op);
`

const commentInfoWrapperCSS = css`
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    margin-bottom: 24px;
`

const writerInfoWrapperCSS = css`
    display: flex;

`

const profileImgWrapperCSS = css`
    width: 48px;
    height: 48px;
    border-radius: 100px;
    background-color: var(--back-color-op);
    overflow: hidden;
`

const commentContentWrapperCSS = css`
    margin-bottom: 24px;
`
export default DetailCommentViewElement