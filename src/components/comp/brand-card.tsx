"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn, copyToClipboard, downloadImage } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { CreditCard } from "./credit-catd";

type BrandCardProps = {
  brand: IBrand;
};

export function BrandCard({ brand }: BrandCardProps) {
  const [currentLogoIndex, setCurrentLogoIndex] = useState<number>(0);

  const currentLogo = brand.logos[currentLogoIndex];
  const handleCopy = () => {
    copyToClipboard(currentLogo.url);
    toast("Copied successfully");
  };

  return (
    <Card className="w-full md:w-[400px] card-container">
      <CardHeader>
        <CardTitle>{brand.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center space-y-2">
        <div className="h-48 md:h-64">
          <Image src={currentLogo.url} alt={brand.name} width={400} height={400} />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {brand.logos.map((logo, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className={cn("rounded-full text-xs min-w-20 h-8 w-full", { "border-zinc-600": currentLogoIndex === index })}
              onClick={() => setCurrentLogoIndex(index)}
            >
              {logo.type || "default"}
            </Button>
          ))}
        </div>
        <CreditCard credit={currentLogo.credit} />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleCopy}>
          Copy
        </Button>
        <Button onClick={() => downloadImage(currentLogo.url)}>Download</Button>
      </CardFooter>
    </Card>
  );
}
