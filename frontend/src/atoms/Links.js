
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";


export const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className}  rounded relative group lg:text-light lg:dark:text-dark`}>
      {title}
      <span
        className={`
              inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
              ${router.asPath === href ? "w-full" : " w-0"} lg:bg-light lg:dark:bg-dark
              `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () =>{
    toggle();
    router.push(href) 
  }

  return (
    <button className={`${className}  rounded relative group lg:text-dark lg:dark:text-dark`} onClick={handleClick}>
      {title}
      <span
        className={`
              inline-block h-[1px] absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 bg-dark
              ${router.asPath === href ? "w-full" : " w-0"} 
              `}
      >
        &nbsp;
      </span>
    </button>
  );
};