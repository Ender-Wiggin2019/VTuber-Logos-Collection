import { Github, Twitter } from "lucide-react";
import Link from "next/link";

type Props = {
  credit: ICredit;
};
export function CreditCard({ credit }: Props) {
  return (
    <div className="w-full rounded-lg border bg-card text-card-foreground shadow-sm py-2 px-3 text-zinc-500">
      <div className="flex justify-between it">
        <Link className="flex items-center hover:underline hover:underline-offset-2" href={credit.twitter || credit.github || ""} rel="noopener noreferrer" target="_blank">
          @{credit.author}
        </Link>
        <div className="flex space-x-4">
          {credit.twitter && (
            <Link href={credit.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter />
            </Link>
          )}
          {credit.github && (
            <Link href={credit.github} target="_blank" rel="noopener noreferrer">
              <Github />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
