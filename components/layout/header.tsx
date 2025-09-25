
import React from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Header() {
  return (
    <header
      className="fixed top-4 right-4 z-50 bg-transparent shadow-none flex justify-end items-center w-full pointer-events-none"
      style={{ height: 0 }}
    >
      <div className="pointer-events-auto">
        <ThemeToggle />
      </div>
    </header>
  );
}