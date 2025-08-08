import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  id?: string;
};

const Section = ({ className = "", children, id }: Props) => {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="container mx-auto px-6">{children}</div>
    </section>
  );
};

export default Section;


