# 오늘의집 클론코딩

## Stacks

### Environment

<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=VisualStudioCode&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/>

### Development

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS Modules-000000?style=flat-square&logo=cssmodules&logoColor=white"/>
<img src="https://img.shields.io/badge/zustand-ffffff?style=flat-square&logo=zustand&logoColor=black"/>

---

## Functions

#### 1. 헤더 섹션

- 로그인 클릭 시 로그인 페이지로 이동 (모바일 버전: 좌측 메뉴 버튼 클릭)
- 닉네임 클릭 > 로그아웃 버튼 클릭 시 로그아웃 (모바일 버전: 좌측 메뉴 버튼 클릭)
- 장바구니 클릭 시 장바구니 페이지로 이동
- 글쓰기 클릭 시 상품 등록 페이지로 이동

#### 2. 상품 리스트 페이지

- 상품 클릭 시 상세 페이지로 이동

#### 3. 상품 상세 페이지

- 장바구니 버튼 클릭 시 장바구니에 상품 추가

#### 4. 로그인 페이지

- 관리자 전용 아이디/비밀번호 입력
- 회원 전용 구글 소셜 로그인

#### 5. 상품 등록 페이지

- 관리자 외 접근 금지
- 상품명, 가격, 이미지 등록

#### 6. 장바구니 페이지

- 회원 이메일 당 하나의 장바구니 생성
- 상품 추가 및 삭제

---

## Run it locally

### Requirements

For building and running the application you need:

[Node.js 18.13.0](https://nodejs.org/ca/blog/release/v18.13.0/)  
[Npm 8.19.3](https://www.npmjs.com/package/npm/v/8.19.3)

### Installation

```
git clone https://github.com/YeonsuBaek/ohou.git

npm install
npm start
```

### Admin Login

.env.local

```
REACT_APP_ADMIN_ID=admin1234
REACT_APP_ADMIN_PW=1234
```
