import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, icon, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
