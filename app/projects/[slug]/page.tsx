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

      {/* Project Header - Hero Section */}
      <header className="mb-12 -mx-4 bg-gradient-to-b from-gray-900 to-gray-900/50 border-y border-gray-800">
        <div className="container mx-auto px-4 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
            {project.title}
          </h1>
        </div>
      </header>

      {/* MDX Content */}
      <article className="prose prose-invert prose-lg max-w-none bg-gray-900/50 rounded-lg p-8 border border-gray-800/50">
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
