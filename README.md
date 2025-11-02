# Portfolio Site

Next.js 15와 MDX로 구축한 개인 포트폴리오 사이트입니다. GitHub Pages를 통해 정적 사이트로 배포됩니다.

## 📋 현재 프로젝트

1. **Jekyll Chirpy Git Exporter** - Obsidian에서 Jekyll 블로그로 원클릭 포스트 업로드 플러그인
2. **개인 포트폴리오 사이트** - Next.js 15와 MDX로 구축한 정적 포트폴리오 웹사이트
3. **Retro Runner** - 80년대 아케이드 감성의 레트로 러너 게임

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
- **Deployment**: GitHub Pages (정적 export)

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

### 빌드 (정적 export)

```bash
npm run build
```

빌드가 완료되면 `out/` 디렉토리에 정적 HTML 파일이 생성됩니다.

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

4. (선택) 썸네일 이미지 추가:

```bash
# 이미지를 public/images/projects/ 디렉토리에 저장
cp my-image.jpg public/images/projects/my-project.jpg

# MDX frontmatter에 추가
# thumbnail: "/images/projects/my-project.jpg"
```

**이미지가 없어도 됩니다!** 이미지가 없으면 프로젝트 제목의 첫 글자가 표시됩니다.

자세한 이미지 추가 방법은 [HOW_TO_ADD_IMAGES.md](HOW_TO_ADD_IMAGES.md)를 참고하세요.

## 🔗 URL 구조

- 메인 페이지: `/`
- 프로젝트 상세: `/projects/{project-slug}`
- 개인정보처리방침: `/projects/{project-slug}/privacy`

개인정보처리방침 URL은 독립적으로 접근 가능하여, 앱 스토어 등에 직접 링크를 제공할 수 있습니다.

## 🎨 커스터마이징

### 게시글 스타일 (폰트, 여백, 행간)

**파일:** `tailwind.config.ts`

프로젝트 상세 페이지의 폰트 크기, 자간, 행간, 여백을 한 곳에서 조정할 수 있습니다.

자세한 내용은 **[STYLING_GUIDE.md](STYLING_GUIDE.md)** 참고

**빠른 예시:**
```typescript
// tailwind.config.ts
typography: (theme: any) => ({
  DEFAULT: {
    css: {
      p: {
        fontSize: '1.125rem',    // 본문 크기
        lineHeight: '1.75',      // 행간
        letterSpacing: '0.01em', // 자간
      },
    },
  },
}),
```

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

## 📦 배포

### GitHub Pages (현재 설정)

이 프로젝트는 GitHub Pages를 통해 자동으로 배포됩니다.

#### 설정 방법

1. GitHub 저장소 Settings → Pages
2. Source: **GitHub Actions** 선택
3. `main` 브랜치에 푸시하면 자동 배포

#### 주요 설정 파일

**`next.config.ts`**
```typescript
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/portfolio-site' : '';

const nextConfig = {
  output: 'export',           // 정적 HTML 생성
  basePath,                   // GitHub Pages 서브 경로
  assetPrefix: basePath,      // 자산 경로 접두사
  images: {
    unoptimized: true,        // GitHub Pages 호환
  },
};
```

**`.github/workflows/deploy.yml`**
- `main` 브랜치 푸시 시 자동 빌드 및 배포
- `npm run build` 실행 → `out/` 디렉토리 생성
- GitHub Pages에 정적 파일 배포

#### 배포 URL

```
https://{username}.github.io/portfolio-site/
```

### 다른 플랫폼

정적 export를 지원하는 다른 플랫폼에도 배포 가능:
- Vercel
- Netlify
- AWS Amplify
- Cloudflare Pages

자세한 내용은 [Next.js 정적 export 문서](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)를 참고하세요.

## 📄 라이선스

MIT

## 🙏 참고 자료

- 디자인 레퍼런스: [LOKKEE STUDIOS](https://www.lokkeestudios.com/)
- [Next.js 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [MDX 문서](https://mdxjs.com/)
