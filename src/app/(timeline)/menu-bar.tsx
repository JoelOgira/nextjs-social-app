import { Button } from "@/components/ui/button";
import { Bell, Bookmark, Home, Mail, MessageSquareIcon } from "lucide-react";
import Link from "next/link";

interface MenuBarProps {
  className?: string;
}

export const menuRoutes = [
  {
    icon: Home,
    title: "Home",
    href: "/",
    style: "hidden lg:inline",
  },
  {
    icon: Bell,
    title: "Notifications",
    href: "/notifications",
    style: "hidden lg:inline",
  },
  {
    icon: Mail,
    title: "Messages",
    href: "/messages",
    style: "hidden lg:inline",
  },
  {
    icon: Bookmark,
    title: "Bookmarks",
    href: "/bookmarks",
    style: "hidden lg:inline",
  },
];

export default function MenuBar({ className }: MenuBarProps) {
  return (
    <div className={className}>
      {(menuRoutes || []).map((route) => (
        <Button
          key={route.href}
          variant="ghost"
          className="flex items-center justify-start gap-3"
          title={route.title}
          asChild
        >
          <Link href={route.href}>
            <route.icon className="size-5" />
            <span className={route.style}>{route.title}</span>
          </Link>
        </Button>
      ))}
    </div>
  );
}
