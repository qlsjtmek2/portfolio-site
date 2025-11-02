import { getProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white leading-tight tracking-tight">
          Creative Portfolio
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed tracking-tight">
          개인 작업물을 모아놓은 포트폴리오입니다.
        </p>
      </section>

      {/* Projects Grid */}
      <section id="works" className="mb-20">
        <h2 className="text-3xl font-bold mb-8 leading-snug tracking-tight">Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center leading-snug tracking-tight">About</h2>

        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-800">
          <h3 className="text-2xl font-bold mb-2 leading-snug tracking-tight">Huigon Shin</h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-normal tracking-normal">Full-stack Developer</p>

          <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed tracking-tight mb-8">
            이곳은 제가 작업한 프로젝트들을 소개하는 공간입니다.
            각 프로젝트를 클릭하면 자세한 내용을 확인하실 수 있습니다.
          </p>

          <div className="flex gap-4 justify-center">
            <a
              href="mailto:qlsjtmek2@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition text-gray-800 dark:text-gray-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
            <a
              href="https://github.com/qlsjtmek2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition text-gray-800 dark:text-gray-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
