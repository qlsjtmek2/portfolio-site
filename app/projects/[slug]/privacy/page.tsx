import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPrivacyPolicy, getProject, getProjectSlugs } from "@/lib/projects";

interface PrivacyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { slug } = await params;

  let project;
  let privacyPolicy;

  try {
    project = getProject(slug);
    privacyPolicy = getPrivacyPolicy(slug);
  } catch (error) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Back Button */}
      <Link
        href={`/projects/${slug}`}
        className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition mb-8"
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
        Back to project
      </Link>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          개인정보처리방침
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-500">{project.title}</p>
      </header>

      {/* MDX Content */}
      <article className="prose dark:prose-invert prose-lg max-w-none">
        <MDXRemote source={privacyPolicy.content} />
      </article>
    </div>
  );
}
