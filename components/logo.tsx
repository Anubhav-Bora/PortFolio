import { cn } from "@/lib/utils"

export const Logo = ({ className }: { className?: string }) => {
  return (
    <span
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full border border-foreground/20 bg-background font-serif text-sm font-semibold tracking-[-0.04em] text-foreground",
        className,
      )}
      aria-hidden="true"
    >
      AB
    </span>
  )
}
