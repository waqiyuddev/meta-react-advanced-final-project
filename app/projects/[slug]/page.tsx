import { projects } from "@/lib/projects"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type Props = {
    params: Promise<{
        slug: string
    }>
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params
    const project = projects.find(
        (p) => p.slug === slug
    )

    if (!project) return notFound()

    return (
        <div className="px-[24px] py-[80px]">
            <div className="max-w-[800px] mx-auto flex flex-col gap-[24px]">
                {/* Back Button */}
                <Button asChild variant="secondary" className="w-auto self-start">
                    <Link href="/">← Home</Link>
                </Button>

                <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="rounded-[12px]"
                />

                <h1 className="text-[28px] font-bold">
                    {project.title}
                </h1>

                <p className="text-[16px] text-muted-foreground">
                    {project.longDescription}
                </p>

                <div className="border rounded-[12px] p-[20px]">
                    <p className="text-[14px]">
                        <strong>Role:</strong> {project.role}
                    </p>

                    <p className="text-[14px] mt-[8px]">
                        <strong>Tools:</strong>{" "}
                        {project.tools.join(", ")}
                    </p>
                </div>
            </div>
        </div>
    )
}
