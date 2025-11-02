# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 15 기반 개인 포트폴리오 사이트입니다. MDX 파일로 프로젝트 콘텐츠를 관리하며, GitHub Pages에 정적 사이트로 배포됩니다.

## Development Commands

### 기본 개발 명령어
```bash
npm run dev    # 개발 서버 실행 (localhost:3000)
npm run build  # 프로덕션 빌드 (정적 export)
npm run lint   # ESLint 검사
npm start      # 프로덕션 서버 실행 (정적 export 후에는 불필요)
```

### 개발 서버 포트
- 기본 포트: 3000
- 포트 충돌 시 자동으로 3001로 변경됨

## Architecture

### 콘텐츠 관리 시스템
프로젝트는 파일 시스템 기반으로 관리되며, 빌드 시점에 MDX 파일을 읽어 정적 페이지를 생성합니다.

**핵심 로직**: `lib/projects.ts`
- `getProjects()`: 모든 프로젝트 목록 반환
- `getProject(slug)`: 특정 프로젝트 데이터 반환
- `getPrivacyPolicy(slug)`: 개인정보처리방침 반환
- `getProjectSlugs()`: 정적 생성용 slug 목록 반환

**파일 구조**:
```
content/projects/
  project-name/
    index.mdx      # 필수: 프로젝트 상세 설명
    privacy.mdx    # 선택: 개인정보처리방침
```

**MDX Frontmatter**:
```yaml
---
title: "프로젝트 제목"
description: "프로젝트 설명"
category: "카테고리"
thumbnail: "/images/projects/thumbnail.jpg"
---
```

### 라우팅 구조
- `/` - 메인 페이지 (프로젝트 목록)
- `/projects/[slug]` - 프로젝트 상세 페이지
- `/projects/[slug]/privacy` - 개인정보처리방침 페이지

**동적 라우트**: 모든 동적 라우트는 `generateStaticParams()`를 구현해야 합니다 (정적 export 필수).

### 테마 시스템
`next-themes` 라이브러리를 사용한 다크/라이트 모드 전환:
- **Provider**: `components/ThemeProvider.tsx`
- **Toggle 버튼**: `components/ThemeToggle.tsx`
- **CSS 변수**: `app/globals.css`에서 `:root`와 `.dark` 클래스로 정의
- **기본 테마**: 다크모드
- **시스템 테마 감지**: 활성화

### 정적 Export 설정
**파일**: `next.config.ts`

```typescript
{
  output: 'export',                    // 정적 HTML export
  basePath: '/portfolio-site',         // GitHub Pages 서브 경로
  assetPrefix: '/portfolio-site',      // 정적 자산 경로
  images: { unoptimized: true },       // GitHub Pages 호환성
}
```

**중요**: 프로덕션 환경에서만 basePath가 적용됩니다. 로컬 개발 시에는 `/`를 사용합니다.

## Content Management

### 새 프로젝트 추가
1. `content/projects/` 디렉토리에 폴더 생성
2. `index.mdx` 파일 작성 (frontmatter 포함)
3. (선택) `privacy.mdx` 파일 작성
4. (선택) 썸네일 이미지를 `public/images/projects/`에 추가

**이미지가 없어도 됩니다**: 썸네일이 없으면 프로젝트 제목의 첫 글자가 자동으로 표시됩니다.

### 프로젝트 데이터 흐름
```
content/projects/[slug]/index.mdx
  ↓ (빌드 시점)
lib/projects.ts (gray-matter로 파싱)
  ↓
app/projects/[slug]/page.tsx (MDXRemote로 렌더링)
  ↓
정적 HTML 페이지 생성
```

## Styling

### Typography
`@tailwindcss/typography` 플러그인 사용. 프로젝트 상세 페이지에서 `prose` 클래스로 MDX 콘텐츠를 스타일링합니다.

**커스터마이징**: `tailwind.config.ts`에서 typography 설정 수정 가능.

### 색상 시스템
**CSS 변수 방식** (`app/globals.css`):
```css
:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
}

.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
}
```

**Tailwind 클래스**:
- 라이트모드: `text-gray-900`, `bg-white`
- 다크모드: `dark:text-white`, `dark:bg-gray-900`

### 한글 타이포그래피
**폰트**: Pretendard Variable (CDN 로드)
- **위치**: `app/layout.tsx` head 섹션
- **최적화**: 자간(-0.01em), 행간(1.75), 글자 크기(16px)

## Deployment

### GitHub Pages
**워크플로우**: `.github/workflows/deploy.yml`

배포 프로세스:
1. `npm run build` 실행 (정적 export)
2. `out/` 디렉토리 생성
3. GitHub Actions가 `out/` 디렉토리를 GitHub Pages에 배포

**설정 필요**:
- GitHub 저장소 → Settings → Pages
- Source: GitHub Actions 선택

**배포 URL**: `https://[username].github.io/portfolio-site/`

### 로컬 빌드 테스트
```bash
npm run build
# out/ 디렉토리 확인
```

**주의**: `npm start`는 정적 export 후에는 작동하지 않습니다. 로컬 서버 테스트가 필요하면 `npx serve out/`을 사용하세요.

## Key Files

### Core Application
- `app/layout.tsx` - 전역 레이아웃, ThemeProvider, 네비게이션
- `app/page.tsx` - 메인 페이지 (프로젝트 그리드)
- `app/projects/[slug]/page.tsx` - 프로젝트 상세 페이지
- `app/projects/[slug]/privacy/page.tsx` - 개인정보처리방침 페이지

### Components
- `components/ProjectCard.tsx` - 프로젝트 카드 컴포넌트
- `components/ThemeProvider.tsx` - next-themes wrapper
- `components/ThemeToggle.tsx` - 테마 전환 버튼

### Library
- `lib/projects.ts` - 프로젝트 데이터 로드 로직 (핵심)

### Configuration
- `next.config.ts` - Next.js 설정 (정적 export, basePath)
- `tailwind.config.ts` - Tailwind CSS 설정 (typography 포함)
- `app/globals.css` - 전역 스타일, CSS 변수

## Common Patterns

### 동적 라우트 정적 생성
```typescript
export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}
```

**필수**: 모든 `[slug]` 경로는 `generateStaticParams()`를 구현해야 합니다.

### MDX 렌더링
```typescript
import { MDXRemote } from 'next-mdx-remote/rsc';

<MDXRemote source={project.content} />
```

**서버 컴포넌트**: `next-mdx-remote/rsc`를 사용합니다.

### 테마 전환
```typescript
'use client';
import { useTheme } from 'next-themes';

const { theme, setTheme } = useTheme();
setTheme(theme === 'dark' ? 'light' : 'dark');
```

**클라이언트 컴포넌트**: `'use client'` 지시어가 필요합니다.

## Troubleshooting

### 빌드 에러: "Page is missing generateStaticParams()"
**원인**: 동적 라우트에 `generateStaticParams()` 누락
**해결**: 해당 페이지에 `generateStaticParams()` 함수 추가

### 이미지가 표시되지 않음 (GitHub Pages)
**원인**: `basePath` 설정 누락 또는 이미지 최적화 활성화
**해결**:
- `next.config.ts`에 `basePath` 설정
- `images: { unoptimized: true }` 추가

### 테마 전환이 작동하지 않음
**원인**: `suppressHydrationWarning` 누락 또는 클라이언트 컴포넌트 지시어 누락
**해결**:
- `<html>` 태그에 `suppressHydrationWarning` 추가
- ThemeToggle에 `'use client'` 추가

### 개발 서버가 3000번 포트에서 시작되지 않음
**정상**: Next.js는 포트 충돌 시 자동으로 다른 포트(3001)를 사용합니다.
