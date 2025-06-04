import { AppSidebar } from "@/components/app-sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {
  ChevronDown,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import NextJsTopLoader from "nextjs-toploader";
import "./globals.css";
import BackToTop from "@/components/back-to-top";
import { Button } from "@/components/ui/button";
// import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akwa Ibom State College of Nursing Sciences",
  description: "Powered By Z1 Technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathname = usePathname();
  // const routeLength = pathname.split("/").length;
  // const activeRoute = pathname.split("/")[2] || "";
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextJsTopLoader color="#016630" />
        <SidebarProvider className="flex flex-col">
          <AppSidebar />
          <div className="w-screen relative">
            <div className="bg-green-900 text-white py-2 px-4">
              <div className="flex flex-row justify-between items-center w-full">
                {/* <SidebarTrigger className="lg:hidden" /> */}
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
                  <div className="flex items-center gap-4 mb-2 md:mb-0">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>Mon - Fri: 8:00 - 16:00</span>
                    </div>
                    {/* {routeLength} - {activeRoute} */}
                    <div className="flex items-center gap-2">
                      <Facebook className="h-4 w-4" />
                      <Twitter className="h-4 w-4" />
                      <Instagram className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link
                      href="#"
                      className="hover:text-green-200 transition-colors"
                    >
                      Webmail
                    </Link>
                    <Link
                      href="#"
                      className="hover:text-green-200 transition-colors"
                    >
                      Student Portal
                    </Link>
                    <Link
                      href="/contact-us"
                      className="hover:text-green-200 transition-colors"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <header className="bg-white shadow-sm border-b sticky top-0">
              <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/akscons.png"
                      alt="Akwa Ibom State College of Nursing Sciences"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                    <div>
                      <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                        Akwa Ibom State College of Nursing Sciences
                      </h1>
                      <p className="text-sm text-gray-600">Ikot Ekpene</p>
                    </div>
                  </div>

                  <div className="lg:flex justify-end container mx-auto px-4 hidden">
                    <div className="flex items-center justify-center md:justify-start gap-8 py-4 overflow-x-auto">
                      <Link
                        href="/"
                        className="text-gray-700 hover:text-green-600 font-medium pb-1 whitespace-nowrap"
                        // className="text-green-600 font-medium border-b-2 border-green-600 pb-1 whitespace-nowrap"
                      >
                        Home
                      </Link>

                      <Link
                        href="/about-us"
                        className="text-gray-700 hover:text-green-600 font-medium pb-1 whitespace-nowrap"
                      >
                        About Us
                      </Link>

                      <DropdownMenu>
                        <DropdownMenuTrigger className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap flex items-center gap-1">
                          Academics
                          <ChevronDown className="h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[800px] p-6">
                          <div className="grid grid-cols-2 gap-8">
                            <div>
                              <h3 className="font-semibold text-green-800 mb-3">
                                Departments (Academic Divisions)
                              </h3>
                              <div className="space-y-2">
                                <DropdownMenuItem>
                                  <Link href="#" className="w-full">
                                    Department of Nursing Sciences
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Link href="#" className="w-full">
                                    Department of Midwifery
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Link href="#" className="w-full">
                                    Department of Basic Medical Sciences
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Link href="#" className="w-full">
                                    Department of Nursing Education & Research
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Link href="#" className="w-full">
                                    Department of Public Health Administration
                                  </Link>
                                </DropdownMenuItem>
                              </div>
                            </div>
                            <div>
                              <h3 className="font-semibold text-green-800 mb-3">
                                Programs Offered
                              </h3>
                              <div className="space-y-2">
                                <DropdownMenuItem>
                                  <Link href="#" className="w-full">
                                    Basic Nursing Science (Pre-Basic Nursing
                                    Diploma)
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Link href="#" className="w-full">
                                    Post-Basic Midwifery (Professional Midwifery
                                    Diploma)
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Link href="#" className="w-full">
                                    Post-Basic Public Health Nursing
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Link href="#" className="w-full">
                                    Continuing Education & Short Courses
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Link href="#" className="w-full">
                                    Faculty of Management Science
                                  </Link>
                                </DropdownMenuItem>
                              </div>
                            </div>
                          </div>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      <Link
                        href="/news"
                        className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap"
                      >
                        News
                      </Link>

                      <DropdownMenu>
                        <DropdownMenuTrigger className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap flex items-center gap-1">
                          Our Campuses
                          <ChevronDown className="h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-96 p-4">
                          <div className="space-y-2">
                            <DropdownMenuItem>
                              <Link href="#" className="w-full">
                                Ikot Ekpene
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link href="#" className="w-full">
                                Lagos
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link href="#" className="w-full">
                                Kaduna
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link href="#" className="w-full">
                                Port Harcourt
                              </Link>
                            </DropdownMenuItem>
                          </div>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <Button
              size="icon"
              className="lg:hidden fixed top-12 right-3 z-50 rounded-full w-12 h-12 p-0 bg-white hover:bg-gray-200 transition-all duration-300 flex items-center justify-center"
              aria-label="Back to top"
              asChild
            >
              <SidebarTrigger className="h-6 w-6 text-green-900 p-5" />
            </Button>
            {children}

            <footer className="bg-gray-900 text-white py-12">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="font-bold text-lg mb-4">Our Links</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="/"
                          className="hover:text-green-400 transition-colors"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about-us"
                          className="hover:text-green-400 transition-colors"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact-us"
                          className="hover:text-green-400 transition-colors"
                        >
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/news"
                          className="hover:text-green-400 transition-colors"
                        >
                          News
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4">Departments</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="#"
                          className="hover:text-green-400 transition-colors"
                        >
                          Midwifery
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover:text-green-400 transition-colors"
                        >
                          Nursing
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4">Our Campuses</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="#"
                          className="hover:text-green-400 transition-colors"
                        >
                          Ikto Ekpene
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover:text-green-400 transition-colors"
                        >
                          Lagos
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover:text-green-400 transition-colors"
                        >
                          Kaduna
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover:text-green-400 transition-colors"
                        >
                          Port Harcourt
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4">Contact us</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                        <div>
                          <p>School of Nursing Road </p>
                          <p>Ikot Ekpene, Akwa Ibom State</p>
                          <p>533101, Nigeria.</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <Link
                          href="mailto:enquiries@akscons.edu.ng"
                          className="hover:text-green-400 transition-colors"
                        >
                          enquiries@akscons.edu.ng
                        </Link>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Social Networks</h4>
                        <div className="flex gap-3">
                          <Facebook className="h-5 w-5 hover:text-green-400 cursor-pointer transition-colors" />
                          <Twitter className="h-5 w-5 hover:text-green-400 cursor-pointer transition-colors" />
                          <Instagram className="h-5 w-5 hover:text-green-400 cursor-pointer transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
                  <p>
                    Copyright © {new Date().getFullYear()} Akwa Ibom State
                    College of Nursing Sciences, Ikot Ekpene
                  </p>
                  <p>
                    Made with &hearts; by{" "}
                    <Link target="_blank" href={"https://z1lms.com"}>
                      Z1 Technologies
                    </Link>
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </SidebarProvider>

        <BackToTop />
      </body>
    </html>
  );
}
