import Image from "next/image"

export default function LandingSection() {
    return (
        <section
            id="landing"
            className="
        flex
        items-center
        justify-center
        min-h-[100vh]
        px-[24px]
      "
        >
            <div
                className="
          max-w-[1000px]
          w-full
          flex
          flex-col
          items-center
          text-center
          gap-[24px]
        "
            >
                {/* Avatar */}
                <Image
                    src="https://i.pravatar.cc/150?img=2"
                    alt="Avatar"
                    width={120}
                    height={120}
                    className="rounded-full"
                />

                {/* Greeting */}
                <p className="text-[18px] text-muted-foreground">
                    Hi, this is for my final project certificate
                </p>

                {/* Name / Title */}
                <h1 className="text-[32px] font-bold">
                    META REACT ADVANCED FINAL PROJECT
                </h1>

                {/* Bio */}
                <p className="text-[16px] text-muted-foreground max-w-[600px]">
                    UI/UX Designer with a development background, building
                    scalable and user-focused web applications using React
                    and Next.js.
                </p>
            </div>
        </section>
    )
}
