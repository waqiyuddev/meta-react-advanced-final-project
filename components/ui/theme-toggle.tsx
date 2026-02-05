"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const THEMES = ["light", "dim", "dark"] as const

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    function cycleTheme() {
        const index = THEMES.indexOf(theme as typeof THEMES[number])
        const next = THEMES[(index + 1) % THEMES.length]
        setTheme(next)
    }

    return (
        <Button variant="ghost" onClick={cycleTheme}>
            {theme === "light" && "🌞"}
            {theme === "dim" && "🌗"}
            {theme === "dark" && "🌙"}
        </Button>
    )
}
