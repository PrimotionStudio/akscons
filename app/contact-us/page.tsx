import {
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-green-800 to-green-900 text-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
            <nav className="text-sm">
              <Link href="/" className="hover:text-green-200 transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-green-200">Contact Us</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-2xl text-green-800">
                  Get In Touch
                </CardTitle>
                <p className="text-gray-600">
                  Send us a message and we&apos;ll respond as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-700"
                      >
                        Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-sm font-medium text-gray-700"
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Subject of your message"
                      className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-700"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Your message here..."
                      rows={6}
                      className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full md:w-auto bg-green-900 hover:bg-green-700 text-white px-8 py-3 text-lg font-medium"
                  >
                    SUBMIT NOW
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Postal Address */}
            <Card className="shadow-lg">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-xl text-green-800 flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Postal Address
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-2 text-gray-700">
                  <p className="font-medium">
                    Akwa Ibom State College of Nursing Sciences
                  </p>
                  <p>School of Nursing Road</p>
                  <p>Ikot Ekpene, Akwa Ibom State</p>
                  <p>533101,</p>
                  <p>Nigeria</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="shadow-lg">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-xl text-green-800">
                  All Enquiries
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">Tel:</p>
                    <Link
                      href="tel:+234901-2345-678"
                      className="font-medium text-gray-900 hover:text-gray-700 transition-colors"
                    >
                      0901-2345-678
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">Email:</p>
                    <Link
                      href="mailto:enquiries@nda.edu.ng"
                      className="font-medium text-gray-900 hover:text-gray-700 transition-colors"
                    >
                      enquiries@nda.edu.ng
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="shadow-lg">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-xl text-green-800 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday:</span>
                    <span className="font-medium text-red-600">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-lg">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-xl text-green-800">
                  Follow Us
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="p-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="p-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
