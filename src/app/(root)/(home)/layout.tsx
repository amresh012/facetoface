import Navabar from "@/components/Navabar";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";
import Footer from "@/components/Footer";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navabar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-auto flex-1 flex-col px-6 pb-6 pt-28 mx-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
          
        </section>
      </div>
      <Footer/>
    </main>
  );
};

export default RootLayout;
