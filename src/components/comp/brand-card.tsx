"use client"

import * as React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn, copyToClipboard, downloadImage } from "@/lib/utils"
import { toast } from "sonner"
import { CreditCard } from "./credit-catd"

type BrandCardProps = {
    brand: IBrand
}

export function BrandCard({brand}: BrandCardProps) {
    const [currentLogoIndex, setCurrentLogoIndex] = useState<number>(0);

    const currentLogo = brand.logos[currentLogoIndex];

    const handleCopy = () => {
        copyToClipboard(currentLogo.url);
        toast("Copied successfully"
        );
    }

    return (
        <Card className="w-[400px]">
            <CardHeader>
                <CardTitle>{brand.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center space-y-2">
                <div className="h-64"><Image src={currentLogo.url} alt="Brand Logo" width={400} height={400} /></div>
                <div className="grid grid-cols-4 gap-8">
                    {brand.logos.map((logo, index) => (
                        <Button key={index} variant="outline" className={cn("rounded-full text-xs w-20 h-8", {"border-zinc-600": currentLogoIndex === index})} onClick={() => setCurrentLogoIndex(index)}>
                            {logo.type || 'default'}
                        </Button>
                    ))}
                </div>
                <CreditCard credit={currentLogo.credit} />
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handleCopy}>Copy</Button>
                <Button onClick={() => downloadImage(currentLogo.url)}>Download</Button>
            </CardFooter>
        </Card>
    )
}
