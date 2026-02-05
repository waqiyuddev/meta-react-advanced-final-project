export type Project = {
    slug: string
    title: string
    shortDescription: string
    longDescription: string
    image: string
    role: string
    tools: string[]
}

export const projects: Project[] = [
    {
        slug: "bug-tracker",
        title: "Bug Tracking Dashboard",
        shortDescription:
            "Internal dashboard for managing and prioritizing software bugs.",
        longDescription:
            "This project focuses on designing an internal bug tracking dashboard that improves clarity, prioritization, and collaboration between developers and QA teams. Emphasis was placed on usability, information hierarchy, and reducing cognitive load.",
        image: "https://picsum.photos/seed/bugtracker/600/400",
        role: "UI/UX Designer & Frontend Developer",
        tools: ["React", "Next.js", "Tailwind", "Figma"],
    },
    {
        slug: "e-procurement",
        title: "e-Procurement System",
        shortDescription:
            "Enterprise procurement platform with clear approval workflows.",
        longDescription:
            "A large-scale procurement system designed to streamline purchasing workflows, approvals, and vendor management. The project focused heavily on form usability, accessibility, and complex state handling.",
        image: "https://picsum.photos/seed/eprocurement/600/400",
        role: "UI/UX Designer",
        tools: ["React", "Design System", "User Research"],
    },
]
