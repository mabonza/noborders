import Image from "next/image";
import logoImg from "/public/logo.png";
import { navItems, services } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-u-yellow px-2 pb-2 text-white">
      <div className="relative w-full bg-nightest overflow-hidden rounded-b-xl">
        <div className="text-white bg-nightest py-8 relative z-20 lg:py-20">
          <div className="main">
            <div className="flex flex-col lg:flex-row mb-8 lg:items-end justify-between gap-8">
              <div className="sm:w-max">
                <Image src={logoImg} alt="logo" className="w-[200px]" />
              </div>
              <div className="flex flex-wrap items-start md:justify-between gap-8 lg:gap-16">
                <section>
                  <h1 className="text-lg font-semibold mb-2">Nous contacter</h1>
                  <ul>
                    <li>
                      <a
                        href="mailto:info@ukoo-inv.com"
                        className="text-sm text-gray-300 hover:text-gray-500"
                      >
                        info@ukoo-inv.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+243830088800"
                        className="text-sm text-gray-300 hover:text-gray-500"
                      >
                        +243 830 088 800
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+243847765555"
                        className="text-sm text-gray-300 hover:text-gray-500"
                      >
                        +243 847 765 555
                      </a>
                    </li>
                  </ul>
                </section>
                <section>
                  <h1 className="text-lg font-semibold mb-2">Liens utiles</h1>
                  <ul>
                    {navItems.map((link) => (
                      <li key={link.to}>
                        <a
                          href={link.to}
                          className="text-sm text-gray-300 hover:text-gray-500"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h1 className="text-lg font-semibold mb-2">Nos Services</h1>
                  <ul>
                    {services.map((service) => (
                      <li key={service.name}>
                        <a
                          href={`/services#${service.name.toLowerCase()}`}
                          className="text-sm text-gray-300 hover:text-gray-500"
                        >
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Copyright {new Date().getFullYear()} Noborders Group. Tous droits
              réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
