
import { Button } from '@/components/ui/button'
import { cn } from "@/lib/utils";

export function ToTopButton() {

  const toTop = () => {
    setTimeout(()=>{
      // 开始平滑滚动到顶部
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    },0)
  };

  return (
      <Button 
        variant="default"
        size="default"
        className={cn("rounded-md ml-4")}
        onClick={toTop}
      >
        {"Top"}
      </Button>
  );
}
