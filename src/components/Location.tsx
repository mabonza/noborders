import { beba } from "@/constants/fonts";
import ContactButton from "./buttons/contact";

import mapImg from "/public/carte.png";
import Image from "next/image.js";

const Location = () => {
  return (
    <section className="bg-u-yellow px-2 text-white w-full">
      <div className="py-8 bg-night">
        <div className="main flex flex-col gap-8 md:flex-row-reverse items-center justify-between w-full lg:gap-16">
          <section className="md:w-max">
            <h1
              className={`${beba.className} antialiased text-2xl md:text-4xl lg:text-5xl tracking-wide`}
            >
              <span className="text-u-yellow">Où trouver</span> EST KM ?
            </h1>
            <p className="text-[#F5F3F5] mt-2 max-w-[467px] xl:max-w-[600px]">
              EST KM est une entreprise oeuvrant en République
              démocratique du Congo et ayant des emplacements physiques dans les
              villes de Kinshasa, de Goma et de Lubumbashi.
            </p>
            <p className="text-gray-400 mt-2 max-w-[467px] xl:max-w-[600px]">
              En plus de nos bureaux physiques, nous sommes également
              disponibles à distance. N&apos;hésitez pas à nous contacter par
              téléphone, email ou via notre site web pour toute question ou pour
              demander un devis.
            </p>
            <p className="text-u-yellow/50 mt-2 max-w-[467px]">
              <span className="text-gray-400">
                Retrouvez nous à Kinshasa à l&apos;adresse :{" "}
              </span>{" "}<br />
              Avenue du Congo N&deg; 28/5<br />
              Quartier Kimanga<br />
              Commune Kalundu, Uvira, Sud-Kivu<br />
              R&eacute;publique D&eacute;mocratique du Congo
            </p>
          </section>

          <section className="md:basis-1/2">
            <Image src={mapImg} alt="map" />
          </section>
        </div>
      </div>
    </section>
  );
};

export default Location;
