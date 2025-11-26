import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MoodCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  onClick: () => void;
}

export const MoodCard = ({ icon: Icon, title, description, color, onClick }: MoodCardProps) => {
  return (
    <Card
      onClick={onClick}
      className={cn(
        "p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl",
        "border-2 backdrop-blur-sm",
        color
      )}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 rounded-full bg-background/50">
          <Icon className="w-8 h-8" />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-sm opacity-80">{description}</p>
        </div>
      </div>
    </Card>
  );
};
