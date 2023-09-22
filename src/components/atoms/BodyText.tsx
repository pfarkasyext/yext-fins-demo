import { twMerge } from "tailwind-merge";
import { Color, textColorMap } from "../../types/tailwind";
export interface BodyTextProps {
  text: string;
  weight?: "Regular" | "Bold";
  color?: Color;
  className?: string;
  size?: "sm" | "base";
}

export const initialProps: BodyTextProps = {
  text: "Header",
  weight: "Regular",
  color: "dark-gray",
  size: "base",
};

export default function BodyText({
  text,
  weight,
  color,
  className,
  size,
}: BodyTextProps) {
  const textColor = textColorMap[color ?? "dark-gray"];

  return (
    <p
      className={twMerge(
        `text-base ${textColor} ${
          weight === "Bold" ? "font-bold" : "font-regular"
        } ${size ? "text-sm" : "text-base"}`,
        className
      )}
    >
      {text}
    </p>
  );
}
