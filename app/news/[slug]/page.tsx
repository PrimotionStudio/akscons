import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Calendar,
  Facebook,
  Share2,
  Twitter,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NewsArticlePage() {
  const relatedPosts = [
    {
      title:
        "AICSNS Receives New Laboratory Equipment for Physiology Department",
      date: "June 03, 2025",
      category: "News",
    },
    {
      title:
        "Faculty Publishes Groundbreaking Research on Community Health Nursing",
      date: "May 28, 2025",
      category: "News",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Article Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </Link>

          {/* Article Meta */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>June 03, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>by Ikenna Divine Chukwu</span>
            </div>
            <div className="flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              <span>Share:</span>
              <div className="flex gap-2">
                <Facebook className="h-4 w-4 cursor-pointer hover:text-blue-600" />
                <Twitter className="h-4 w-4 cursor-pointer hover:text-sky-500" />
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                PRESS RELEASE
              </h3>
              <p className="text-green-700">
                AICSNS Hosts Simulation Workshop for Enhanced Clinical Skills
                <br />
                <strong>To hold on 14 June 2025</strong>
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Akwa Ibom State College of Nursing Sciences (AICSNS) is
              pleased to announce a week-long Simulation Workshop aimed at
              improving clinical competencies among student nurses. The
              workshop, scheduled to begin on 14 June 2025, will take place in
              the new Simulation & Skills Laboratory on campus.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              All participating students are required to register online via the
              college portal by 10 June 2025. During the workshop, attendees
              will engage in high-fidelity simulations that replicate real-world
              scenarios, including emergency care procedures, maternal-child
              health interventions, and psychiatric nursing assessments.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Instructors from the Department of Nursing Education & Research
              will guide small groups through each scenario, ensuring
              personalized feedback. Simulation facilitators will include Dr. E.
              Udo and Prof. (Mrs.) I. Nkereuwem, who will demonstrate best
              practices in documentation, critical decision-making, and patient
              communication.
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>
                Registration closes on 10 June 2025; late registrations will not
                be accepted.
              </li>
              <li>
                Participants must bring their AICSNS ID card, lab coat, and two
                passport photographs.
              </li>
              <li>
                The workshop fee of ₦5,000 covers simulation materials, workshop
                manual, and a completion certificate.
              </li>
              <li>
                Daily sessions run from 9:00 AM to 4:00 PM, with breaks for
                lunch and tea.
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              We encourage all Basic Nursing Science and Post-Basic Midwifery
              students to take advantage of this opportunity. Spaces are limited
              and will be allocated on a first-come, first-served basis. Upon
              successful completion, participants will receive a certificate
              endorsed by the provost’s office.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              For more information, contact the Simulation & Skills Laboratory
              Coordinator at simlab@aicsns.edu.ng or call +234 (0) 123 456 789.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-sm text-gray-600 mb-2">SIGNED</p>
              <p className="font-semibold">PROVOST, AICSNS</p>
            </div>

            {/* Press Release Image */}
            <div className="my-8">
              <Image
                src="https://picsum.photos/600/400?random=9"
                alt="Press Release - AICSNS Hosts Simulation Workshop for Enhanced Clinical Skills"
                width={600}
                height={400}
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Share Section */}
            <div className="border-t border-gray-200 pt-6 mt-8">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Share:</span>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-600 border-blue-600 hover:bg-blue-50"
                  >
                    <Facebook className="h-4 w-4 mr-2" />
                    Facebook
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-sky-500 border-sky-500 hover:bg-sky-50"
                  >
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Related posts
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-green-600 text-white">
                      {post.category}
                    </Badge>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      <Link
                        href="#"
                        className="hover:text-green-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
