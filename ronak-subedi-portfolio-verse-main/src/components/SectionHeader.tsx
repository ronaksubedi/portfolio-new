
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader = ({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "mb-10",
        centered && "text-center",
        className
      )}
    >
      <h2 className={cn("section-title", centered && "mx-auto after:left-1/2 after:-translate-x-1/2")}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mt-4 mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
