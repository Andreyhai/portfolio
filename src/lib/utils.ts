import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Объединяет классы Tailwind, разрешая конфликты
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

