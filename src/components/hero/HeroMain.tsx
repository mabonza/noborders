import { beba } from "@/constants/fonts";
import Navigation from "../Navigation";
import ImageCarousel from "./ImageCarousel";

const Main = () => {
  return (
    <div className="bg-night rounded-xl lg:rounded-b-none lg:rounded-xl rounded-b-none w-full relative b-14">
      <div className="main lg:mb-20 relative z-10">
        <Navigation />
        <div>
          <div className="flex flex-col gap-2 md:gap-4 lg:flex-row md:items-center lg:justify-center py-20 lg:py-28">
            <h1
              className={`${beba.className} text-4xl tracking-wide md:text-5xl lg:text-6xl xl:text-7xl`}
            >
              Votre partenaire idéal <br /> en matière de{" "}
              <span className="text-u-yellow">logistique</span> <br /> et
              d&apos;
              <span className="text-u-yellow">approvisionnement</span>
            </h1>
            <div className="mt-4 md:max-w-[25rem] lg:-mb-32">
              <p>
                EST KM spécialisée dans la logistique et la chaîne
                d&apos;approvisionnement. Elle propose une gamme variée de
                services d&apos;accompagnement sur l&apos;ensemble de la chaîne
                logistique globale et fournit aux entreprises de divers secteurs
                des produits consommables de haute qualité.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 rounded-t-xl overflow-hidden opacity-15">
        <ImageCarousel />
      </div>
      <div className="h-[10rem] w-full bg-gradient-to-t from-night absolute bottom-0 z-10" />
    </div>
  );
};

export default Main;
