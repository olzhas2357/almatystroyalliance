"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function InstagramButton() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)

        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    if (!isVisible) {
        return null
    }

    return (
        <a
            href="https://www.instagram.com/almatyalliancestroy"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-20 z-50"
        >
            <Button className="rounded-full w-14 h-14 bg-pink-500 hover:bg-pink-600 text-white p-0">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.75 2C4.126 2 2 4.126 2 7.75v8.5C2 19.874 4.126 22 7.75 22h8.5C19.874 22 22 19.874 22 16.25v-8.5C22 4.126 19.874 2 16.25 2h-8.5zm0 2h8.5C18.1 4 20 5.9 20 7.75v8.5C20 18.1 18.1 20 16.25 20h-8.5C5.9 20 4 18.1 4 16.25v-8.5C4 5.9 5.9 4 7.75 4zm10 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 100-2.5zM12 6.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
                </svg>
                <span className="sr-only">Перейти в Instagram</span>
            </Button>
        </a>
    )
}
