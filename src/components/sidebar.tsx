"use client";

import { AuthContext } from "@/contexts/AuthContext";
import Image from "next/image";
import { useContext } from "react";
import { IoMdExit } from "react-icons/io";
import { Button } from "./button";

export const SideBar = () => {
  const { user, signOut } = useContext(AuthContext);

  return (
    <div className="w-1/3 h-screen border">
      <header className="w-full h-16 py-2.5 px-4 border flex justify-between">
        <Image
          src="https://media-gru1-1.cdn.whatsapp.net/v/t61.24694-24/322277619_3888636541391517_7417361457660780934_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaICYBhSwoiP_vSTJyzEk8NBHOWIkyHACrcJGWw0L7ryHC&oe=668C245C&_nc_sid=e6ed6c&_nc_cat=108"
          alt="Avatar"
          width={40}
          height={40}
          style={{
            borderRadius: "100%",
          }}
        />
        <Button type="button" onClick={() => signOut()}>
          <IoMdExit />
          Sair
        </Button>
      </header>
      <div>
        <div>
          <div></div>
          <></>
        </div>
      </div>
    </div>
  );
};
