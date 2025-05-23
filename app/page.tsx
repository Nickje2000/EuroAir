import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Plane } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Welcome to European Airlines
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The premier Roblox airline experience. Fly with us to destinations across Europe with our professional
                  and dedicated flight crew.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/about">
                    <Button>Learn More</Button>
                  </Link>
                  <Link href="https://discord.gg/3jaEpjhk9r" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">Join our Discord</Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="European Airlines Aircraft"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Destinations</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore Europe with our extensive network of virtual flights to major cities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {["London", "Paris", "Berlin", "Rome", "Madrid", "Amsterdam"].map((city) => (
                <div
                  key={city}
                  className="flex flex-col items-center space-y-2 border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="h-40 w-full bg-gray-100 rounded-md flex items-center justify-center">
                    <Plane className="h-12 w-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">{city}</h3>
                  <p className="text-sm text-gray-500">Regular flights available</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Fly With Us?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  European Airlines offers the best virtual flying experience on Roblox.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
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
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Professional Staff</h3>
                <p className="text-gray-500">Our flight crew is trained to provide the best service.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
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
                    <circle cx="12" cy="12" r="10" />
                    <path d="m16 10-4 4-4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Realistic Experience</h3>
                <p className="text-gray-500">Enjoy realistic aircraft and airport environments.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Safe Flights</h3>
                <p className="text-gray-500">Safety is our top priority on every flight.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
