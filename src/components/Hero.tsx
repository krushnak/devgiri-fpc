import { Button } from "@/components/ui/button";
import mainImage from "@/assets/mainImage.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background Image */}
      <div
        className="absolute top-0 bottom-0 left-6 right-6 bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden"
        style={{ backgroundImage: `url(${mainImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r via-forest-green/60 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
