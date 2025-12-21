import { Code2, Users, Trophy, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Code2,
      title: "Build Something Amazing",
      description: "Work on projects that matter. From AI to web apps, the possibilities are endless.",
    },
    {
      icon: Users,
      title: "Connect & Collaborate",
      description: "Meet fellow hackers, form teams, and build lasting connections in the tech community.",
    },
    {
      icon: Trophy,
      title: "Win Prizes",
      description: "Compete for amazing prizes and recognition. Everyone's a winner when you learn and grow.",
    },
    {
      icon: Lightbulb,
      title: "Learn & Grow",
      description: "Attend workshops, hear from industry leaders, and level up your skills.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 sm:mb-6 px-4">
              Why Hack@Davidson?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Join hundreds of students for an unforgettable weekend of innovation, learning, and fun. 
              No experience necessary – just bring your passion and creativity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl bg-card"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-card-foreground">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
