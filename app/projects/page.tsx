import { projects } from "@/lib/projects"
import ProjectCard from "@/components/project-card"

export default function ProjectsPage() {
    return (
        <div className="px-[24px] py-[80px]">
            <div className="max-w-[1000px] mx-auto">
                <h1 className="text-[28px] font-bold mb-[32px]">
                    Projects
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} {...project} />
                    ))}
                </div>
            </div>
        </div>
    )
}
