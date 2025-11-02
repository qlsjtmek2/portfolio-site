import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Project {
  slug: string;
  title: string;
  description?: string;
  category?: string;
  thumbnail?: string;
  content: string;
  hasPrivacyPolicy: boolean;
}

const projectsDirectory = path.join(process.cwd(), "content/projects");

/**
 * 모든 프로젝트 목록을 가져옵니다.
 */
export async function getProjects(): Promise<Project[]> {
  // content/projects 디렉토리가 없으면 빈 배열 반환
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const slugs = fs.readdirSync(projectsDirectory);

  const projects = slugs
    .map((slug) => {
      try {
        return getProject(slug);
      } catch (error) {
        console.error(`Error loading project ${slug}:`, error);
        return null;
      }
    })
    .filter((project): project is Project => project !== null);

  return projects;
}

/**
 * 특정 프로젝트를 가져옵니다.
 */
export function getProject(slug: string): Project {
  const projectDir = path.join(projectsDirectory, slug);
  const indexPath = path.join(projectDir, "index.mdx");

  if (!fs.existsSync(indexPath)) {
    throw new Error(`Project ${slug} not found`);
  }

  const fileContents = fs.readFileSync(indexPath, "utf8");
  const { data, content } = matter(fileContents);

  // 개인정보처리방침 파일이 있는지 확인
  const privacyPath = path.join(projectDir, "privacy.mdx");
  const hasPrivacyPolicy = fs.existsSync(privacyPath);

  return {
    slug,
    title: data.title || slug,
    description: data.description,
    category: data.category,
    thumbnail: data.thumbnail,
    content,
    hasPrivacyPolicy,
  };
}

/**
 * 프로젝트의 개인정보처리방침을 가져옵니다.
 */
export function getPrivacyPolicy(slug: string): { content: string } {
  const privacyPath = path.join(projectsDirectory, slug, "privacy.mdx");

  if (!fs.existsSync(privacyPath)) {
    throw new Error(`Privacy policy for ${slug} not found`);
  }

  const fileContents = fs.readFileSync(privacyPath, "utf8");
  const { content } = matter(fileContents);

  return { content };
}

/**
 * 모든 프로젝트 slug 목록을 가져옵니다 (정적 생성용).
 */
export function getProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  return fs.readdirSync(projectsDirectory);
}
