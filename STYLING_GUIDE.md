# 📝 게시글 스타일 커스터마이즈 가이드

프로젝트 상세 페이지(MDX 콘텐츠)의 폰트 크기, 자간, 행간, 여백을 **한 곳에서** 조정할 수 있습니다.

---

## 🎨 중앙 설정 파일

**파일 위치:** `tailwind.config.ts`

이 파일의 `typography` 섹션에서 모든 게시글 스타일을 조정할 수 있습니다.

---

## 📐 주요 설정 항목

### 1. 제목 스타일 (h1, h2, h3)

```typescript
h1: {
  fontSize: '2.5rem',        // 폰트 크기
  lineHeight: '1.2',         // 행간 (1.2 = 120%)
  letterSpacing: '-0.02em',  // 자간 (음수 = 좁게)
  marginTop: '2rem',         // 위 여백
  marginBottom: '1.5rem',    // 아래 여백
  fontWeight: '700',         // 두께 (400-900)
}
```

### 2. 본문 텍스트 (p)

```typescript
p: {
  fontSize: '1.125rem',      // 폰트 크기 (18px)
  lineHeight: '1.75',        // 행간 (175%)
  letterSpacing: '0.01em',   // 자간 (양수 = 넓게)
  marginTop: '1.25rem',      // 위 여백
  marginBottom: '1.25rem',   // 아래 여백
}
```

### 3. 리스트 항목 (li)

```typescript
li: {
  fontSize: '1.125rem',      // 폰트 크기
  lineHeight: '1.75',        // 행간
  marginTop: '0.5rem',       // 위 여백
  marginBottom: '0.5rem',    // 아래 여백
}
```

---

## 🔧 자주 조정하는 설정

### 본문 텍스트를 더 크게 만들기

```typescript
p: {
  fontSize: '1.25rem',       // 기본: 1.125rem → 변경: 1.25rem (20px)
  lineHeight: '1.8',         // 기본: 1.75 → 변경: 1.8 (더 넓은 행간)
}
```

### 제목 간격을 더 좁게 만들기

```typescript
h2: {
  marginTop: '1.5rem',       // 기본: 2rem → 변경: 1.5rem
  marginBottom: '0.75rem',   // 기본: 1rem → 변경: 0.75rem
}
```

### 전체적으로 자간을 넓히기

```typescript
p: {
  letterSpacing: '0.02em',   // 기본: 0.01em → 변경: 0.02em
}
```

### 단락 간격 늘리기

```typescript
p: {
  marginTop: '1.5rem',       // 기본: 1.25rem → 변경: 1.5rem
  marginBottom: '1.5rem',    // 기본: 1.25rem → 변경: 1.5rem
}
```

---

## 📏 단위 설명

### 폰트 크기 (fontSize)
- `1rem` = 16px (브라우저 기본)
- `1.125rem` = 18px
- `1.25rem` = 20px
- `1.5rem` = 24px
- `2rem` = 32px

**권장:** `rem` 단위 사용 (반응형 대응)

### 행간 (lineHeight)
- `1.0` = 폰트 크기의 100%
- `1.5` = 폰트 크기의 150% (일반적)
- `1.75` = 폰트 크기의 175% (편안한 읽기)
- `2.0` = 폰트 크기의 200%

**권장:** 본문은 `1.6` ~ `1.8`

### 자간 (letterSpacing)
- `-0.05em` = 매우 좁게
- `-0.02em` = 약간 좁게 (제목 권장)
- `0` = 기본
- `0.01em` = 약간 넓게
- `0.05em` = 매우 넓게

**권장:** 본문 `0` ~ `0.02em`, 제목 `-0.02em` ~ `0`

### 여백 (margin, padding)
- `0.5rem` = 8px
- `1rem` = 16px
- `1.5rem` = 24px
- `2rem` = 32px

---

## 🎨 색상 조정

### 텍스트 색상

```typescript
// 기본 텍스트
color: theme('colors.gray.300'),

// 제목
h1: {
  color: theme('colors.white'),
}

// 링크
a: {
  color: theme('colors.blue.400'),
  '&:hover': {
    color: theme('colors.blue.300'),
  },
}
```

### 사용 가능한 색상
- `white` - 흰색
- `gray.300` - 밝은 회색
- `gray.400` - 중간 회색
- `blue.400` - 파란색
- `pink.400` - 핑크색
- `green.400` - 초록색

---

## 💡 실전 예시

### 예시 1: 가독성 향상 (더 큰 글씨, 넓은 행간)

```typescript
typography: (theme: any) => ({
  DEFAULT: {
    css: {
      p: {
        fontSize: '1.25rem',      // 20px (기본보다 크게)
        lineHeight: '1.8',        // 더 넓은 행간
        letterSpacing: '0.015em', // 약간 넓은 자간
        marginBottom: '1.5rem',   // 단락 간격 늘림
      },
      h2: {
        fontSize: '2.25rem',      // 더 큰 제목
        marginTop: '2.5rem',      // 제목 위 여백 늘림
      },
    },
  },
}),
```

### 예시 2: 컴팩트한 스타일 (작은 글씨, 좁은 간격)

```typescript
typography: (theme: any) => ({
  DEFAULT: {
    css: {
      p: {
        fontSize: '1rem',         // 16px (작게)
        lineHeight: '1.6',        // 좁은 행간
        marginBottom: '1rem',     // 단락 간격 줄임
      },
      h2: {
        marginTop: '1.5rem',      // 제목 위 여백 줄임
        marginBottom: '0.75rem',  // 제목 아래 여백 줄임
      },
    },
  },
}),
```

### 예시 3: 블로그 스타일 (편안한 읽기)

```typescript
typography: (theme: any) => ({
  DEFAULT: {
    css: {
      p: {
        fontSize: '1.125rem',
        lineHeight: '1.75',
        letterSpacing: '0.01em',
        marginTop: '1.25rem',
        marginBottom: '1.25rem',
      },
      li: {
        lineHeight: '1.75',
      },
      h2: {
        marginTop: '2.5rem',
        marginBottom: '1rem',
      },
    },
  },
}),
```

---

## 🔄 변경 사항 적용

1. `tailwind.config.ts` 파일 수정
2. 개발 서버 재시작 (또는 자동 리로드)
   ```bash
   npm run dev
   ```
3. 브라우저에서 http://localhost:3000 확인

**참고:** Tailwind 설정 변경은 자동으로 감지되어 핫 리로드됩니다.

---

## 📱 반응형 조정

현재 설정은 모든 화면 크기에 동일하게 적용됩니다.
모바일에서 다르게 표시하려면 CSS 미디어 쿼리를 추가해야 합니다.

---

## ⚙️ 고급: 다크/라이트 모드 분리

현재는 다크 모드만 지원합니다 (`prose-invert`).
라이트 모드를 추가하려면 별도 CSS 변형이 필요합니다.

---

## 🎯 빠른 참조

| 요소 | 기본 설정 | 위치 |
|------|----------|------|
| 본문 폰트 크기 | `1.125rem` (18px) | `p.fontSize` |
| 본문 행간 | `1.75` (175%) | `p.lineHeight` |
| 본문 자간 | `0.01em` | `p.letterSpacing` |
| h1 크기 | `2.5rem` (40px) | `h1.fontSize` |
| h2 크기 | `2rem` (32px) | `h2.fontSize` |
| 단락 간격 | `1.25rem` (위/아래) | `p.marginTop/Bottom` |
| 리스트 항목 간격 | `0.5rem` | `li.marginTop/Bottom` |

---

## 💬 팁

1. **작은 변경부터 시작**: 한 번에 하나씩 조정
2. **실제 콘텐츠로 테스트**: 샘플 프로젝트로 확인
3. **일관성 유지**: 모든 제목, 본문의 비율을 일정하게
4. **가독성 우선**: 너무 작거나 좁은 간격은 피하기
5. **모바일 확인**: 다양한 화면 크기에서 테스트

---

## 🔗 관련 문서

- [Tailwind CSS Typography 공식 문서](https://tailwindcss.com/docs/typography-plugin)
- [CSS 단위 가이드](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

---

**파일 위치:** `tailwind.config.ts`
**수정 후:** 개발 서버 재시작 또는 자동 리로드
**테스트:** http://localhost:3000/projects/web-app-project
