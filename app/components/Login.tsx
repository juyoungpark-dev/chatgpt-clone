'use client'

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react"
import Image from "next/image"

function Login() {
  return (
    <div className="bg-[#11A37F]
      h-screen flex flex-col items-center
      justify-center text-center">
      <Image //chatGPT logo
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
      />
      <button className="text-white font-bold text-3xl animate-pulse"
        onClick={() => signIn('google')}
      >
        Sign In to use ChatGPT
      </button>
    </div>
  )

}

export default Login