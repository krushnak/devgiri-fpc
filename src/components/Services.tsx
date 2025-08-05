import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import banner from "@/assets/banner.jpeg";
import banner2 from "@/assets/banner2.jpeg";
import {
  ShoppingCart,
  Truck,
  BookOpen,
  DollarSign,
  Users,
  Wheat,
  Factory,
  TrendingUp,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Input Supply",
      description:
        "Quality seeds, fertilizers, and farming equipment at wholesale prices.",
      color: "from-forest-green to-earth-brown",
    },
    {
      icon: Truck,
      title: "Logistics & Storage",
      description:
        "Efficient transportation and storage facilities for your produce.",
      color: "from-harvest-gold to-forest-green",
    },
    {
      icon: DollarSign,
      title: "Market Linkage",
      description:
        "Direct access to buyers and premium markets for better prices.",
      color: "from-earth-brown to-harvest-gold",
    },
    {
      icon: BookOpen,
      title: "Training & Support",
      description:
        "Regular workshops on modern farming techniques and best practices.",
      color: "from-sage-green to-forest-green",
    },
    {
      icon: Users,
      title: "Financial Services",
      description:
        "Easy access to credit, insurance, and financial planning support.",
      color: "from-forest-green to-harvest-gold",
    },
    {
      icon: Wheat,
      title: "Processing Units",
      description:
        "Value addition through our processing and packaging facilities.",
      color: "from-harvest-gold to-earth-brown",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive support for farmers at every stage of the agricultural
            value chain
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-6">
                <div
                  className={`w-16 h-16 mb-4 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Services */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Fresh Produce Section */}
          <div className="bg-white/60 rounded-3xl overflow-hidden backdrop-blur-sm">
            <div
              className="h-64 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${banner})`, height: "940px" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-8">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Connect directly with consumers and retailers. Our platform
                ensures your fresh produce reaches the market faster,
                maintaining quality and commanding premium prices.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-forest-green">
                      50+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Market Partners
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-harvest-gold">
                      15%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Price Premium
                    </div>
                  </div>
                </div>
                <Button variant="harvest" size="sm">
                  Explore Markets
                </Button>
              </div>
            </div>
          </div>

          {/* Cooperation Section */}
          <div className="bg-white/60 rounded-3xl overflow-hidden backdrop-blur-sm">
            <div
              className="h-64 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${banner2})`, height: "400px" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-8">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join a network of like-minded farmers. Share resources,
                knowledge, and opportunities to create a sustainable and
                profitable agricultural business together.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-earth-brown">
                      300+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Active Members
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-forest-green">
                      98%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Success Rate
                    </div>
                  </div>
                </div>
                <Button variant="earth" size="sm">
                  Join Network
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
