import Image from "next/image";

import missionImg from "/public/mission.webp";
import visionImg from "/public/vision.webp";

const Policy = () => {
  return (
    <section className="bg-u-yellow px-2 text-white w-full">
      <div className="pb-20 bg-night">
        <div className="main flex flex-col md:flex-row gap-2 lg:gap-8 justify-center items-center md:justify-center">
          <div className="relative w-full rounded-xl h-[25rem] overflow-hidden group">
            <div className="absolute inset-x-0 bottom-0 z-10">
              <div className="h-[10rem] w-full bg-gradient-to-t from-nightest" />
              <div className="text-white bg-nightest p-8">
                <h1 className="font-semibold mb-2 text-lg text-u-yellow">
                  Notre vision
                </h1>
                <p className="text-sm">
                Devenir l’entreprise leader dans le transport lacustre 
                et la logistique sur le Lac Tanganyika, reconnue pour 
                sa fiabilité, la qualité de ses services et son engagement 
                envers l’excellence.
                </p>
              </div>
            </div>
            <Image
              src={visionImg}
              alt="vision"
              className="w-full h-full object-cover -mt-24 group-hover:scale-110 transition-all duration-500"
            />
          </div>

          <div className="relative w-full rounded-xl h-[25rem] overflow-hidden group">
            <div className="absolute inset-x-0 bottom-0 z-10">
              <div className="h-[10rem] w-full bg-gradient-to-t from-nightest" />
              <div className="text-white bg-nightest p-8">
                <h1 className="font-semibold mb-2 text-lg text-u-yellow">
                  Notre mission
                </h1>
                <p className="text-sm">
                Fournir des services exceptionnels de transport, 
                de logistique et de construction, en assurant la 
                satisfaction des clients et en contribuant à la 
                croissance économique régionale.
                </p>
              </div>
            </div>
            <Image
              src={missionImg}
              alt="vision"
              className="w-full h-full object-cover -mt-24 group-hover:scale-110 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policy;
