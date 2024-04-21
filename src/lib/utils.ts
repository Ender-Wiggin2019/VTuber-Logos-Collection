import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

    // 复制图片URL到剪贴板
    export const copyToClipboard = async (url: string, onCopied?: () => void) => {
      try {
          await navigator.clipboard.writeText(url);
          onCopied?.();
      } catch (err) {
          console.error('Failed to copy: ', err);
      }
  };

  // 下载图片
  export const downloadImage = async (url: string) => {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = url.split('/').pop()!;

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(downloadUrl);
      } catch (err) {
        console.error('Download failed:', err);
      }
    };