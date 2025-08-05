import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Devgiri Krushi Farm, Palodi Road Manwath.",
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 9850652011",
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "devgirikrushi.fpc@gmail.com",
    },
    {
      icon: Clock,
      title: "Office Hours",
      info: "Mon - Sat: 9:00 AM - 7:00 PM",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-sage-green/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to join our farming community? Contact us to learn more about
            membership benefits and how we can help grow your agricultural
            business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/80 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input
                    placeholder="Enter your first name"
                    className="border-border/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input
                    placeholder="Enter your last name"
                    className="border-border/20"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="border-border/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="border-border/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Farm Size (in acres)
                </label>
                <Input
                  placeholder="Enter your farm size"
                  className="border-border/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your farming interests and how we can help..."
                  className="min-h-32 border-border/20"
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Submit Application
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/80 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-forest-green to-harvest-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <Card className="border-0 bg-gradient-to-br from-forest-green to-earth-brown text-white overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Join hundreds of farmers who have already transformed their
                    agricultural business with our collective approach.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10"
                    >
                      Download Brochure
                    </Button>
                    <Button
                      variant="secondary"
                      className="bg-white text-forest-green hover:bg-white/90"
                    >
                      Schedule Visit
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
