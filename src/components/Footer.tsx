import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { media, sidebarlink } from '../../constants';

const Footer = () => {
  return (
    <footer className="min-h-auto bg-dark-1 ">
      <div className="flex lg:flex-row flex-col justify-evenly  py-24">
        {/*  */}
        <div className="text-white ">
          <h1 className="font-bold text-xl tracking-wide">Quick links</h1>
          {sidebarlink.map((link) => {
            return (
              <>
                <Link
                  href={link.route}
                  key={link.label}
                  className="flex gap-1 items-center p-2 rounded-lg justify-start"
                >
                  <Image
                    src={link.url}
                    alt={link.label}
                    width={14}
                    height={14}
                  />
                  <p className="font-semibold  max-lg:hidden">{link.label}</p>
                </Link>
              </>
            );
          })}
        </div>
        {/*  */}
        <div className="list-none flex flex-col   text-white font-medium  items-center justify-start ">
          <h1 className="font-bold tracking-wide text-xl">Company</h1>
          {[...Array(5)].map((_, i) => {
            return (
              <li className="py-2" key={i}>
                Nav Link
              </li>
            );
          })}
        </div>
        <Link href="/" className="flex flex-col w-[250px]  items-start gap-1">
          <h1 className="font-bold text-xl tracking-wide text-white">
            Social Media
          </h1>
          <p className="text-white/50 text-left ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            harum, obcaecati architecto incidunt, quidem mollitia culpa maiores
          </p>
          <div className="media">
            {media.map((med, i) => (
              <div className="" key={i}></div>
            ))}
          </div>
        </Link>
      </div>
      <div className="">
        <p>©️ All Rights Reserve</p>
      </div>
    </footer>
  );
}

export default Footer