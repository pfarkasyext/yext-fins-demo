import { twMerge } from "tailwind-merge";
import HeadingText from "./HeadingText";

export interface SectionProps {
  children?: React.ReactNode;
  containerClassname?: string;
  backgroundColor?: string;
  title?: string;
}

export const initialProps: SectionProps = {
  title: "Section Title",
};

export default function Section({
  children,
  backgroundColor,
  containerClassname,
  title,
}: SectionProps) {
  return (
    <section className={backgroundColor}>
      <div
        className={twMerge(
          "py-12 px-20 max-w-[1440px] mx-auto flex flex-col gap-12",
          containerClassname
        )}
      >
        {title && <p className="text-zinc-900 text-2xl font-bold">{title}</p>}
        {children}
      </div>
    </section>
  );
}
