import {
  Accordion as AccordionPrimitive,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accordionItems } from "@/constants";
import { beba } from "@/constants/fonts";

const Accordion = () => {
  return (
    <AccordionPrimitive type="single" collapsible>
      {accordionItems.map(({ content, title }, index) => (
        <AccordionItem key={title} value={title}>
          <AccordionTrigger className="text-lg tracking-wide">
            <div className="flex items-center gap-4">
              <span className={`md:text-4xl font-extrabold text-white/50`}>
                {index + 1}
              </span>
              <span className="md:text-xl">{title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-base pl-8">{content}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionPrimitive>
  );
};

export default Accordion;
