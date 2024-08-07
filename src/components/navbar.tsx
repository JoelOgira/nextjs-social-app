"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import Link from "next/link";
import UserButton from "./user-button";
import SearchField from "./search-field";
import { useMedia } from "react-use";

export default function Navbar() {
  const isMobile = useMedia("(max-width: 400px)", false);

  return (
    <header className="sticky inset-x-0 top-0 z-[40] w-full bg-card py-3 backdrop-blur-lg transition-all">
      {isMobile ? (
        <MaxWidthWrapper className="flex flex-col space-y-3">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold text-primary sm:text-2xl"
            >
              bugbook
            </Link>
            <UserButton />
          </div>
          <div className="w-full">
            <SearchField />
          </div>
        </MaxWidthWrapper>
      ) : (
        <MaxWidthWrapper className="flex flex-wrap items-center justify-between">
          <div className="flex flex-wrap items-center space-x-3">
            <Link
              href="/"
              className="text-xl font-bold text-primary sm:text-2xl"
            >
              bugbook
            </Link>
            <SearchField />
          </div>
          <UserButton />
        </MaxWidthWrapper>
      )}
    </header>
  );
}
