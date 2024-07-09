import Navabar from "@/components/Navabar";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navabar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 mx-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
          <AnimatedGridPattern
            numSquares={90}
            maxOpacity={0.9}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(red, tranparent)]",
              "inset-x-0 inset-y-[-30%] h-[150%] skew-y-12 z-[-1]"
            )}
          />
        </section>
      </div>
      Footer
    </main>
  );
};

export default RootLayout;
