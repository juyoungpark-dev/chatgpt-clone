'use client'

import { useSession, signOut } from "next-auth/react";
import Image from "next/image"
import NewChat from "@/app/components/NewChat"

function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <NewChat />
        <div>
          {/* ModelSelection */}
        </div>
        {/* Map through the ChatRows */}
      </div>
      {session &&
        // eslint-disable-next-line @next/next/no-img-element
        <img
          onClick={() => signOut()}
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
          src={session.user?.image! || ''}
          alt="Profile pic"
        />
      }
    </div>
  )
}

export default Sidebar