import Image from "next/image";
import { _404Notfound } from "@/data/ServiceLogos/404Notfound";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main>
      <section className="bg-white/0">
        <div className="layout flex min-h-screen flex-col items-center justify-center text-center text-black">
          <div>
            <Image src={_404Notfound.logos[0].url} alt="404" width={400} height={400} />
          </div>
          <h1 className="mt-8 text-4xl md:text-6xl">Page Not Found</h1>
          <Link className="mt-4 md:text-lg" href="/">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
