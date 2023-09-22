import { ReactNode, useContext, useEffect, useRef } from "react";
import { ScrollableContext } from "../ScrollingContainer";
import { v4 as uuid } from "uuid";

export interface ScrollableSectionProps {
  title: string;
  children?: ReactNode;
  backgroundColor?: string;
}

export const initialProps = {
  title: "Section Title",
};

// Scrollable.Section
export const ScrollableSection = ({
  title,
  children,
  backgroundColor,
}: ScrollableSectionProps) => {
  const { registerSection } = useContext(ScrollableContext)!;
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const id = uuid();
  // useRef(uuid()).current;

  useEffect(() => {
    registerSection(id, title, sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} className={backgroundColor}>
      <div className="py-12 px-20 max-w-[1440px] mx-auto flex flex-col gap-12">
        {title && <p className="text-zinc-900 text-2xl font-bold">{title}</p>}
        {children}
      </div>
    </section>
  );
};
