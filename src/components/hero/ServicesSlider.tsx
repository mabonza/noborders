import Image from "next/image";

import { services } from "@/constants";
import { beba } from "@/constants/fonts";
import Link from "next/link";
import ImageCarousel from "./ImageCarousel";

const ServicesSlider = () => {
  return (
    <div id="services" className="relative">
      <div className="bg-night pt-14">
        <h1
          className={`${beba.className} antialiased text-2xl md:text-4xl lg:text-5xl tracking-wide mb-4 flex flex-col items-center gap-2 justify-center`}
        >
          Nos services
        </h1>
        <div className="py-8 px-6 lg:p-8 flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-center gap-4 services">
          {services.map(({ img, name, text }) => (
            <article
              key={name}
              className="bg-nightest rounded-xl md:flex md:w-[680px] lg:w-[600px] flex-none group md:items-center"
            >
              <div className="relative overflow-hidden rounded-xl h-[208px] md:basis-1/2 lg:h-[210px] rounded-b-none lg:rounded-b-xl lg:rounded-r-none">
                {name.includes("logistique") ? (
                  <ImageCarousel />
                ) : (
                  <Image
                    src={img}
                    alt="image"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                  />
                )}
              </div>
              <div className="text-white p-4 md:basis-1/2">
                <h1 className="font-bold text-u-yellow">{name}</h1>
                <p className="text-sm mt-2 text-slate-200 lg:group-hover:pl-2 transition-all duration-300">
                  {text.length > 179 ? text.slice(0, 170) + "..." : text}
                </p>
                <Link
                  href={`/services#${name.toLowerCase()}`}
                  className="text-u-yellow/50 mt-2 text-xs block font-semibold bg-transparent p-0 hover:bg-transparent hover:text-u-yellow w-max px-2 m-0"
                >
                  En savoir plus
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSlider;
