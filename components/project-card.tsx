import Link from "next/link"
import Image from "next/image"
import { Project } from "@/lib/projects"

export default function ProjectCard(project: Project) {
    return (
        <Link href={`/projects/${project.slug}`}>
            <div
                className="
          group
          border
          rounded-[12px]
          overflow-hidden
          cursor-pointer
          transition-colors
          hover:bg-primary
          hover:text-primary-foreground
        "
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-[180px] object-cover"
                />

                <div className="p-[20px] flex flex-col gap-[12px]">
                    <h3 className="text-[18px] font-semibold">
                        {project.title}
                    </h3>

                    <p className="text-[14px] text-muted-foreground group-hover:text-primary-foreground">
                        {project.shortDescription}
                    </p>

                    <span className="text-[14px] font-medium">
                        See more →
                    </span>
                </div>
            </div>
        </Link>
    )
}
