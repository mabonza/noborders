import About from "@/components/About";
import Hero from "@/components/hero/Hero";
import TextVelocity from "@/components/TextVelocity";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import Policy from "@/components/Policy";
import FormRequest from "@/components/FormRequest";
import { beba, carlito } from "@/constants/fonts";
import { Heart, Quote } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

import ceoImage from "/public/ceo.jpeg";
import formImg from "/public/form.jpg";

export const metadata: Metadata = {
  title: "UKOO Solutions - Bienvenue sur notre site",
};

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="about" className="bg-u-yellow px-2">
        <div className="py-8 px-4 lg:px-8 lg:pt-20 bg-night">
          <div className="main">
            <h1
              className={`${beba.className} antialiased text-2xl md:text-4xl lg:text-5xl tracking-wide mb-4 flex flex-col items-center gap-2 justify-center`}
            >
              <Heart className="fill-u-yellow/40 text-u-yellow w-14 h-14 animate-pulse" />
              <span>Nos valeurs</span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-lg font-semibold flex-wrap text-gray-300">
              <span className="md:tracking-wide">Excellence</span>
              <span className="text-u-yellow font-extrabold/50">-</span>
              <span className="md:tracking-wide">Innovation</span>
              <span className="text-u-yellow font-extrabold/50">-</span>
              <span className="md:tracking-wide">Intégrité</span>
              <span className="text-u-yellow font-extrabold/50">-</span>
              <span className="md:tracking-wide">Collaboration</span>
              <span className="text-u-yellow font-extrabold/50">-</span>
              <span className="md:tracking-wide">Durabilité</span>
            </div>
            <p className="text-gray-400 text-sm text-center mt-4 max-w-[35rem] mx-auto">
              Nos valeurs sont précieuses, nous nous sommes engagés à faire de
              notre entreprise un succès et à nous assurer que tout le monde
              profite de nos solutions.
            </p>
          </div>
        </div>
      </section>

      <Policy />

      <About />

      <TextVelocity />

      <section className="bg-u-yellow px-2">
        <div className="py-8 bg-night">
          <div className="main">
            <h1
              className={`${beba.className} antialiased text-2xl md:text-4xl lg:text-5xl tracking-wide mb-4`}
            >
              Une équipe composée <br /> de{" "}
              <span className="text-u-yellow">professionnels</span> du secteur
            </h1>
            <div className="lg:flex gap-16">
              <p className="max-w-[35rem]">
                UKOO Solutions est dirigée par une équipe passionnée et
                expérimentée qui guide notre entreprise vers l’excellence. Notre
                équipe diversifiée et talentueuse, composée de professionnels de
                la chaîne d’approvisionnement, de spécialistes des achats et de
                la technologie, de chefs de projet et d’un service clientèle
                dévoué, constitue notre plus grand atout. Chaque membre est
                sélectionné pour son expertise et son engagement envers notre
                vision : être la solution.
              </p>
              <p className="text-gray-400 mt-4 max-w-[35rem] lg:mt-0">
                UKOO Solutions s’appuie également sur un vaste réseau de
                partenaires stratégiques, ce qui renforce notre capacité à
                fournir des solutions complètes et intégrées à nos clients. Ces
                partenariats nous permettent d’accéder à des ressources
                supplémentaires, d’étendre notre portée géographique et de
                rester à la pointe des dernières tendances du secteur. En
                collaborant avec les leaders du secteur, nous garantissons à nos
                clients des services de qualité supérieure et une valeur ajoutée
                inégalée.
              </p>
            </div>
          </div>
          <InfiniteMovingCards direction="right" speed="slow" />
        </div>
      </section>

      <Location />

      <section id="contact" className="bg-u-yellow px-2">
        <div className="py-8 lg:py-20 bg-night lg:flex group">
          <div className="hidden lg:block w-1/2 overflow-hidden relative">
            <Image
              src={formImg}
              alt="contact"
              className="w-full h-full object-cover absolute inset-0 opacity-70 group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div className="main lg:basis-1/2 lg:w-1/2 lg:p-12 lg:bg-nightest">
            <h1
              className={`${beba.className} antialiased text-center text-2xl md:text-4xl lg:text-5xl tracking-wide mb-4 lg:text-left`}
            >
              Besoin d&apos;en savoir plus? <br />{" "}
              <span className="text-u-yellow">Prenons contact</span>
            </h1>
            <p className="mb-4 text-sm mx-auto lg:m-auto lg:mb-4 text-center lg:text-left max-w-[677px]">
              Merci de nous envoyer vos informations afin de nous aider à vous
              aider à vous aider. Vous pouvez nous contacter par mail à{" "}
              <a
                href="mailto:info@ukoo-inv.com"
                className="font-semibold text-u-yellow/50"
              >
                info@ukoo-inv.com
              </a>{" "}
              ou par téléphone au{" "}
              <a
                href="tel:+243830088800"
                className="font-semibold text-u-yellow/50 whitespace-nowrap"
              >
                +243 830 088 800
              </a>
              .
            </p>
            <FormRequest />
          </div>
        </div>
      </section>

      <section className="bg-u-yellow px-2">
        <div className="py-8 lg:py-20 bg-night">
          <div className="main">
            <div className="relative p-2">
              <Quote className="text-u-yellow w-10 h-10 absolute -right-4 -top-8" />
              <p
                className={`${carlito.className} text-center max-w-[50rem] mx-auto font-bold text-xl md:text-2xl`}
              >
                Nous améliorons la logistique et la gestion de la chaîne
                d’approvisionnement en RDC. Grâce à notre expertise, nous
                optimisons les opérations d’import-export et boostons
                l’efficacité des entreprises. Faites-nous confiance pour vos
                besoins logistiques en RDC.
              </p>
              <Quote className="text-u-yellow w-10 h-10 absolute -left-4 -bottom-8 transform rotate-180" />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center mt-8">
              <div className="overflow-hidden rounded-full w-14 h-14 lg:w-20 lg:h-20">
                <Image
                  src={ceoImage}
                  alt="profile's ceo picture"
                  className="w-full h-full object-cover"
                />
              </div>
              <span>Christan KATUMBA</span>
              <span className="text-xs text-gray-400 font-semibold">
                Directeur général de UKOO INVESTMENT
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
