import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Swingers",
  description: "Check out some app built using the components.",
}

interface SwingerLayoutProps {
  children: React.ReactNode
}

export default function SwingerLayout({ children }: SwingerLayoutProps) {
  return (
    <>
      <section>
        <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
          {children}
        </div>
      </section>
    </>
  )
}
