import LinkNext from "next/link";
import { ReactNode } from "react";

export type LinkType = { href: string; children: ReactNode };

export const Link = ({ href, children }: LinkType) => (
  <LinkNext
    className="font-bold text-emerald-500 hover:cursor-pointer hover:underline"
    href={href}
  >
    {children}
  </LinkNext>
);
