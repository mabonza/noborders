import { beba } from "@/constants/fonts";
import Navigation from "../Navigation";
import ImageCarousel from "./ImageCarousel";
import SparklesText from "../magicui/sparkles-text";

const HeroServices = () => {
  return (
    <section className="bg-u-yellow px-2 pt-2 text-white">
      <div className="flex flex-row gap-1 lg:gap-0 w-full">
        <div className="bg-night rounded-xl lg:rounded-b-none lg:rounded-xl rounded-b-none w-full relative b-14">
          <div className="main lg:mb-20 relative z-10">
            <Navigation />
            <div className="min-h-[70vh] lg:min-h-[60vh] flex items-center justify-center">
              <div className="flex flex-col gap-2 md:gap-4 md:items-center lg:justify-center py-20 lg:py-28 -mt-20">
                <h1
                  className={`${beba.className} text-4xl tracking-wide md:text-5xl lg:text-6xl xl:text-7xl text-center`}
                >
                  Services <span className="text-u-yellow">Logistiques</span>,
                  Chaîne d&apos;
                  <span className="text-u-yellow-100/90">
                    Approvisionnement
                  </span>{" "}
                  et bien{" "}
                  <SparklesText
                    text="plus!"
                    className="text-4xl tracking-wide md:text-5xl lg:text-6xl xl:text-7xl inline"
                  />
                </h1>
                <div className="mt-2 md:max-w-[25rem] lg:-mb-32 text-center">
                  <p>Accompagnement par des Experts & Produits de haute Qualité</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 rounded-t-xl overflow-hidden opacity-15">
            <ImageCarousel />
          </div>
          <div className="h-[10rem] w-full bg-gradient-to-t from-night absolute bottom-0 z-10" />
        </div>
      </div>
    </section>
  );
};

export default HeroServices;
