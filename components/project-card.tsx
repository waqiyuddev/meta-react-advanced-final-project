import { Card, CardContent } from "@/components/ui/card"

type ProjectCardProps = {
    title: string
    description: string
}

export default function ProjectCard({
    title,
    description,
}: ProjectCardProps) {
    return (
        <Card
            className="
        transition-colors
        duration-200
        hover:bg-primary
        hover:text-primary-foreground
        cursor-pointer
      "
        >
            <CardContent className="p-[20px] flex flex-col gap-[12px]">
                <h3 className="text-[18px] font-semibold">
                    {title}
                </h3>

                <p
                    className="
                    text-[14px]
                    text-muted-foreground
                    group-hover:text-primary-foreground
                    "
                >
                    {description}
                </p>
            </CardContent>
        </Card>
    )
}
