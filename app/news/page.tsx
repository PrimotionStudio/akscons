import { MessageCircle, User, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "AICSNS Hosts Simulation Workshop for Enhanced Clinical Skills",
      excerpt:
        "The Akwa Ibom State College of Nursing Sciences (AICSNS) organized a week-long simulation workshop aimed at improving clinical competencies among student nurses. Participants engaged in hands-on scenarios using high-fidelity mannequins to practice emergency care procedures and critical decision-making.",
      image: "https://picsum.photos/400/300?random=1",
      date: "June 03, 2025",
      author: "AICSNS News Desk",
      comments: 0,
      category: "News",
      slug: "aicsns-hosts-simulation-workshop-for-enhanced-clinical-skills",
    },
    {
      id: 2,
      title:
        "AICSNS Receives New Laboratory Equipment for Physiology Department",
      excerpt:
        "AICSNS officially commissioned state-of-the-art physiology lab equipment, including digital microscopes and simulation models. The new resources will support foundational science courses and provide more interactive learning experiences for Basic Nursing students.",
      image: "https://picsum.photos/400/300?random=2",
      date: "June 03, 2025",
      author: "AICSNS News Desk",
      comments: 0,
      category: "News",
      slug: "aicsns-receives-new-laboratory-equipment-for-physiology-department",
    },
    {
      id: 3,
      title:
        "Faculty Publishes Groundbreaking Research on Community Health Nursing",
      excerpt:
        "Dr. I. Nkereuwem of the Department of Community Health at AICSNS has published a study examining effective community mobilization strategies for vaccination campaigns in rural Akwa Ibom. The paper, featured in the Nigerian Journal of Public Health, highlights key interventions that reduced vaccine hesitancy by 45%.",
      image: "https://picsum.photos/400/300?random=3",
      date: "May 28, 2025",
      author: "AICSNS News Desk",
      comments: 0,
      category: "News",
      slug: "faculty-publishes-groundbreaking-research-on-community-health-nursing",
    },
    {
      id: 4,
      title:
        "AICSNS Students Participate in International Nurses Week Outreach",
      excerpt:
        "In celebration of International Nurses Week, AICSNS student volunteers provided free health screenings and educational talks in Ikot Ekpene. Over 200 community members received blood pressure checks and malaria tests, reinforcing the college’s commitment to public health promotion.",
      image: "https://picsum.photos/400/300?random=4",
      date: "May 15, 2025",
      author: "AICSNS News Desk",
      comments: 0,
      category: "News",
      slug: "aicsns-students-participate-in-international-nurses-week-outreach",
    },
    {
      id: 5,
      title: "AICSNS Graduates Achieve Top Scores in National Nursing Exams",
      excerpt:
        "Five graduates from the Class of 2025 at AICSNS secured positions among the top 10 scorers in the National Nursing Licensure Examination. The college held a special recognition ceremony to honor their achievements and inspire current students.",
      image: "https://picsum.photos/400/300?random=5",
      date: "January 18, 2025",
      author: "AICSNS News Desk",
      comments: 0,
      category: "News",
      slug: "aicsns-graduates-achieve-top-scores-in-national-nursing-exams",
    },
    {
      id: 6,
      title: "AICSNS Alumni Lead Rural Health Outreach in Cross River State",
      excerpt:
        "A group of AICSNS alumni visited Obubra LGA in Cross River State to conduct health education workshops and free immunization clinics. Their efforts reached over 500 residents, focusing on maternal-child health and malaria prevention.",
      image: "https://picsum.photos/400/300?random=6",
      date: "June 04, 2024",
      author: "AICSNS News Desk",
      comments: 0,
      category: "News",
      slug: "aicsns-alumni-lead-rural-health-outreach-in-cross-river-state",
    },
    {
      id: 7,
      title: "Applications Open for AICSNS Basic Nursing Science Program",
      excerpt:
        "The Akwa Ibom State College of Nursing Sciences has opened online applications for the 2024/2025 Basic Nursing Science intake. Prospective candidates must submit WAEC/NECO results and complete the online screening form before the July 15 deadline.",
      image: "https://picsum.photos/400/300?random=7",
      date: "June 10, 2024",
      author: "AICSNS News Desk",
      comments: 0,
      category: "News",
      slug: "applications-open-for-aicsns-basic-nursing-science-program",
    },
    {
      id: 8,
      title:
        "AICSNS Collaborates with Uyo Teaching Hospital for Clinical Training",
      excerpt:
        "Faculty and students from AICSNS paid a benchmarking visit to Uyo Teaching Hospital to strengthen clinical training partnerships. The collaboration will enable more hands-on rotations in critical care units and pediatrics for second- and third-year nursing students.",
      image: "https://picsum.photos/400/300?random=8",
      date: "June 05, 2024",
      author: "AICSNS News Desk",
      comments: 0,
      category: "News",
      slug: "aicsns-collaborates-with-uyo-teaching-hospital-for-clinical-training",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-900 text-white py-8 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold">News</h2>
            <nav className="text-sm">
              <Link href="/" className="hover:text-green-200 transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-green-200">News</span>
            </nav>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <Card
              key={article.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                  {article.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{article.comments}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  <Link
                    href={article.slug ? `/news/${article.slug}` : "#"}
                    className="hover:text-green-600 transition-colors"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User className="h-4 w-4" />
                    <span>by {article.author}</span>
                  </div>
                  <Link
                    href={article.slug ? `/news/${article.slug}` : "#"}
                    className="text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button
              variant="default"
              size="sm"
              className="bg-green-600 hover:bg-green-700"
            >
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
