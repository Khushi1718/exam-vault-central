import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText, ClipboardList, PenTool } from "lucide-react";
import heroImg from "@/assets/hero-study.jpg";

const features = [
  { icon: BookOpen, title: "Notes", desc: "Comprehensive study notes for every subject.", to: "/notes" },
  { icon: FileText, title: "Previous Papers", desc: "Past exam papers from 2018–2025.", to: "/previous-papers" },
  { icon: ClipboardList, title: "Syllabus", desc: "Latest curriculum and syllabus info.", to: "/syllabus" },
  { icon: PenTool, title: "Blog", desc: "Study tips and exam strategies.", to: "/blog" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <img src={heroImg} alt="Students studying" className="w-full h-[400px] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to ExamVault</h1>
          <p className="text-lg md:text-xl max-w-xl opacity-90">
            Your one-stop destination for free university exam resources — notes, papers, syllabus and more.
          </p>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-center mb-10">What We Offer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(f => (
          <Link key={f.to} to={f.to}>
            <Card className="group hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>

    {/* About */}
    <section className="bg-muted">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Why ExamVault?</h2>
          <p className="text-muted-foreground mb-4">
            Whether you're preparing for semester exams or competitive tests, our collection of resources is designed to make your study process easier.
          </p>
          <p className="text-muted-foreground">
            Browse through our categories and find exactly what you need. All resources are free and regularly updated.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
