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
    name: "Optimisation de la gestion des stocks",
    description:
      "Nous fournissons des services complets de conseil, d’audit et de suivi pour les opérations de dédouanement à l’importation et à l’exportation en République démocratique du Congo. De l’acquisition de la licence au dédouanement, notre soutien garantit le respect des procédures et des lois, réduisant ainsi les risques de nonconformité pour nos clients.",
    img: serv1,
  },
  {
    name: "Évaluation des performances des fournisseurs",
    description:
      "Évaluation des performances des fournisseurs et mise en œuvre de stratégies de gestion pour améliorer la qualité, réduire les coûts et atténuer les risques.",
    img: serv2,
  },
  {
    name: "Optimisation du réseau de transport",
    description:
      "Réduire les coûts, améliorer les délais de livraison et réduire l’empreinte carbone grâce à des réseaux de transport optimisés.",
    img: serv3,
  },
  {
    name: "Consultation en matière de solutions technologiques",
    description:
      "Consultation et mise en œuvre de solutions technologiques telles que les systèmes de gestion des stocks, les logiciels ERP et les outils de suivi des expéditions en temps réel.",
    img: serv4,
  },
  {
    name: "Atténuation des risques et conformité",
    description:
      "Nous sommes des experts en gestion douanière pour l’import/export. Notre équipe gère les risques, garantissant des transactions fluides et conformes. De la documentation aux tarifs, nous simplifions le processus pour nos clients, les laissant se concentrer sur leurs objectifs commerciaux.",
    img: serv5,
  },
  {
    name: "Formation",
    description:
      "Explorez nos modules de formation en supply chain ! Cours interactifs, formateurs expérimentés, sujets variés. Nos modules incluent : Dédouanement en RDC (Import/Export), logistique, gestion des stocks, planification de la demande, fournisseurs et achats, optimisation des opérations, et technologies de la supply chain (comme la blockchain et l’IA). Vous serez prêt à exceller dans ce domaine crucial.",
    img: serv6,
  },
  {
    name: "Dédouanement, import/export",
    description:
      "Facilitez vos échanges internationaux avec nos services de dédouanement et d’import/export. Notre expertise vous permettra de naviguer en toute confiance dans les formalités douanières.",
    img: serv7,
  },
];

const fournitures = [
  { name: "Des équipements de sécurité", img: serv8 },
  { name: "Outils industriels", img: serv9 },
  { name: "Accessoires", img: serv11 },
];

const assistance = [
  { name: "eVisa", img: serv12 },
  { name: "Carte de travail", img: serv13 },
  { name: "Visa long séjour", img: serv14 },
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
              Nous fournissons des services complets de conseil, d’audit et de
              suivi pour les opérations de dédouanement à l’importation et à
              l’exportation en République démocratique du Congo. De
              l’acquisition de la licence au dédouanement, notre soutien
              garantit le respect des procédures et des lois, réduisant ainsi
              les risques de nonconformité pour nos clients.
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
              Assistance Visa en RDC
            </h1>
            <p className="mt-2 text-gray-200 mx-auto md:text-center max-w-[60rem]">
              Service professionnel et fiable d’assistance pour tous les types
              de visas à destination de la République démocratique du Congo,
              garantissant des préparatifs de voyage en douceur et sans tracas.
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
