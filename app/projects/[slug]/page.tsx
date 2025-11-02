import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProject, getProjectSlugs } from "@/lib/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  let project;
  try {
    project = getProject(slug);
  } catch (error) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center text-gray-400 hover:text-white transition mb-8"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to projects
      </Link>

      {/* Project Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        {project.category && (
          <p className="text-lg text-gray-500 mb-4">{project.category}</p>
        )}
        {project.description && (
          <p className="text-xl text-gray-400">{project.description}</p>
        )}
      </header>

      {/* MDX Content */}
      <article className="prose prose-invert prose-lg max-w-none">
        <MDXRemote source={project.content} />
      </article>

      {/* Privacy Policy Link */}
      {project.hasPrivacyPolicy && (
        <div className="mt-12 pt-8 border-t border-gray-800">
          <Link
            href={`/projects/${slug}/privacy`}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition"
          >
            개인정보처리방침 보기
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}
