import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import bannerImg from "@/assets/papers-banner.jpg";

const years = ["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018"];

const PreviousPapers = () => (
  <Layout>
    <section className="relative overflow-hidden">
      <img src={bannerImg} alt="Exam papers" className="w-full h-[280px] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-primary-foreground">
          <h1 className="text-4xl font-bold mb-2">Previous Papers</h1>
          <p className="text-lg opacity-90">Past year question papers from various universities.</p>
        </div>
      </div>
    </section>

    <section className="max-w-6xl mx-auto px-6 py-12">
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Practicing with past papers is one of the most effective ways to prepare for exams. Papers are organized by year and subject.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {years.map(y => (
          <Card key={y} className="hover:shadow-md transition-shadow cursor-pointer group">
            <CardContent className="p-6 flex flex-col items-center gap-2 text-center">
              <FileText className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg">{y}</h3>
              <p className="text-xs text-muted-foreground">View papers</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </Layout>
);

export default PreviousPapers;
