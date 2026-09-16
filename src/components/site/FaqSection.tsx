import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqEntry } from "@/content/faq";

export function FaqSection({
  eyebrow = "FAQ",
  title = "Common questions",
  faqs,
}: {
  eyebrow?: string;
  title?: string;
  faqs: FaqEntry[];
}) {
  return (
    <section className="border-t border-border">
      <div className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {eyebrow}
          </div>
          <h2 className="md:col-span-8 text-display text-section max-w-3xl">{title}</h2>
        </div>
        <Accordion type="single" collapsible className="max-w-3xl md:ml-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger className="text-base text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
