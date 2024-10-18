import { Button } from "../ui/button";

const ContactButton = () => {
  return (
    <a href="#contact" className="mt-4 w-max block">
      <Button className="bg-white text-black rounded-xl px-4 py-2 border border-night hover:bg-slate-100 transition-all duration-300 active:scale-105">
        Nous contacter
      </Button>
    </a>
  );
};

export default ContactButton;
