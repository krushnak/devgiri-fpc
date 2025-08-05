import { Card, CardContent } from "@/components/ui/card";
import { Users, Leaf, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const benefits = [
    {
      icon: Users,
      title: "Collective Strength",
      description:
        "Unite with fellow farmers to negotiate better prices and access larger markets together.",
    },
    {
      icon: TrendingUp,
      title: "Increased Income",
      description:
        "Eliminate middlemen and get fair prices for your produce through direct market access.",
    },
    {
      icon: Leaf,
      title: "Sustainable Farming",
      description:
        "Share knowledge and resources to implement eco-friendly farming practices.",
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description:
        "Collective insurance and shared resources help protect against crop failures and market volatility.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-background to-sage-green/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What is a Farmer Producer Company?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Farmer Producer Company (FPC) is a collective of farmers working
            together to achieve better income, reduced costs, and sustainable
            agricultural practices through cooperation and shared resources.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-forest-green to-harvest-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          id="mission"
          className="bg-white/60 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To create a sustainable and profitable agricultural ecosystem
                where farmers can thrive together, leveraging collective
                strength to overcome individual challenges and build a
                prosperous future.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-foreground">
                  <div className="w-2 h-2 bg-forest-green rounded-full mr-3"></div>
                  Fair and transparent pricing for all members
                </li>
                <li className="flex items-center text-foreground">
                  <div className="w-2 h-2 bg-forest-green rounded-full mr-3"></div>
                  Shared access to modern farming technology
                </li>
                <li className="flex items-center text-foreground">
                  <div className="w-2 h-2 bg-forest-green rounded-full mr-3"></div>
                  Collective bargaining power in the market
                </li>
                <li className="flex items-center text-foreground">
                  <div className="w-2 h-2 bg-forest-green rounded-full mr-3"></div>
                  Sustainable agricultural practices
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-forest-green mb-2">
                  500+
                </div>
                <div className="text-muted-foreground">Farmer Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-harvest-gold mb-2">
                  25%
                </div>
                <div className="text-muted-foreground">Income Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-earth-brown mb-2">
                  1000+
                </div>
                <div className="text-muted-foreground">Acres Covered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-forest-green mb-2">
                  95%
                </div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
