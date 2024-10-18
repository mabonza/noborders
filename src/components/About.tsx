import { beba } from "@/constants/fonts";
import React from "react";
import Accordion from "./Accordion";
import Image from "next/image";

import img1 from "/public/solution.webp";
import img2 from "/public/greetings.webp";

const About = () => {
  return (
    <section className="bg-u-yellow px-2 text-white w-full">
      <div className="py-8 lg:pb-20 bg-night">
        <div className="main flex flex-col gap-8 md:flex-col-reverse justify-center lg:gap-12 xl:gap-24">
          <section>
            <h1
              className={`${beba.className} antialiased text-2xl md:text-4xl lg:text-5xl tracking-wide md:hidden`}
            >
              Pourquoi choisir{" "}
              <span className="text-u-yellow">UKOO SOLUTIONS ?</span>
            </h1>
            <div className="flex flex-col gap-4 md:flex-row-reverse lg:gap-12 md:items-center group">
              <div className="w-full md:basis-1/2">
                <Accordion />
              </div>
              <div className="overflow-hidden rounded-xl md:basis-1/2">
                <Image
                  src={img1}
                  alt="solution"
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
              </div>
            </div>
          </section>

          <div className="flex flex-col gap-4 md:flex-row lg:gap-12 md:items-center group">
            <div className="w-full md:basis-1/2">
              <h1
                className={`${beba.className} antialiased text-2xl md:text-4xl lg:text-5xl tracking-wide hidden md:block mb-4`}
              >
                Pourquoi choisir <br />
                <span className="text-u-yellow ml-12">UKOO SOLUTIONS ?</span>
              </h1>
              <p>
                Choisir UKOO SOLUTIONS, c&apos;est allier expérience et
                innovation.
              </p>
              <p className="text-gray-500 mt-2 max-w-[467px] xl:max-w-[600px]">
                Nous sommes déterminés à révolutionner la logistique et la
                gestion de la chaîne d’approvisionnement en République
                démocratique du Congo. Grâce à notre expertise et à notre gamme
                complète de services, nous assurons des opérations d’importation
                et d’exportation sans faille, optimisons les chaînes
                d’approvisionnement et améliorons l’efficacité globale de
                l’entreprise.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl md:basis-1/2">
              <Image
                src={img2}
                alt="solution"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
