"use client";

import { db } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import NewChat from "@/app/components/NewChat";
import ChatRow from "@/app/components/ChatRow";

function Sidebar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session && query(
      collection(db, "users", session?.user?.email!, "chats"), // path: /users/{user email}/chats -> it will return the array of chats
      orderBy("createdAt", "asc")
    ) 
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <NewChat />
        <div>
          {/* ModelSelection */}
        </div>
        {/* Map through the ChatRows */}
        {chats?.docs.map(chat => (
          <ChatRow key={chat.id} id={chat.id} />
        ))}
      </div>
      {session &&
        // eslint-disable-next-line @next/next/no-img-element
        <img
          onClick={() => signOut()}
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
          src={session?.user?.image! || ""}
          alt="Profile pic"
        />
      }
    </div>
  );
}

export default Sidebar;