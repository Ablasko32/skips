import type { ISkip } from "../../types/Skips";

const API_URL = import.meta.env.VITE_SKIP_API_URL as string;
if (!API_URL || typeof API_URL != "string") {
  throw new Error("Error: env variable 'VITE_SKIP_API_URL' not set.");
}

export async function fetchAllSkips(): Promise<ISkip[]> {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (err) {
    console.error(err);
    throw new Error("Error fetching skips-'fetchAllSkips'.");
  }
}
