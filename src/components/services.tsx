import { beba } from "@/constants/fonts";
import React, { Fragment } from "react";
import Image from "next/image";
import BlurFade from "./magicui/blur-fade";
import clsx from "clsx";

import serv1 from "../../public/services/serv1.webp";
import serv2 from "../../public/services/serv2.webp";
import serv3 from "../../public/services/serv3.webp";
import serv4 from "../../public/services/serv4.webp";
import serv5 from "../../public/services/serv5.webp";
import serv6 from "../../public/services/serv6.webp";
import serv7 from "../../public/services/serv7.webp";
import serv8 from "../../public/services/serv8.webp";
import serv9 from "../../public/services/serv9.webp";
import serv10 from "../../public/services/serv10.webp";
import serv11 from "../../public/services/serv11.webp";
import serv12 from "../../public/services/serv12.webp";
import serv13 from "../../public/services/serv13.webp";
import serv14 from "../../public/services/serv14.webp";

const supplyChainServices = [
  {
    name: "Transport Lacustre",
    description:
      "ETS KM possède une expertise significative dans le transport lacustre, offrant des services fiables et efficaces sur le Lac Tanganyika.",
    img: serv1,
  },
  {
    name: "Logistique",
    description:
      "Services logistiques complets assurant la gestion et le transport fluides des marchandises.",
    img: serv2,
  },
  {
    name: "Commerce Général",
    description:
      "Engagé dans la vente d’une large gamme de produits, répondant aux divers besoins du marché.",
    img: serv3,
  },
  {
    name: "Import-Export",
    description:
      "Facilitation du mouvement des marchandises à travers les frontières, en assurant la conformité avec les réglementations du commerce international.",
    img: serv4,
  },
  {
    name: "Construction",
    description:
      "Fourniture de services de construction, y compris le développement de bâtiments et d’infrastructures.",
    img: serv5,
  },
  {
    name: "Vente de Matériaux de Construction",
    description:
      "Priorisation de la vente de matériaux de construction essentiels tels que le ciment, le fer à béton et le carburant.",
    img: serv6,
  },
  {
    name: "Dédouanement, import/export",
    description:
      "L'axe Lubumbashi-Kalemie souffre du manque d'infrastructures, tant par route que par rail. Le trajet de Lubumbashi a Kalemie etait devenu un vrai cauchemar qui pouvait prendre jusqu'à 6 semaines, de quoi décourager les transporteurs les plus courageux ! Cette situation a entraîné une pénurie significative de nos boissons à Kalemie.",
    img: serv7,
  },
];

const fournitures = [
  { name: "Des équipements de sécurité", img: serv8 },
  { name: "Outils industriels", img: serv9 },
  { name: "Accessoires", img: serv11 },
];

const assistance = [
  { name: "Dangote Sement & Hashi Energy", img: serv12 },
  { name: "Bralima & PAM", img: serv13 },
  { name: "MONUSCO & Kotecha Group", img: serv14 },
];

const Servvices = () => {
  return (
    <section className="bg-u-yellow px-2">
      <div className="py-8 lg:py-20 bg-night">
        <div className="main flex flex-col gap-4">
          <section id="expertise en logistique et chaine d'approvisionnement">
            <h1
              className={`${beba.className} antialiased text-2xl md:text-4xl lg:text-5xl tracking-wide mb-4 flex flex-col items-center gap-2 justify-center`}
            >
              Expertise en logistique et chaine d&apos;approvisionnement
            </h1>
            <p className="mt-2 text-gray-200 mx-auto md:text-center max-w-[60rem]">
            La Brasimba, consciente de l'importance de répondre aux besoins de
            ses consommateurs, a été confrontée à un défi majeur : trouver un
            nouvel axe pour approvisionner Kalemie.
            Une expédition "test" à travers la Zambie et le Lac Tanganyika a
            permis de livrer d'un coup 10.000 casiers au port de Kalemie, sous les
            acclamations des tenanciers et clients.
            Découvrez le reportage de cette expédition incroyable sur nos pages
            BRASIMBA.
            </p>

            <div className="mt-8 flex flex-col gap-8 lg:gap-4">
              {supplyChainServices.map(({ name, description, img }, i) => {
                if (i % 2 === 0) {
                  return (
                    <article
                      key={i}
                      className="bg-nightest rounded-t-full md:rounded-t-none md:rounded-tl-full md:rounded-bl-full flex flex-col gap-8 items-center md:flex-row"
                    >
                      <div className="w-full h-80 overflow-hidden rounded-t-full md:rounded-t-none md:rounded-tl-full md:rounded-bl-full lg:basis-[40%]">
                        <Image
                          src={img}
                          alt={`service ${name}`}
                          className="object-cover w-full h-full sm:-mb-40"
                        />
                      </div>
                      <div className="pb-4 px-4 grow">
                        <div className="md:w-max md:mx-auto">
                          <h1 className="font-bold text-u-yellow">{name}</h1>
                          <p className="mt-2 text-gray-300 max-w-[465px]">
                            {description}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                } else {
                  return (
                    <article
                      key={i}
                      className="bg-nightest rounded-t-full md:rounded-t-none md:rounded-tr-full md:rounded-br-full flex flex-col gap-8 items-center md:flex-row-reverse"
                    >
                      <div className="w-full h-80 overflow-hidden rounded-t-full md:rounded-t-none md:rounded-tr-full md:rounded-br-full lg:basis-[40%]">
                        <Image
                          src={img}
                          alt={`service ${name}`}
                          className="object-cover w-full h-full sm:-mb-40"
                        />
                      </div>
                      <div className="pb-4 px-4 grow">
                        <div className="md:w-max md:mx-auto">
                          <h1 className="font-bold text-u-yellow">{name}</h1>
                          <p className="mt-2 text-gray-300 max-w-[465px]">
                            {description}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                }
              })}
            </div>
          </section>

          <section id="fourniture des produits" className="mt-12">
            <h1
              className={`${beba.className} antialiased text-2xl md:text-4xl lg:text-5xl tracking-wide mb-4 flex flex-col gap-2 md:items-center justify-center`}
            >
              Fourniture des produits
            </h1>
            <p className="mt-2 text-gray-200 mx-auto md:text-center max-w-[60rem]">
              Nous vendons des équipements de sécurité, des outils industriels,
              des fournitures spécialisées et d&apos;autres accessoires pour les
              entreprises et les particuliers.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-2">
              {fournitures.map(({ name, img }) => {
                return (
                  <Fragment key={name}>
                    <BlurFade delay={0.25 * 2} inView>
                      <article className="bg-nightest rounded-xl">
                        <div className="h-80 overflow-hidden rounded-xl rounded-b-none">
                          <Image
                            src={img}
                            alt="service 1"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <h1 className="p-2 px-4 text-center font-semibold text-u-yellow">
                          {name}
                        </h1>
                      </article>
                    </BlurFade>
                  </Fragment>
                );
              })}
            </div>
          </section>

          <section id="assistance visa en rdc" className="mt-12">
            <h1
              className={`${beba.className} antialiased text-2xl md:text-4xl lg:text-5xl tracking-wide mb-4 flex flex-col gap-2 md:items-center justify-center`}
            >
              Partenariats et Collaborations:            
            </h1>
            <p className="mt-2 text-gray-200 mx-auto md:text-center max-w-[60rem]">
            Nous
            transportons pour des sociétés reconnues dans le Sud-Kivu telles que
            Datco et Kotecha. Nous travaillons également avec des partenaires au
            Burundi, en Tanzanie et en Zambie.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-2">
              {assistance.map(({ name, img }, i) => {
                return (
                  <Fragment key={name}>
                    <BlurFade delay={0.25 * 2} inView>
                      <article key={name} className="bg-nightest rounded-xl">
                        <div className="h-80 overflow-hidden rounded-xl rounded-b-none">
                          <Image
                            src={img}
                            alt="service 1"
                            className={clsx(
                              "w-full h-full",
                              i === 1 ? "object-contain" : "object-cover"
                            )}
                          />
                        </div>
                        <h1 className="p-2 px-4 text-center font-semibold text-u-yellow">
                          {name}
                        </h1>
                      </article>
                    </BlurFade>
                  </Fragment>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Servvices;
