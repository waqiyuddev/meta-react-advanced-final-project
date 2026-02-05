"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function ContactSection() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [type, setType] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(false)

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setError("")
        setSuccess("")

        if (!name.trim()) {
            setError("Name is required")
            return
        }

        setLoading(true)

        // Simulate API call (50/50 success or error)
        setTimeout(() => {
            setLoading(false)

            if (Math.random() > 0.5) {
                setSuccess(
                    `Thanks for your submission ${name}, we will get back to you shortly!`
                )
                setName("")
                setEmail("")
                setType("")
                setMessage("")
            } else {
                setError("Something went wrong, please try again later!")
            }
        }, 1500)
    }

    return (
        <section
            id="contact"
            className="bg-primary px-[24px] py-[80px]"
        >
            <div className="max-w-[600px] mx-auto text-primary-foreground">
                <h2 className="text-[24px] font-bold mb-[24px]">
                    Contact me
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-[16px]"
                >
                    {/* NAME */}
                    <div className="flex flex-col gap-[6px]">
                        <label className="text-[14px] font-medium">
                            Name
                        </label>
                        <Input
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                                setError("")
                            }}
                            className={error ? "border-red-500" : ""}
                        />
                        {error && (
                            <span className="text-red-500 text-[12px] font-semibold">
                                Required
                            </span>
                        )}
                    </div>

                    {/* EMAIL */}
                    <div className="flex flex-col gap-[6px]">
                        <label className="text-[14px] font-medium">
                            Email Address
                        </label>
                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* TYPE */}
                    <div className="flex flex-col gap-[6px]">
                        <label className="text-[14px] font-medium">
                            Type of enquiry
                        </label>
                        <Select value={type} onValueChange={setType}>
                            <SelectTrigger>
                                <SelectValue placeholder="Freelance project proposal" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="freelance">
                                    Freelance project proposal
                                </SelectItem>
                                <SelectItem value="job">
                                    Job opportunity
                                </SelectItem>
                                <SelectItem value="other">
                                    Other
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* MESSAGE */}
                    <div className="flex flex-col gap-[6px]">
                        <label className="text-[14px] font-medium">
                            Your message
                        </label>
                        <Textarea
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>

                    {/* SUBMIT */}
                    <Button
                        type="submit"
                        disabled={loading}
                        className="mt-[8px]"
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </Button>

                    {/* ERROR ALERT */}
                    {error && !loading && (
                        <div className="bg-orange-400 text-black p-[16px] rounded-[8px]">
                            <strong>Oops!</strong>
                            <p className="text-[14px]">
                                {error}
                            </p>
                        </div>
                    )}

                    {/* SUCCESS ALERT */}
                    {success && (
                        <div className="bg-green-400 text-black p-[16px] rounded-[8px]">
                            <strong>All good!</strong>
                            <p className="text-[14px]">
                                {success}
                            </p>
                        </div>
                    )}
                </form>
            </div>
        </section>
    )
}
