import Image from "next/image";
import ImageCarousel from "./ImageCarousel";
// import images
import img3 from "/public/user.webp";

const HeroImageSlider = () => {
  return (
    <div className="relative w-full bg-night rounded-t-xl lg:rounded-xl overflow-hidden h-full">
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="h-[40rem] w-full bg-gradient-to-t from-night" />
        <div className="text-white bg-night p-8">
          <p className="text-lg max-w-[20rem]">
            Choisir <span className="font-bold">KIDOGE MAJAGIRA</span>,
            c&apos;est allier expérience et innovation.
          </p>
          <div className="bg-white rounded-full p-[.10rem] mt-4 w-max flex">
            <div className="bg-black w-14 h-14 rounded-full overflow-hidden">
              <Image
                src={img3}
                alt="image du responsable"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-end pr-8 pl-2">
              <span className="text-gray-500 text-sm">Responsable</span>
              <span className="text-black -mt-1 mb-1.5">Kidoge M.</span>
            </div>
          </div>
        </div>
      </div>
      <ImageCarousel />
    </div>
  );
};

export default HeroImageSlider;
