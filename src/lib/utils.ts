import { IBrand } from "@/data/type";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// copy to clipboard
export async function copyToClipboard(src: string) {
  const img = await fetch(src);
  const imgBlob = await img.blob();
  try {
    navigator.clipboard.write([
      new ClipboardItem({
        "image/png": imgBlob, // change image type accordingly
      }),
    ]);
  } catch (error) {
    console.error(error);
  }
}

// download image
export const downloadImage = async (url: string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = url.split("/").pop()!;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(downloadUrl);
  } catch (err) {
    console.error("Download failed:", err);
  }
};

export const filterByAuthor = (brands: IBrand[], author: string) => {
  // TODO: since currently each brand class only has one author, it's temporary okay. In the future this part should be improved.
  return brands.filter((brand) => brand.logos.some((logo) => logo.credit.pk === author || author.includes(logo.credit.pk)));
}