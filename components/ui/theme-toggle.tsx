"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"

const THEMES = [
    { value: "light", label: "Light", icon: "🌞" },
    { value: "dim", label: "Dim", icon: "🌗" },
    { value: "dark", label: "Dark", icon: "🌙" },
] as const

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const currentTheme = THEMES.find((t) => t.value === theme) || THEMES[0]

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                    {currentTheme.icon} {currentTheme.label}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {THEMES.map((themeOption) => (
                    <DropdownMenuItem
                        key={themeOption.value}
                        onClick={() => setTheme(themeOption.value)}
                    >
                        {themeOption.icon} {themeOption.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
