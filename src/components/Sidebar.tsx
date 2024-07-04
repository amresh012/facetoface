"use client"
import React from 'react'
import { sidebarlink } from '../../constants'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { BorderBeam } from './magicui/border-beam';

const Sidebar = () => {
  const pathname= usePathname()
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px] rounded-lg">
      <div className="flex flex-col gap-6">
        {sidebarlink.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(link.route);
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                { "bg-blue-1": isActive }
              )}
            >
              <Image src={link.url} alt={link.label} width={24} height={24} />
              <p className="font-semibold text-lg max-lg:hidden">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
      <BorderBeam size={250} duration={12} delay={9} />
    </section>
  );
}

export default Sidebar