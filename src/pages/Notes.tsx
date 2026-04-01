import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import bannerImg from "@/assets/notes-banner.jpg";

const subjects = [
  "Computer Science", "Mechanical Engineering", "Electrical Engineering",
  "Business Administration", "Civil Engineering", "Mathematics"
];

const Notes = () => (
  <Layout>
    <section className="relative overflow-hidden">
      <img src={bannerImg} alt="Study notes" className="w-full h-[280px] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-primary-foreground">
          <h1 className="text-4xl font-bold mb-2">Notes</h1>
          <p className="text-lg opacity-90">Comprehensive notes for various university subjects.</p>
        </div>
      </div>
    </section>

    <section className="max-w-6xl mx-auto px-6 py-12">
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Our notes are compiled from multiple sources and cover key topics for each course. More subjects will be added soon.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map(s => (
          <Card key={s} className="hover:shadow-md transition-shadow">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{s}</h3>
                <p className="text-sm text-muted-foreground">View notes →</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </Layout>
);

export default Notes;
