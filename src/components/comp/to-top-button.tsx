import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

export function ToTopButton() {
  const toTop = () => {
    setTimeout(() => {
      // 开始平滑滚动到顶部
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 0);
  };

  return (
    <Button variant="default" size="icon" onClick={toTop}>
      <ArrowUp className="h-[1.2rem] w-[1.2rem]"/>
      <span className="sr-only">Go To Top</span>
    </Button>
  );
}
