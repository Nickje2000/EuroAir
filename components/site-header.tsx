"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Plane } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Plane className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold">European Airlines</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className={`text-sm font-medium ${pathname === "/" ? "text-blue-600 underline underline-offset-4" : "hover:underline underline-offset-4"}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium ${pathname === "/about" ? "text-blue-600 underline underline-offset-4" : "hover:underline underline-offset-4"}`}
          >
            About Us
          </Link>
          <Link
            href="/careers"
            className={`text-sm font-medium ${pathname === "/careers" ? "text-blue-600 underline underline-offset-4" : "hover:underline underline-offset-4"}`}
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium ${pathname === "/contact" ? "text-blue-600 underline underline-offset-4" : "hover:underline underline-offset-4"}`}
          >
            Contact
          </Link>
          <Link
            href="https://discord.gg/3jaEpjhk9r"
            className="text-sm font-medium text-blue-600 hover:underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join our Discord
          </Link>
        </nav>
        <Button variant="outline" size="icon" className="md:hidden">
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
    </header>
  )
}
