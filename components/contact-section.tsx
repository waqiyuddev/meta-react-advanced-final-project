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
import { AlertModal } from "@/components/ui/alert-modal"

export default function ContactSection() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [type, setType] = useState("")
    const [message, setMessage] = useState("")
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        type: false,
        message: false,
    })
    const [alert, setAlert] = useState<{
        type: "success" | "error"
        message: string
    } | null>(null)
    const [loading, setLoading] = useState(false)

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setAlert(null)

        // Validate all fields
        const newErrors = {
            name: !name.trim(),
            email: !email.trim(),
            type: !type,
            message: !message.trim(),
        }

        setErrors(newErrors)

        // Check if any field has an error
        if (Object.values(newErrors).some((error) => error)) {
            setAlert({
                type: "error",
                message: "Please fill in all required fields!",
            })
            return
        }

        setLoading(true)

        // Simulate API call (50/50 success or error)
        setTimeout(() => {
            setLoading(false)

            if (Math.random() > 0.5) {
                setAlert({
                    type: "success",
                    message: `Thanks for your submission ${name}, we will get back to you shortly!`,
                })
                setName("")
                setEmail("")
                setType("")
                setMessage("")
                setErrors({
                    name: false,
                    email: false,
                    type: false,
                    message: false,
                })
            } else {
                setAlert({
                    type: "error",
                    message: "Something went wrong, please try again later!",
                })
            }
        }, 1500)
    }

    return (
        <section
            id="contact"
            className="bg-primary px-[24px] py-[80px]"
        >
            {/* ALERT MODAL */}
            {alert && (
                <AlertModal
                    type={alert.type}
                    message={alert.message}
                    onClose={() => setAlert(null)}
                />
            )}

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
                            Name <span className="text-red-300">*</span>
                        </label>
                        <Input
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                                setErrors({ ...errors, name: false })
                            }}
                            className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && (
                            <span className="text-red-300 text-[12px] font-semibold">
                                Name is required
                            </span>
                        )}
                    </div>

                    {/* EMAIL */}
                    <div className="flex flex-col gap-[6px]">
                        <label className="text-[14px] font-medium">
                            Email Address <span className="text-red-300">*</span>
                        </label>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                setErrors({ ...errors, email: false })
                            }}
                            className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                            <span className="text-red-300 text-[12px] font-semibold">
                                Email is required
                            </span>
                        )}
                    </div>

                    {/* TYPE */}
                    <div className="flex flex-col gap-[6px]">
                        <label className="text-[14px] font-medium">
                            Type of enquiry <span className="text-red-300">*</span>
                        </label>
                        <Select
                            value={type}
                            onValueChange={(value) => {
                                setType(value)
                                setErrors({ ...errors, type: false })
                            }}
                        >
                            <SelectTrigger
                                className={errors.type ? "border-red-500" : ""}
                            >
                                <SelectValue placeholder="Select type of enquiry" />
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
                        {errors.type && (
                            <span className="text-red-300 text-[12px] font-semibold">
                                Type of enquiry is required
                            </span>
                        )}
                    </div>

                    {/* MESSAGE */}
                    <div className="flex flex-col gap-[6px]">
                        <label className="text-[14px] font-medium">
                            Your message <span className="text-red-300">*</span>
                        </label>
                        <Textarea
                            rows={4}
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value)
                                setErrors({ ...errors, message: false })
                            }}
                            className={errors.message ? "border-red-500" : ""}
                        />
                        {errors.message && (
                            <span className="text-red-300 text-[12px] font-semibold">
                                Message is required
                            </span>
                        )}
                    </div>

                    {/* SUBMIT */}
                    <Button
                        type="submit"
                        variant="secondary"
                        disabled={loading}
                        className="mt-[8px] w-auto self-start"
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </Button>
                </form>
            </div>
        </section>
    )
}
