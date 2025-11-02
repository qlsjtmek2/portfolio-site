# Portfolio Site

개인 작업물을 소개하는 포트폴리오 사이트입니다.

## ✨ 주요 기능

- **카드 리스트**: 프로젝트를 카드 형태로 보기 좋게 표시
- **상세 페이지**: 마크다운(MDX)으로 작성된 프로젝트 상세 설명
- **개인정보처리방침**: 각 프로젝트별 독립적인 개인정보처리방침 페이지
- **반응형 디자인**: 모든 디바이스에서 최적화된 UI
- **다크 테마**: LOKKEE STUDIOS 스타일의 모던한 다크 테마

## 🛠️ 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Typography Plugin
- **Content**: MDX (마크다운)
- **Deployment**: Vercel (권장)

## 📁 프로젝트 구조

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 전역 레이아웃
│   ├── page.tsx           # 메인 페이지
│   └── projects/
│       └── [slug]/
│           ├── page.tsx          # 프로젝트 상세
│           └── privacy/
│               └── page.tsx      # 개인정보처리방침
├── components/            # React 컴포넌트
│   └── ProjectCard.tsx   # 프로젝트 카드
├── content/              # MDX 콘텐츠
│   └── projects/
│       └── [project-name]/
│           ├── index.mdx        # 프로젝트 상세 설명
│           └── privacy.mdx      # 개인정보처리방침 (선택)
├── lib/                  # 유틸리티 함수
│   └── projects.ts      # 프로젝트 데이터 로드
└── public/              # 정적 파일
    └── images/         # 이미지 파일
```

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 서버 실행

```bash
npm start
```

## 📝 새 프로젝트 추가하기

1. `content/projects/` 디렉토리에 새 폴더 생성:

```bash
mkdir content/projects/my-new-project
```

2. `index.mdx` 파일 생성:

```mdx
---
title: "프로젝트 제목"
description: "프로젝트 설명"
category: "카테고리"
thumbnail: "/images/projects/thumbnail.jpg"
---

# 프로젝트 제목

여기에 마크다운으로 프로젝트 설명을 작성하세요.

## 주요 기능

- 기능 1
- 기능 2
```

3. (선택) 개인정보처리방침이 필요한 경우 `privacy.mdx` 파일 생성:

```mdx
# 개인정보처리방침

프로젝트에 대한 개인정보처리방침을 마크다운으로 작성하세요.
```

4. 썸네일 이미지를 `public/images/projects/` 디렉토리에 추가

## 🔗 URL 구조

- 메인 페이지: `/`
- 프로젝트 상세: `/projects/{project-slug}`
- 개인정보처리방침: `/projects/{project-slug}/privacy`

개인정보처리방침 URL은 독립적으로 접근 가능하여, 앱 스토어 등에 직접 링크를 제공할 수 있습니다.

## 🎨 커스터마이징

### 색상 테마

`app/globals.css`에서 CSS 변수를 수정하세요:

```css
:root {
  --background: #0a0a0a;
  --foreground: #ededed;
}
```

### 레이아웃

`app/layout.tsx`에서 내비게이션 및 푸터를 커스터마이징할 수 있습니다.

### 타이포그래피

Tailwind Typography 플러그인을 사용하여 MDX 콘텐츠의 스타일이 자동으로 적용됩니다.
`prose-invert` 클래스로 다크 모드 스타일이 적용됩니다.

## 📦 배포

### Vercel (권장)

1. Vercel에 GitHub 레포지토리 연결
2. 자동으로 배포 설정이 감지됩니다
3. 배포 완료!

### 다른 플랫폼

Next.js는 다양한 플랫폼에 배포 가능합니다:
- Netlify
- AWS Amplify
- Docker

자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/deployment)를 참고하세요.

## 📄 라이선스

MIT

## 🙏 참고 자료

- 디자인 레퍼런스: [LOKKEE STUDIOS](https://www.lokkeestudios.com/)
- [Next.js 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [MDX 문서](https://mdxjs.com/)
