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
                HEADQUARTERS NIGERIAN DEFENCE ACADEMY
              </h2>

              <div className="bg-white rounded-lg shadow-md p-6 mb-12">
                <p className="text-gray-700 leading-relaxed mb-6">
                  This is the administrative hub of the NDA. It is headed by the
                  Commandant, who is responsible to the NDA Council, chaired by
                  the Minister of Defence. The present Commandant of NDA is
                  Major General AK Ibrahim. The Deputy Commandant assists the
                  Commandant in the implementation of general policies and
                  training. AVM A ABDULKADIR is the current Deputy Commandant
                  and Director of Studies. The Registrar, Assistant Registrar,
                  and Academy Staff are also part of this headquarters.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-4">
                      OUR VISION
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      The vision of the NDA is to produce officers with
                      broad-based training in both military and academic
                      subjects designed to serve as a foundation for the future
                      progressive development of officers of the Nigerian Armed
                      Forces.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-4">
                      OUR MISSION
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      The mission of NDA is to provide each officer cadet with
                      the knowledge, skills and values necessary to meet the
                      requirements of a military officer through military,
                      academic and character development.
                    </p>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">
                    OUR HISTORY
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Nigerian Defence Academy (NDA) was established on 5
                    February 1964 in response to the defence needs of
                    independent Nigeria to train officers for the Armed Forces
                    of Nigeria. Before then, the institution was known as the
                    Royal Military Forces Training College (RMFTC). After
                    independence in 1960, it became known as the Nigerian
                    Military Training College.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The role of the Academy is to provide each officer cadet
                    with knowledge, skills and values necessary to meet the
                    requirements of a military officer through military,
                    academic and character development. In essence, the NDA is
                    an institution where selected young able-bodied men and
                    women are groomed into well educated, courageous, virile and
                    reliable defenders.
                  </p>
                </div>
              </div>

              {/* Academy Adjutant */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
                  ACADEMY ADJUTANT
                </h3>
                <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl mx-auto">
                  <div className="w-48 h-48 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-800">
                        LT COL IG OCHIGBO
                      </div>
                      <div className="text-sm text-green-600">
                        ACADEMY ADJUTANT
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      LT COL Ochigbo Daniel Ochigbo was born on 25 October 1985
                      in Lagos and hails from Ado Local Government Area of Benue
                      State. He was commissioned into the Nigerian Army as a
                      Regular Combatant Commission as a member of 64 Regular
                      Course on 3 October 2009. In the rank of Lieutenant
                      Colonel, he was appointed Academy Adjutant effective 21
                      September 2020.
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
                  PRINCIPAL OFFICERS OF NIGERIAN DEFENCE ACADEMY
                </h3>
                <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">
                      DIRECTOR OF MILITARY TRAINING (DMT)
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">
                      CADET BRIGADE COMMANDER (CBC)
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">
                      DIRECTOR OF ADMINISTRATION (DOA)
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">
                      DIRECTOR OF COORDINATION (DOCORD)
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">
                      DIRECTOR OF LOGISTIC (DOL)
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">
                      DIRECTOR OF ICT (DICT)
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">
                      DIRECTOR OF FINANCE (DOF)
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">
                      DIRECTOR OF INFORMATION AND COMMUNICATION TECHNOLOGY
                      (DICT)
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
                    Nigerian Defence Academy Announces New Date for 77 Regular
                    Course Screening Test
                  </h3>
                  <p className="text-sm text-gray-600">June 3, 2025</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-medium text-gray-900 mb-2">
                    Honourable Minister of Defence Undertakes Official Visit to
                    Nigerian Defence Academy
                  </h3>
                  <p className="text-sm text-gray-600">June 3, 2025</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">
                    NDA Is Lucky to Have You as Commandant: Emir of Zazzau to
                    NDA Commandant
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
              <Card className="overflow-hidden">
                <div className="bg-green-50 p-4 text-center">
                  <div className="w-40 h-40 mx-auto bg-green-100 rounded-full overflow-hidden mb-4">
                    <div className="w-full h-full flex items-center justify-center bg-blue-600 text-white">
                      <span className="text-4xl font-bold">AVM</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-green-800">AVM A ABDULKADIR</h3>
                  <p className="text-sm text-green-600">DEPUTY COMMANDANT</p>
                  <p className="text-xs text-green-600">
                    NIGERIAN DEFENCE ACADEMY
                  </p>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 text-sm mb-4">
                    AVM A Abdulkadir was born on 20 April 1970. He holds a BSc
                    from Mach North Local Government Area of Adamawa. He was
                    enlisted into the Nigerian Defence Academy as a member of
                    the 39th Regular Course.
                  </p>
                  <Button variant="link" className="text-green-600 p-0 h-auto">
                    Read more
                  </Button>
                </CardContent>
              </Card>

              {/* Academy Provost */}
              <Card className="overflow-hidden">
                <div className="bg-green-50 p-4 text-center">
                  <div className="w-40 h-40 mx-auto bg-green-100 rounded-full overflow-hidden mb-4">
                    <div className="w-full h-full flex items-center justify-center bg-red-600 text-white">
                      <span className="text-4xl font-bold">PROF</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-green-800">PROF SA GARBA</h3>
                  <p className="text-sm text-green-600">ACADEMY PROVOST</p>
                  <p className="text-xs text-green-600">
                    NIGERIAN DEFENCE ACADEMY
                  </p>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 text-sm mb-4">
                    PROF SA GARBA BSc, MSc, PhD, FNCS, FBCS. He was born on 27
                    May 1965 in Hadejia, Jigawa State. He obtained his BSc, MSc
                    and PhD from Ahmadu Bello University, Zaria and Abubakar
                    Tafawa Balewa University.
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
