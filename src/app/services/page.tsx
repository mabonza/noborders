import HeroServices from "@/components/hero/HeroServices";
import TextVelocity from "@/components/TextVelocity";
import Footer from "@/components/Footer";
import FormRequest from "@/components/FormRequest";
import { beba, carlito } from "@/constants/fonts";
import { Quote } from "lucide-react";
import Image from "next/image";
import React from "react";
import Servvices from "@/components/services";
import type { Metadata } from "next";

import ceoImage from "/public/ceo.jpeg";
import formImg from "/public/form.jpg";

export const metadata: Metadata = {
  title: "UKOO Solutions - Des services de qualité",
};

export default function Home() {
  return (
    <main>
      <HeroServices />
      <TextVelocity />
      <Servvices />
      <TextVelocity />

      <section className="bg-u-yellow px-2">
        <div className="py-8 lg:py-20 bg-night">
          <div className="main">
            <div className="relative p-2">
              <Quote className="text-u-yellow w-10 h-10 absolute -right-4 -top-8" />
              <p
                className={`${carlito.className} text-center max-w-[50rem] mx-auto font-bold text-xl md:text-2xl`}
              >
                Grâce à notre longue histoire et notre présence établie dans la région, nous avons construit un réseau solide de partenaires et de clients, ce qui nous permet de fournir des services efficaces et de répondre rapidement aux besoins du marché.
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
              <span>Kidoge Majagira</span>
              <span className="text-xs text-gray-400 font-semibold">
                  PDG d'EST KM
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-u-yellow px-2">
        <div className="py-8 lg:py-20 bg-night lg:flex group lg:pb-0">
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

      <Footer />
    </main>
  );
}
