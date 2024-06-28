"use client";

import { SideBar } from "@/components";

type ChatLayoutType = {
  children: React.ReactNode;
};

export default function ChatLayout({ children }: ChatLayoutType) {
  return (
    <main className="w-full h-screen flex">
      <SideBar />
      {children}
    </main>
  );
}
