
import { cn } from "@/lib/utils";

interface BackgroundGradientProps {
  className?: string;
}

const BackgroundGradient: React.FC<BackgroundGradientProps> = ({ className }) => {
  return (
    <div className={cn("fixed inset-0 -z-10 opacity-40 pointer-events-none", className)}>
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
    </div>
  );
};

export default BackgroundGradient;
