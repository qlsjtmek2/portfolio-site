# 이미지 추가 가이드

## 📸 프로젝트 썸네일 이미지 추가하기

### 1. 이미지 파일 준비

프로젝트 썸네일로 사용할 이미지를 준비합니다.
- **권장 크기**: 1200x630px (16:9 비율)
- **지원 형식**: JPG, PNG, WebP
- **최적화**: 파일 크기 500KB 이하 권장

### 2. 이미지 파일 배치

`public/images/projects/` 디렉토리에 이미지를 저장합니다:

```bash
# 디렉토리가 없다면 생성
mkdir -p public/images/projects

# 이미지 파일 복사 (예시)
cp ~/Downloads/my-project-image.jpg public/images/projects/my-project.jpg
```

**경로 예시:**
```
public/
  └── images/
      └── projects/
          ├── web-app.jpg
          ├── mobile-app.jpg
          └── design.jpg
```

### 3. MDX 파일에 썸네일 경로 추가

프로젝트의 `index.mdx` 파일 frontmatter에 `thumbnail` 속성을 추가합니다:

```mdx
---
title: "프로젝트 제목"
description: "프로젝트 설명"
category: "카테고리"
thumbnail: "/images/projects/my-project.jpg"
---

# 프로젝트 내용...
```

**중요:**
- 경로는 `/images/projects/`로 시작 (public 폴더는 생략)
- `public/` 폴더에 실제 파일이 있어야 함
- 파일명은 정확히 일치해야 함 (대소문자 구분)

### 4. 이미지가 없는 경우

`thumbnail` 속성을 아예 작성하지 않거나 비워두면, 프로젝트 제목의 첫 글자가 대체 이미지로 표시됩니다:

```mdx
---
title: "프로젝트 제목"
description: "프로젝트 설명"
category: "카테고리"
# thumbnail 속성 없음 - OK!
---
```

이 경우 카드에는 프로젝트 제목의 첫 글자 ("프")가 큰 텍스트로 표시됩니다.

---

## 🎨 프로젝트 내부 이미지 추가하기

프로젝트 상세 페이지 내에서 이미지를 사용하려면:

### 1. 이미지 저장

```bash
# 프로젝트별 이미지 디렉토리 생성 (권장)
mkdir -p public/images/projects/my-project

# 이미지 파일 저장
cp screenshot1.png public/images/projects/my-project/screenshot1.png
```

### 2. MDX에서 이미지 사용

```mdx
# 프로젝트 제목

프로젝트 설명...

![스크린샷 설명](/images/projects/my-project/screenshot1.png)

또는 HTML 태그로:

<img src="/images/projects/my-project/screenshot1.png" alt="스크린샷 설명" />
```

---

## 🔧 실전 예시

### 예시 1: 썸네일이 있는 프로젝트

**파일 구조:**
```
public/images/projects/awesome-app.jpg
content/projects/awesome-app/index.mdx
```

**index.mdx:**
```mdx
---
title: "Awesome App"
description: "멋진 앱입니다"
category: "Mobile"
thumbnail: "/images/projects/awesome-app.jpg"
---

# Awesome App

멋진 앱의 상세 설명...

![앱 스크린샷](/images/projects/awesome-app/screenshot.png)
```

### 예시 2: 썸네일이 없는 프로젝트

**파일 구조:**
```
content/projects/simple-project/index.mdx
```

**index.mdx:**
```mdx
---
title: "Simple Project"
description: "간단한 프로젝트"
category: "Web"
---

# Simple Project

이미지 없이도 잘 작동합니다!
```

→ 카드에는 "S" 글자가 표시됩니다.

---

## 🚨 주의사항

1. **경로 확인**: `/images/`로 시작 (`/public/images/` 아님)
2. **파일 존재 확인**: 실제 파일이 `public/` 폴더에 있어야 함
3. **파일명 정확히**: 대소문자, 확장자 모두 정확히 일치
4. **이미지 최적화**: 큰 이미지는 압축 권장 (TinyPNG, ImageOptim 등)
5. **Git 커밋**: 이미지 파일도 Git에 커밋해야 배포 시 포함됨

---

## 📦 이미지 최적화 팁

```bash
# ImageMagick 사용 (설치: sudo apt install imagemagick)
convert original.jpg -resize 1200x630^ -gravity center -extent 1200x630 -quality 85 thumbnail.jpg

# 또는 온라인 도구 사용
# - TinyPNG: https://tinypng.com/
# - Squoosh: https://squoosh.app/
```

---

## ✅ 체크리스트

프로젝트에 이미지를 추가할 때:

- [ ] 이미지를 `public/images/projects/` 에 저장
- [ ] MDX frontmatter에 `thumbnail: "/images/projects/파일명.jpg"` 추가
- [ ] 로컬에서 `npm run dev` 실행하여 확인
- [ ] 이미지가 올바르게 표시되는지 확인
- [ ] Git에 이미지 파일 커밋 (`git add public/images/`)
- [ ] 원격 저장소에 푸시

---

## 🎯 현재 상태

현재 포트폴리오는 **이미지 없이** 작동하도록 설정되어 있습니다.
프로젝트 카드에는 제목의 첫 글자가 표시됩니다.

이미지를 추가하고 싶다면 위의 가이드를 따라주세요!
