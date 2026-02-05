"use client"

import { useEffect } from "react"

type AlertModalProps = {
    type: "success" | "error"
    message: string
    onClose: () => void
}

export function AlertModal({ type, message, onClose }: AlertModalProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose()
        }, 5000) // Auto-close after 5 seconds

        return () => clearTimeout(timer)
    }, [onClose])

    const bgColor = type === "success" ? "bg-green-500" : "bg-red-500"

    return (
        <div className="fixed top-[80px] left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-top-5">
            <div
                className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg max-w-md flex items-start gap-3`}
            >
                <div className="flex-1">
                    <p className="font-semibold">
                        {type === "success" ? "Success!" : "Error!"}
                    </p>
                    <p className="text-sm mt-1">{message}</p>
                </div>
                <button
                    onClick={onClose}
                    className="text-white hover:text-gray-200 font-bold text-xl leading-none"
                >
                    ×
                </button>
            </div>
        </div>
    )
}
