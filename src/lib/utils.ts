import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export type OneOf<TypesArray extends unknown[], Result = never> = TypesArray extends [infer Head, ...infer Tail] ? OneOf<Tail, Result | Head> : Result;
