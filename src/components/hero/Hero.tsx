import Main from "./HeroMain";
import ServicesSlider from "./ServicesSlider";

const Hero = () => {
  return (
    <section className="bg-u-yellow px-2 pt-2 text-white">
      <div className="flex flex-row gap-1 lg:gap-0 w-full">
        <Main />
      </div>
      <ServicesSlider />
    </section>
  );
};

export default Hero;
