import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // Typography 플러그인 커스터마이즈
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            // 기본 텍스트 색상
            color: theme('colors.gray.300'),

            // 제목 스타일
            h1: {
              color: theme('colors.white'),
              fontWeight: '700',
              fontSize: '2.5rem',
              marginTop: '2rem',
              marginBottom: '1.5rem',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
            },
            h2: {
              color: theme('colors.white'),
              fontWeight: '600',
              fontSize: '2rem',
              marginTop: '2rem',
              marginBottom: '1rem',
              lineHeight: '1.3',
              letterSpacing: '-0.01em',
            },
            h3: {
              color: theme('colors.white'),
              fontWeight: '600',
              fontSize: '1.5rem',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
              lineHeight: '1.4',
            },

            // 본문 텍스트
            p: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              fontSize: '1.125rem',
              lineHeight: '1.75',
              letterSpacing: '0.01em',
            },

            // 링크
            a: {
              color: theme('colors.blue.400'),
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                color: theme('colors.blue.300'),
                textDecoration: 'underline',
              },
            },

            // 리스트
            'ul, ol': {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              paddingLeft: '1.5rem',
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
              fontSize: '1.125rem',
              lineHeight: '1.75',
            },

            // 코드 블록
            code: {
              color: theme('colors.pink.400'),
              backgroundColor: theme('colors.gray.800'),
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },

            // 인용문
            blockquote: {
              color: theme('colors.gray.400'),
              borderLeftColor: theme('colors.gray.700'),
              borderLeftWidth: '4px',
              paddingLeft: '1.5rem',
              fontStyle: 'italic',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },

            // 구분선
            hr: {
              borderColor: theme('colors.gray.800'),
              marginTop: '3rem',
              marginBottom: '3rem',
            },

            // 이미지
            img: {
              marginTop: '2rem',
              marginBottom: '2rem',
              borderRadius: '0.5rem',
            },

            // 테이블
            table: {
              fontSize: '1rem',
            },
            thead: {
              borderBottomColor: theme('colors.gray.700'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.gray.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
