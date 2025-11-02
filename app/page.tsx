import { getProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          Creative Portfolio
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          개인 작업물을 모아놓은 포트폴리오입니다.
        </p>
      </section>

      {/* Projects Grid */}
      <section id="works" className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          이곳은 제가 작업한 프로젝트들을 소개하는 공간입니다.
          각 프로젝트를 클릭하면 자세한 내용을 확인하실 수 있습니다.
        </p>
      </section>
    </div>
  );
}
