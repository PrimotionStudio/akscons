import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-green-800 to-green-900 text-white h-[50vh] md:h-[80vh] py-16 flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            APPLICATION FOR ADMISSION INTO AKSCONS 2025/2026 SESSION ONGOING
          </h2>
          <p className="text-xl md:text-2xl mb-8">2 Departments</p>
          <div className="space-y-4">
            <Button
              variant="default"
              size="lg"
              className="text-lg bg-red-600 text-white hover:bg-red-700"
            >
              <Link href="#">APPLY NOW!</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Welcome Section */}
          <div className="lg:col-span-2">
            <section id="headquarters" className="mt-16">
              <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
                AICSNS MAIN CAMPUS
              </h2>

              <div className="bg-white rounded-lg shadow-md p-6 mb-12">
                <p className="text-gray-700 leading-relaxed mb-6">
                  The Akwa Ibom State College of Nursing Sciences (AICSNS)
                  serves as the administrative and academic hub of our
                  institution. It is led by the Provost, who oversees all
                  academic and strategic initiatives. Dr. E. Udo is the current
                  Provost of AICSNS. Assisting the Provost in academic affairs
                  is the Deputy Provost (Academic), Prof. I. Nkereuwem, while
                  the Deputy Provost (Admin & Finance), Mr. T. Akpan, manages
                  administrative and financial operations. The Registrar, Mrs.
                  J. Etim, the Bursar, Mr. C. Inyang, and the entire
                  administrative staff ensure smooth day-to-day functioning of
                  the College.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-4">
                      OUR VISION
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      To be the leading nursing institution in Nigeria,
                      recognized for excellence in teaching, research, and
                      community health initiatives.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-4">
                      OUR MISSION
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      To educate, train, and empower nurses who will provide
                      holistic, compassionate, and evidence-based care to
                      individuals, families, and communities.
                    </p>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">
                    OUR HISTORY
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Akwa Ibom State College of Nursing Sciences was
                    established in 2010 by the Government of Akwa Ibom State to
                    produce well-trained, compassionate nursing professionals.
                    Since its inception, AICSNS has grown from a single Basic
                    Nursing Science program to multiple post-basic and
                    continuing education courses, serving thousands of students
                    across Akwa Ibom State.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Over the years, AICSNS has expanded its academic
                    departments, launched a state-of-the-art Simulation & Skills
                    Laboratory, and forged partnerships with major hospitals in
                    Uyo for clinical placements. Our graduates are known for
                    their professional competence and commitment to community
                    health.
                  </p>
                </div>
              </div>

              {/* Registrar Section */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
                  REGISTRAR
                </h3>
                <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl mx-auto">
                  <div className="w-48 h-48 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-800">
                        MRS. J. ETIM
                      </div>
                      <div className="text-sm text-green-600">REGISTRAR</div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Mrs. J. Etim holds a Master’s degree in Public
                      Administration and has served as Registrar at AICSNS since
                      January 2023. She oversees student admissions, records
                      management, and compliance with regulatory bodies. Under
                      her leadership, the college’s admission process has become
                      fully digitized and more efficient.
                    </p>
                    <Button
                      variant="link"
                      className="text-green-600 p-0 h-auto"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>

              {/* Principal Officers */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
                  PRINCIPAL OFFICERS OF AICSNS
                </h3>
                <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">PROVOST</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">
                      DEPUTY PROVOST (ACADEMIC)
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">
                      DEPUTY PROVOST (ADMIN & FINANCE)
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">REGISTRAR</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">BURSAR</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">
                      ACADEMIC DEAN, NURSING SCIENCES
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">DEAN, BASIC SCIENCES</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">
                      DIRECTOR, CLINICAL PLACEMENT
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Recent News Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-green-800">
                  Recent News
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-medium text-gray-900 mb-2">
                    AICSNS Hosts Simulation Workshop for Enhanced Clinical
                    Skills
                  </h3>
                  <p className="text-sm text-gray-600">June 3, 2025</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-medium text-gray-900 mb-2">
                    AICSNS Receives New Laboratory Equipment for Physiology
                    Department
                  </h3>
                  <p className="text-sm text-gray-600">June 3, 2025</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">
                    Faculty Publishes Groundbreaking Research on Community
                    Health Nursing
                  </h3>
                  <p className="text-sm text-gray-600">May 28, 2025</p>
                </div>
                <div className="pt-4 text-right">
                  <Link
                    href="/news"
                    className="text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    View all news →
                  </Link>
                </div>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-1 gap-8 mb-16">
              {/* Deputy Provost Card */}
              <Card className="overflow-hidden">
                <div className="bg-green-50 p-4 text-center">
                  <div className="w-40 h-40 mx-auto bg-green-100 rounded-full overflow-hidden mb-4">
                    <div className="w-full h-full flex items-center justify-center bg-blue-600 text-white">
                      <span className="text-4xl font-bold">DPA</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-green-800">
                    PROF I. NKEREUWEM
                  </h3>
                  <p className="text-sm text-green-600">
                    DEPUTY PROVOST (ACADEMIC)
                  </p>
                  <p className="text-xs text-green-600">AICSNS</p>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 text-sm mb-4">
                    Prof. I. Nkereuwem holds an M.Sc. in Public Health and has
                    been Deputy Provost (Academic) since August 2023. She leads
                    curriculum development and faculty research initiatives in
                    community health and nursing education.
                  </p>
                  <Button variant="link" className="text-green-600 p-0 h-auto">
                    Read more
                  </Button>
                </CardContent>
              </Card>

              {/* Provost Card */}
              <Card className="overflow-hidden">
                <div className="bg-green-50 p-4 text-center">
                  <div className="w-40 h-40 mx-auto bg-green-100 rounded-full overflow-hidden mb-4">
                    <div className="w-full h-full flex items-center justify-center bg-red-600 text-white">
                      <span className="text-4xl font-bold">PRV</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-green-800">DR. E. UDO</h3>
                  <p className="text-sm text-green-600">PROVOST</p>
                  <p className="text-xs text-green-600">AICSNS</p>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 text-sm mb-4">
                    Dr. E. Udo earned a Ph.D. in Nursing and has served as
                    Provost since January 2024. Under her leadership, AICSNS
                    launched its Simulation & Skills Laboratory and strengthened
                    clinical partnerships with teaching hospitals across Akwa
                    Ibom State.
                  </p>
                  <Button variant="link" className="text-green-600 p-0 h-auto">
                    Read more
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
