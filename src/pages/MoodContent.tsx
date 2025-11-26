import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Heart, Music, Video } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const moodContent = {
  loved: {
    title: "You Are So Loved 💕",
    message: "Every moment with you feels like a dream come true. You make my world brighter just by being in it.",
    color: "bg-gradient-to-br from-loved/20 to-romantic/20",
    videoUrl: "https://www.youtube.com/embed/7pOr3dBFAeY",
    musicUrl: "https://www.youtube.com/embed/lDK9QqIzhwk",
  },
  pickup: {
    title: "Let's Brighten Your Day! ☀️",
    message: "Remember how amazing you are! You're stronger than you think, and I'm always here for you.",
    color: "bg-gradient-to-br from-happy/20 to-accent/20",
    videoUrl: "https://www.youtube.com/embed/hh1WeQxfCX0",
    musicUrl: "https://www.youtube.com/embed/NmtkXQEOMf0",
  },
  romantic: {
    title: "Romance in the Air 🌹",
    message: "You and me, together forever. Every love song reminds me of you.",
    color: "bg-gradient-to-br from-romantic/20 to-primary/20",
    videoUrl: "https://www.youtube.com/embed/Y0pdQU87dc8",
    musicUrl: "https://www.youtube.com/embed/x2k0aqy3s9M",
  },
  happy: {
    title: "Keep Smiling! 😊",
    message: "Your smile is my favorite thing in the world. Let's celebrate this moment of joy!",
    color: "bg-gradient-to-br from-happy/20 to-uplifting/20",
    videoUrl: "https://www.youtube.com/embed/AQhER9_XvQs",
    musicUrl: "https://www.youtube.com/embed/j_sG_Juncn8",
  },
  down: {
    title: "You're Not Alone 🤗",
    message: "It's okay to feel down sometimes. I'm here with you, and together we'll get through anything.",
    color: "bg-gradient-to-br from-calm/20 to-secondary/20",
    videoUrl: "https://www.youtube.com/embed/9P16xvwMQ5A",
    musicUrl: "https://www.youtube.com/embed/QI8VrXkffcg",
  },
};

const MoodContent = () => {
  const navigate = useNavigate();
  const { mood } = useParams<{ mood: string }>();
  
  const content = moodContent[mood as keyof typeof moodContent];

  if (!content) {
    navigate("/");
    return null;
  }

  return (
    <div className={`min-h-screen ${content.color} py-8 px-4`}>
      <div className="max-w-4xl mx-auto space-y-6">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Moods
        </Button>

        <Card className="p-8 backdrop-blur-sm bg-background/80">
          <h1 className="text-4xl font-bold text-center mb-4">{content.title}</h1>
          <p className="text-center text-lg text-muted-foreground mb-8 italic">
            {content.message}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <Video className="text-primary" />
                <h3 className="font-semibold">Video for You</h3>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={content.videoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <Music className="text-primary" />
                <h3 className="font-semibold">Music for Your Mood</h3>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={content.musicUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-primary animate-pulse-soft">
              <Heart className="fill-primary" />
              <span className="font-semibold">Made with love, just for you</span>
              <Heart className="fill-primary" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MoodContent;
