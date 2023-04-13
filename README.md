# D203 PJT2
# EMOSAAC

---

```jsx
모든 작품, 모든 즐거움! 이모작

흩어져서 봐야 하는 웹툰과 웹소설이 불편하지 않으셨나요?
이모작만의 추천을 방법을 통해 
네이버, 카카오, 리디의 웹툰 / 웹소설을 한 곳에서 검색·추천 받으세요.
```

# 프로젝트 소개

---

## 개요

- 삼성청년소프트웨어아카데미(SSAFY) 2학기 특화프로젝트(빅데이터 추천)에서 만든 프로젝트
- 2023.02.27  ~ 2023.04.07 (6주)
- 총 6명 ( 프론트엔드 3명, 백엔드 3명)으로 구성

## 주제

- 네이버, 카카오, 리디의 웹툰 / 웹소설을 한 곳에서 빅데이터 추천방식을 통한 사용자에게 추천해주는 플랫폼

## 아키텍처

- 찬희야 아키텍처 넣어주라

## 메인페이지

- 로그인 / 웹툰 / 웹소설로 이동할 수 있는 버튼과 이모작의 서비스 소개 페이지
<div align="center">
![메인케러셀](/uploads/7ccff7a245f17e270e287af9836a36cd/메인케러셀.gif)
</div>

## 로그인

- OAuth2.0을 활용한 네이버 / 카카오 로그인
<div align="center">
![로그인](/uploads/06e7b2c4970a2b773a430073f45187d6/로그인.gif)
</div>

## 설문조사

- 설문조사와 회원정보를 바탕으로 자체 알고리즘 분석으로 추천하기 위한 페이지
<div align="center">
![설문조사](/uploads/3151bb695b6f4f2ce9d1708888296a0b/설문조사.gif)
</div>

## 검색기능

- 검색창에서 작품을 검색
- 최근 조회한 목록이 최상단으로 올 수 있도록 구성
<div align="center">
![검색](/uploads/0d9fed7ca4a4cb767cb9ad5403f81c54/검색.gif)
</div>

## 웹툰 · 웹소설 추천

- 알고리즘 방식을 활용한 개별 사용자에게 작품 추천
- 가로의 경우, 외형상 카로셀의 형태를 취하고 있음
    - 그러나 반응형을 고려하여, 내부적으로는 무한 스크롤로 작동한다.
    - 작동 방식이 스크롤이므로 창의 크기를 줄여도 알아서 보여주는 작품의 수를 조정한다.
    - 고려해야 했던 것은 다음, 이전 버튼을 눌렀을 때 화면에 보이는 작품의 수만큼 넘겨서 다음, 이전 작품들을 보여주어야 했다.
        - 이때는 여러 과정을 거쳐서 최적화와 업그레이드가 진행되었다.
        - 반응형이었으므로 일정 개수의 작품들 단위로 2차원 배열로 묶거나, 상위 요소에 배치할 수 없었다. 오직 모든 작품들을 하나의 요소의 자식으로 배치해야만 했다.
        - 처음에는 현재 창 크기를 구하고 작품 카드 크기, 마진을 구해서 이를 계산하여 화면에 보이는 작품이 몇개인지 구하고, 그 만큼 다음, 이전으로 넘겨주었다.
        - 이후 여러차례 새로 엎어가며 만들게 되면서 IntersectionObserver를 활용하게 되었고, 모든 카드를 추적하는 경우 성능면에서 아주 안좋았으므로로 알고리즘을 통해 현재 보이는 작품 카드 양 옆으로 보이는 카드 개수만큼 더 해서 Tracing하였다.
        - Tracing하는 카드가 화면에 보이게 되면 카드에 별도의 클래스이름을 추가하였다.
        - 별도로 클래스 이름이 추가되어 보이는 카드에 접근하기 용이해져, 보이는 카드가 몇개인지 확인할 수 있었고, 해당 카드들의 엘리먼트 배열에서 첫번째 카드와 마지막 카드를 기준으로 보이는 카드 개수를 +- 계산하여 다음, 이전 버튼의 기능을 수행하도록 하였다.
        - 이렇게 해야만 했던 이유는 사소해 보일수 있지만, 카로셀이 스크롤 방식이므로 양 끝단의 작품들이 가려지게 될 수 있는데 적어도 왼쪽 끝단의 작품은 온전히 보여야 깔끔하기도 하고 접근성도 용이하리라 보았다. 그리하여 위와 같은 방식을 취했고, 정확하게 해당 작품의 개수만큼 스크롤 좌표를 구하게 되었다.
<div align="center"> 
![작품캐러셀](/uploads/d842e57b8ca997a9e9daee803d010610/작품캐러셀.gif)
</div>

## 디테일
<div align="center"> 
![디테일](/uploads/e2a83d118e0e9e1a17f140404129afca/디테일.gif)
</div>


## 이모픽

- 사용자들이 직접 본인의 추천 리스트를 작성하는 공간
<div align="center"> 
![이모픽](/uploads/d48151bbefb153e40cf78cbadbc445b2/이모픽.gif)
![이모픽_디테일](/uploads/fc137e0488b8ef9fccd3f9aecb6c395c/이모픽_디테일.gif)
</div>

## 마이 페이지

- ApexChart를 통한 사용자의 조회 장르 차트를 통해 사용자의 취향을 알려주는 기능
<div align="center">
![마이페이지](/uploads/5ab0eb1178939047f308e654e20a6871/마이페이지.gif)
</div>

## OCR기능을 이용한 자동 읽음 처리

- Google Cloud VIsion API를 활용한 OCR스캔 기능을 통해 사용자가 첨부한 사진을 스캔하여 작품을 읽음처리
- 읽음처리 이후 평점을 매기게 하여 그를 바탕으로 한 알고리즘 분석으로 사용자에게 작품을 추천
<div align="center"> 
![OCR](/uploads/050446640dfad941e617012bfd7f59c9/OCR.gif)
</div>

## 다크모드

<div align="center">
![다크모드](/uploads/dc7cdf10f89b67493383b6438e0ffcff/다크모드.gif)
</div>

---

## 배운점 및 아쉬운 점

- 김종혁 : Next.js를 활용한 SSR이 어떤 로직으로 돌아가는지를 몸소 체감할 수 있었던 점이 가장 큰 수확이었던 것 같다. 다만 배울 시간이 부족한 채로 프로젝트에 적용하여 전체적인 일정에 딜레이가 생겼던 점은 아쉽다. 반응형 웹으로 매번 깨지던 레이아웃을 팀원들 덕분에 완벽하게 구현할 수 있게 배운 점 또한 굉장히 만족스러웠다.
- 김동주 :
- 김현영 :
