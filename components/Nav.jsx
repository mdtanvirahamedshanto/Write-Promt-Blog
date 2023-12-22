"use client";

import Image from "next/image";
import Link from "next/link";
//import { useState } from "react"
import { singOut } from "next-auth/react";
const Nav = () => {
  const isUserLoggedIn = true;

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image 
        src="/assets/images/logo.svg"
        alt="Promts xyz logo"
        width={30}
        height={30}
        className="object-contain"
        />
        <p className="logo_text">Promts XYZ</p>

        {/* mobile navigation  */}

        <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
            Create Post
            </Link>

            <button type="button" onClick={singOut} className="outline_btn">
              Sing Out
            </button>
          </div>
        ) : (
          <div>

          </div>
        )}
        </div>
      </Link>
    </nav>
  )
}

export default Nav