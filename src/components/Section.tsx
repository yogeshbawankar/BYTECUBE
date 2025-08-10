import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";

type SectionProps = ComponentPropsWithoutRef<"section">;

const Section = forwardRef<ElementRef<"section">, SectionProps>(
  ({ className = "", children, ...rest }, ref) => {
    return (
      <section ref={ref} className={`py-16 ${className}`} {...rest}>
        <div className="container mx-auto px-6">{children}</div>
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;


