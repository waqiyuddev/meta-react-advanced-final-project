import ProjectCard from "@/components/project-card"

const projects = [
    {
        title: "e-Procurement System",
        description:
            "A web-based procurement platform focusing on usability, clarity, and efficient approval workflows.",
    },
    {
        title: "Smart Parking App",
        description:
            "Mobile-first parking solution with real-time slot availability and simple user flows.",
    },
    {
        title: "Bug Tracking Dashboard",
        description:
            "Internal tool for managing software bugs with clear prioritization and status tracking.",
    },
]

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className="px-[24px] py-[80px]"
        >
            <div className="max-w-[1000px] mx-auto">
                <h2 className="text-[24px] font-bold mb-[32px]">
                    Featured Projects
                </h2>

                <div
                    className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-[24px]
          "
                >
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
