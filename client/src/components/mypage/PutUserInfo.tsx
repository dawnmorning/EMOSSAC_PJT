/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Image from "next/image";
import profileimage from "../../assets/profileexample.jpg";
export default function PutUserInfo() {
  return (
    <>
      <section>
        <form action="" css={formCSS}>
          <article css={textwrapCSS}>
            <h2>회원정보수정</h2>
          </article>
          <div>
            <div css={imagewrapCSS}>
              <label htmlFor="profileImage">
                <Image css={imageCSS} src={profileimage} alt="프로필 이미지" />
              </label>
            </div>
            <input
              id="profileImage"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
            />
          </div>
          <div css={nicknamewrapCSS}>
            <label htmlFor="">
              <h3>닉네임</h3>
            </label>
            <input
              css={inputwrapCSS}
              type="text"
              placeholder="닉네임을 입력해주세요"
            />
            <button css={nicknameconfirmCSS}>중복확인</button>
          </div>
          <div css={genderwrapCSS}>
            <h3 css={genderCSS}>성별</h3>
            <button css={genderbuttonCSS}>남성</button>
            <button css={genderbuttonCSS}>여성</button>
          </div>
          <div>
            <div css={agewrapCSS}>
              <h3 css={ageCSS}>연령대</h3>
              <div css={explainCSS}>연령대에 맞게 추천을 해드려요!</div>
            </div>
            <select css={selectCSS}>
              <option value="">연령대를 선택해주세요</option>
              <option value="">10대</option>
              <option value="">20대</option>
              <option value="">30대</option>
              <option value="">40대</option>
              <option value="">50대</option>
              <option value="">60대 이상</option>
            </select>
          </div>
        </form>
      </section>
    </>
  );
}

const formCSS = css`
  color: var(--text-color);
  display: flex;
  height: 80vh;
  flex-direction: column;
  justify-content: center;
  width: 70vh;
  padding: 10px;
  border-radius: 5px;
  margin: 50px auto;
  border: 1px solid var(--border-color);
`;
const textwrapCSS = css`
  text-align: left;
  margin-bottom: 40px;
`;

const nicknamewrapCSS = css`
  position: relative;
  margin-top: 30px;
`;
const nicknameconfirmCSS = css`
  position: absolute;
  cursor: pointer;
  color: var(--main-color);
  border: 1px solid var(--border-color);
  background-color: var(--back-color);
  border-radius: 5px;
  padding: 3px 3px;
  /* color :  */
  bottom: 5px;
  right: 0px;
`;
const imagewrapCSS = css`
  width: 150px;
  height: 150px;
  /* img태그 위에 auto를 주어야 바뀜 */
  margin: 0 auto;
`;
const imageCSS = css`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  cursor: pointer;
`;
const inputwrapCSS = css`
  border: none;
  border-bottom: 3px solid var(--main-color);
  margin-top: 10px;
  width: 100%;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: var(--text-color);
    font-weight: bold;
  }
  background-color: var(--back-color);
  color: var(--text-color);
`;

const selectCSS = css`
  margin-top: 10px;
  border-radius: 5px;
`;

const genderwrapCSS = css`
  margin-top: 20px;
`;

const genderCSS = css`
  border: none;
  border-bottom: 3px solid var(--main-color);
  padding-bottom: 1px;
`;
const genderbuttonCSS = css`
  cursor: pointer;
  margin-top: 5px;
  margin-right: 3px;
`;
const agewrapCSS = css`
  margin-top: 20px;
`;

const ageCSS = css`
  border: none;
  border-bottom: 3px solid var(--main-color);
  padding-bottom: 1px;
`;

const explainCSS = css`
  margin-left: 2px;
  margin-top: 5px;
  font-size: 10px;
`;