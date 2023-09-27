import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string | undefined) {
  if (dateString) {
    const myDate = new Date(dateString);
    // const month = myDate.getMonth();
    // const year = myDate.getFullYear();
    const day = myDate.getDate() + 1;
    myDate.setDate(day);
    // return `${month} ${day}, ${year}`;
    return myDate.toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    });
  }
}
