import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-[#f0f4f8] dark:bg-[#252526] z-50">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:jus tify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms and Conditions
        </Button>
      </div>
    </div>
  );
};
