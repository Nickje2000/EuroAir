import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Team</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore career opportunities with European Airlines and become part of our virtual aviation family.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Why Join Us?</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At European Airlines, we're passionate about creating the best virtual airline experience on Roblox.
                  When you join our team, you'll:
                </p>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Be part of a friendly and supportive community</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Develop your skills in a virtual airline environment</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Participate in special events and training sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Advance through our ranks based on your performance</span>
                  </li>
                </ul>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="European Airlines Team"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Available Positions</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're currently recruiting for the following roles:
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">Pilot</h3>
                <p className="mt-2 text-gray-500">
                  Join our flight crew and operate our virtual aircraft on routes across Europe.
                </p>
                <div className="mt-4">
                  <h4 className="font-medium">Requirements:</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-500">
                    <li>Experience with Roblox flight simulators</li>
                    <li>Good communication skills</li>
                    <li>Ability to follow procedures</li>
                    <li>Minimum age: 13+</li>
                  </ul>
                </div>
                <Link href="https://discord.gg/3jaEpjhk9r" target="_blank" rel="noopener noreferrer">
                  <Button className="mt-4 w-full">Apply Now</Button>
                </Link>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">Cabin Crew</h3>
                <p className="mt-2 text-gray-500">
                  Provide excellent service to our virtual passengers and ensure their comfort and safety.
                </p>
                <div className="mt-4">
                  <h4 className="font-medium">Requirements:</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-500">
                    <li>Friendly and helpful attitude</li>
                    <li>Good communication skills</li>
                    <li>Ability to work as part of a team</li>
                    <li>Minimum age: 13+</li>
                  </ul>
                </div>
                <Link href="https://discord.gg/3jaEpjhk9r" target="_blank" rel="noopener noreferrer">
                  <Button className="mt-4 w-full">Apply Now</Button>
                </Link>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">Ground Staff</h3>
                <p className="mt-2 text-gray-500">
                  Handle check-in, boarding, and other ground operations at our virtual airports.
                </p>
                <div className="mt-4">
                  <h4 className="font-medium">Requirements:</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-500">
                    <li>Attention to detail</li>
                    <li>Good communication skills</li>
                    <li>Basic understanding of airport operations</li>
                    <li>Minimum age: 13+</li>
                  </ul>
                </div>
                <Link href="https://discord.gg/3jaEpjhk9r" target="_blank" rel="noopener noreferrer">
                  <Button className="mt-4 w-full">Apply Now</Button>
                </Link>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">Air Traffic Controller</h3>
                <p className="mt-2 text-gray-500">
                  Manage aircraft movements and ensure safe operations at our virtual airports.
                </p>
                <div className="mt-4">
                  <h4 className="font-medium">Requirements:</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-500">
                    <li>Experience with ATC in Roblox</li>
                    <li>Excellent communication skills</li>
                    <li>Ability to work under pressure</li>
                    <li>Minimum age: 14+</li>
                  </ul>
                </div>
                <Link href="https://discord.gg/3jaEpjhk9r" target="_blank" rel="noopener noreferrer">
                  <Button className="mt-4 w-full">Apply Now</Button>
                </Link>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">Training Instructor</h3>
                <p className="mt-2 text-gray-500">
                  Train new recruits and help them develop their skills to meet our high standards.
                </p>
                <div className="mt-4">
                  <h4 className="font-medium">Requirements:</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-500">
                    <li>Extensive experience in your field</li>
                    <li>Patience and teaching ability</li>
                    <li>Good communication skills</li>
                    <li>Minimum age: 15+</li>
                  </ul>
                </div>
                <Link href="https://discord.gg/3jaEpjhk9r" target="_blank" rel="noopener noreferrer">
                  <Button className="mt-4 w-full">Apply Now</Button>
                </Link>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">Social Media Manager</h3>
                <p className="mt-2 text-gray-500">
                  Manage our social media presence and help promote our virtual airline.
                </p>
                <div className="mt-4">
                  <h4 className="font-medium">Requirements:</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-500">
                    <li>Experience with social media platforms</li>
                    <li>Creative content creation skills</li>
                    <li>Good communication skills</li>
                    <li>Minimum age: 14+</li>
                  </ul>
                </div>
                <Link href="https://discord.gg/3jaEpjhk9r" target="_blank" rel="noopener noreferrer">
                  <Button className="mt-4 w-full">Apply Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Application Process</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here's how to join our team:
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Join Our Discord</h3>
                <p className="text-gray-500">
                  Join our Discord server to connect with our community and learn more about available positions.
                </p>
                <Link
                  href="https://discord.gg/3jaEpjhk9r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Join Discord
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">Submit Application</h3>
                <p className="text-gray-500">
                  Fill out our application form with your information and the position you're interested in.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Interview & Training</h3>
                <p className="text-gray-500">
                  If selected, you'll participate in an interview and training program specific to your role.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="https://discord.gg/3jaEpjhk9r" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2">
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
                    className="h-5 w-5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m16 12-4 4-4-4" />
                    <path d="M12 8v8" />
                  </svg>
                  Apply Now on Discord
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
