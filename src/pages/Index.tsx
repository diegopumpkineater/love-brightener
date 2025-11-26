import { MoodCard } from "@/components/MoodCard";
import { FloatingHearts } from "@/components/FloatingHearts";
import { Heart, Sparkles, Sun, Music, CloudRain } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const moods = [
    {
      icon: Heart,
      title: "I'm Feeling Loved",
      description: "Wrapped in warmth and affection",
      color: "bg-loved/10 border-loved hover:bg-loved/20",
      path: "loved",
    },
    {
      icon: Sparkles,
      title: "I Need a Pick-Me-Up",
      description: "A little boost of joy",
      color: "bg-happy/10 border-happy hover:bg-happy/20",
      path: "pickup",
    },
    {
      icon: Music,
      title: "I'm Feeling Romantic",
      description: "Love is in the air",
      color: "bg-romantic/10 border-romantic hover:bg-romantic/20",
      path: "romantic",
    },
    {
      icon: Sun,
      title: "Feeling Happy!",
      description: "Let's celebrate this moment",
      color: "bg-uplifting/10 border-uplifting hover:bg-uplifting/20",
      path: "happy",
    },
    {
      icon: CloudRain,
      title: "Just a Little Down",
      description: "It's okay, I'm here for you",
      color: "bg-calm/10 border-calm hover:bg-calm/20",
      path: "down",
    },
  ];

  return (
    <div className="min-h-screen gradient-romantic relative overflow-hidden">
      <FloatingHearts />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground animate-fade-in">
            How Are You Feeling Today? 💝
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Let me brighten your day with something special
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {moods.map((mood, index) => (
            <div
              key={mood.path}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <MoodCard
                icon={mood.icon}
                title={mood.title}
                description={mood.description}
                color={mood.color}
                onClick={() => navigate(`/mood/${mood.path}`)}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-lg text-muted-foreground italic">
            "In a world where you can be anything, be yourself - because you're perfect to me." ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
