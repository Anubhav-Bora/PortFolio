import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("grid gap-6 lg:grid-cols-[0.55fr_1.45fr] lg:gap-12", className)}>
      <p className="pt-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
      <div>
        <h2 className="max-w-3xl font-serif text-4xl leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {description && <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p>}
      </div>
    </div>
  )
}
