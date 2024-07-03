import { ICredit } from "@/data/type";
import { Github, Info, Twitter, Globe } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type Props = {
  credit: ICredit;
};
export function CreditCard({ credit }: Props) {
  const triggerRef = useRef(null);
  return (
    <div className="w-full rounded-lg border bg-card text-muted-foreground shadow-sm py-2 px-3">
      <div className="flex flex-wrap gap-3 justify-between it">
        <Link className="flex items-center hover:underline hover:underline-offset-2" href={credit.twitter || credit.github || ""} rel="noopener noreferrer" target="_blank">
          @{credit.author}
        </Link>
        <div className="flex gap-2">
          {credit.twitter && (
            <Link href={credit.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter />
            </Link>
          )}
          {credit.website && (
            <Link href={credit.website} target="_blank" rel="noopener noreferrer">
              <Globe />
            </Link>
          )}
          {credit.github && (
            <Link href={credit.github} target="_blank" rel="noopener noreferrer">
              <Github />
            </Link>
          )}
          {credit.license && (
            <TooltipProvider delayDuration={50}>
              <Tooltip>
                <TooltipTrigger asChild ref={triggerRef} onClick={(event) => event.preventDefault()}>
                  <Info className="cursor-pointer" />
                </TooltipTrigger>
                <TooltipContent
                  onPointerDownOutside={(event) => {
                    if (event.target === triggerRef.current) event.preventDefault();
                  }}
                >
                  <div className="flex w-40 flex-col justify-start gap-4 sm:w-56">
                    {credit.license.name && <div className="text-lg font-bold">{credit.license.name}</div>}
                    {credit.license.description && <div className="">{credit.license.description}</div>}

                    <Link href={credit.license.url} target="_blank" rel="noopener noreferrer">
                      <span className="underline">License Link</span>
                    </Link>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </div>
    </div>
  );
}
