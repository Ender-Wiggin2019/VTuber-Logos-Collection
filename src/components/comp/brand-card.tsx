/*
 * @Author: Ender-Wiggin
 * @Date: 2024-09-25 00:13:19
 * @LastEditors: Ender-Wiggin
 * @LastEditTime: 2025-04-02 02:15:16
 * @Description:
 */
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn, copyToClipboard, downloadImage } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { CreditCard } from "./credit-card";
import { IBrand } from "@/data/type";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

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
    <Card className="w-full grid grid-rows-card card-container">
      <CardHeader>
        <CardTitle>{brand.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center space-y-2">
        <div className="relative mb-auto h-48 w-full md:h-64">
          <LazyLoadImage
            src={currentLogo.url}
            alt={brand.name}
            sizes="300px"
            effect="opacity"
            wrapperProps={{
                // If you need to, you can tweak the effect transition using the wrapper style.
                style: {transitionDelay: "0.3s"},
            }}
            // unoptimized={true}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        {brand.logos.length > 1 && (
          <div className="flex w-full flex-wrap justify-start gap-2">
            {brand.logos.map((logo, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className={cn("h-8 min-w-20 rounded-full text-xs", { "border-zinc-600": currentLogoIndex === index })}
                onClick={() => setCurrentLogoIndex(index)}
              >
                {logo.type || "default"}
              </Button>
            ))}
          </div>
        )}
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
