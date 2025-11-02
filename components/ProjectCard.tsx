import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="overflow-hidden rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all hover:border-gray-400 dark:hover:border-gray-600 hover:scale-[1.02]">
        {/* Project Image */}
        <div className="relative aspect-video bg-gray-200 dark:bg-gray-700">
          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 dark:text-gray-600">
              <span className="text-4xl">{project.title[0]}</span>
            </div>
          )}
        </div>

        {/* Project Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition leading-snug tracking-tight">
            {project.title}
          </h3>
          {project.category && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-normal tracking-normal">{project.category}</p>
          )}
          {project.description && (
            <p className="text-gray-700 dark:text-gray-300 line-clamp-2 leading-relaxed tracking-tight">{project.description}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
