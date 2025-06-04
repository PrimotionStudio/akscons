import { Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function AcademyLibraryPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-green-800 to-green-900 text-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
            <nav className="text-sm">
              <Link href="/" className="hover:text-green-200 transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-green-200">About Us</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Welcome Message */}
        <section className="mb-12">
          <Card className="overflow-hidden">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-2xl text-green-800">
                WELCOME MESSAGE
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/4 flex-shrink-0">
                  <div className="bg-green-100 p-4 rounded-lg text-center">
                    <div className="w-32 h-32 mx-auto bg-green-600 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-16 w-16 text-white" />
                    </div>
                    <h3 className="font-semibold text-green-800">
                      Prof. Jane Doe
                    </h3>
                    <p className="text-sm text-green-600">Provost</p>
                  </div>
                </div>
                <div className="lg:w-3/4">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    “At Akwa Ibom State College of Nursing Sciences, we are
                    committed to producing nursing professionals who excel in
                    clinical competence, critical thinking, and ethical
                    practice. Since our founding in 2017, we have nurtured
                    generations of nurses dedicated to serving communities not
                    only within Akwa Ibom State but across Nigeria and beyond.”
                  </p>
                  {/* <p className="text-gray-700 leading-relaxed mb-4"></p> */}
                  <p className="text-gray-700 leading-relaxed">
                    We are happy to shape tomorrow’s healthcare leaders.
                  </p>
                  <div className="mt-6">
                    <p className="font-semibold text-green-800">
                      Prof. Jane Doe, PhD, MLS, CLN
                    </p>
                    <p className="text-sm text-gray-600">Provost</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-800">
                About Us
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                Akwa Ibom State College of Nursing Sciences (AICSNS) was
                established in [Founding Year] by the Government of Akwa Ibom
                State to train highly skilled nurses for the State and nation.
                Our mandate is to deliver quality nursing education,
                practice-based research, and community outreach.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4"></p>
              <p className="text-gray-700 leading-relaxed"></p>
            </CardContent>
          </Card>
        </section>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-green-800">MISSION</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To educate, train, and empower nurses who will provide holistic,
                compassionate, and evidence-based care to individuals, families,
                and communities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-green-800">VISION</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To be the leading nursing institution in Nigeria, recognized for
                excellence in teaching, research, and community health
                initiatives.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-green-800">
                OBJECTIVES
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>
                  • Compassion: We care deeply for patients’ physical,
                  emotional, and spiritual needs.
                </li>
                <li>
                  • Integrity: We uphold ethical standards in teaching, service,
                  and practice.
                </li>
                <li>
                  • Excellence: We strive for continuous improvement in
                  education, research, and clinical performance.
                </li>
                <li>
                  • Collaboration: We partner with stakeholders—health
                  facilities, government agencies, and communities—to foster
                  better health outcomes.
                </li>
                <li>
                  • Innovation: We encourage creativity and adaptability in
                  nursing education and healthcare delivery.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
