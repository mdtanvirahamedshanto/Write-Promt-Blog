"use client";

import { getProviders, signIn, singOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {
  const isUserLoggedIn = true;

  const [providers, setproviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() =>{
    const setproviders = async ()=>{
      const response = await getProviders();
      setproviders(response);
    }

    setproviders();
  },[])

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
        </Link>
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

            <Link href="/profile">
            <Image 
            src="/assets/images/logo.svg"
            width={37}
            height={37}
            className="rounded-full"
            alt="Profile"
            />
            </Link>
          </div>
        ) : (
          <div>
            {providers && Object.values(providers).map((provider)=>(
              <button
              type="button"
              key={provider.name}
              onClick={()=> signIn(provider.id)}
              className="black_btn"
              >
                Sing In
              </button>
            ))}
          </div>
        )}
        </div>

        {/* mobile navigation  */}

        <div className="sm:hidden flex relative">
          {isUserLoggedIn ? (
            <div className="flex">
              <Image 
            src="/assets/images/logo.svg"
            width={37}
            height={37}
            className="rounded-full"
            alt="Profile"
            onClick={()=>setToggleDropdown((prev)=> !prev)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                href="/profile"
                className="dropdown_link"
                onClick={()=> setToggleDropdown(false)}
                >
                My Profile
                </Link>
                <Link
                href="/create-prompt"
                className="dropdown_link"
                onClick={()=> setToggleDropdown(false)}
                >
                Create Promot
                </Link>

                <button
                type="button"
                onClick={()=>{ setToggleDropdown(false);
                  singOut();
                }}
                className="mt-5 w-full black_btn"
                >
                  Sing Out
                </button>
              </div>
            )}

            </div>
          ):(
            <div>
            {providers && Object.values(providers).map((provider)=>(
              <button
              type="button"
              key={provider.name}
              onClick={()=> signIn(provider.id)}
              className="black_btn"
              >
                Sing In
              </button>
            ))}
          </div>
          )}
        </div>
    </nav>
  )
}

export default Nav