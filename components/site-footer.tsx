import Link from "next/link"
import { Plane } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 px-4 md:px-6">
        <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Plane className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">European Airlines</span>
          </Link>
          <p className="text-sm text-gray-500">
            The premier Roblox airline experience. Fly with us to destinations across Europe.
          </p>
        </div>
        <div className="md:ml-auto grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Navigation</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/" className="hover:underline text-gray-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline text-gray-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline text-gray-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline text-gray-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Social</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  href="https://discord.gg/3jaEpjhk9r"
                  className="hover:underline text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.roblox.com/communities/34748880/European-Airlines-RBLX#!/about"
                  className="hover:underline text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Roblox Group
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} European Airlines. All rights reserved.</p>
          <p className="text-xs text-gray-500">This is a fan-made website for a Roblox airline group.</p>
        </div>
      </div>
    </footer>
  )
}
