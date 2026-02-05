"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/ui/theme-toggle"

const socials = [
    {
        name: "GitHub",
        href: "https://github.com",
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com",
    },
]

export default function Header() {
    function handleScroll(
        e: React.MouseEvent<HTMLAnchorElement>,
        id: string
    ) {
        e.preventDefault()
        const section = document.getElementById(id)
        section?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <header
            className="
        fixed
        top-0
        left-0
        right-0
        z-50
        border-b
        bg-background
      "
        >
            <div
                className="
          mx-auto
          max-w-[1000px]
          flex
          items-center
          justify-between
          px-[24px]
          py-[12px]
        "
            >
                {/* LEFT — SOCIALS */}
                <div className="flex gap-[16px]">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[14px] font-medium hover:underline"
                        >
                            {social.name}
                        </a>
                    ))}
                </div>

                {/* RIGHT — INTERNAL LINKS */}
                <nav className="flex gap-[12px]">
                    <a
                        href="#projects"
                        onClick={(e) => handleScroll(e, "projects")}
                    >
                        <Button variant="ghost">Projects</Button>
                    </a>

                    <a
                        href="#contact"
                        onClick={(e) => handleScroll(e, "contact")}
                    >
                        <Button variant="ghost">Contact</Button>
                    </a>

                    <ThemeToggle />
                </nav>
            </div>
        </header>
    )
}
