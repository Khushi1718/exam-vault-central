import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList, ChevronRight } from "lucide-react";

const departments = [
  { name: "Computer Science", courses: 12 },
  { name: "Mechanical Engineering", courses: 10 },
  { name: "Electrical Engineering", courses: 11 },
  { name: "Civil Engineering", courses: 9 },
  { name: "Business Administration", courses: 8 },
  { name: "Mathematics", courses: 7 },
];

const Syllabus = () => (
  <Layout>
    <section className="bg-gradient-to-br from-primary to-primary/70 text-primary-foreground px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Syllabus</h1>
        <p className="text-lg opacity-90">Latest curriculum for your university courses.</p>
      </div>
    </section>

    <section className="max-w-6xl mx-auto px-6 py-12">
      <p className="text-muted-foreground mb-8 max-w-2xl">
        We regularly update our syllabus section to match the latest curriculum changes. Select a department below to see available courses.
      </p>
      <div className="space-y-3">
        {departments.map(d => (
          <Card key={d.name} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ClipboardList className="w-5 h-5 text-primary" />
                <span className="font-medium">{d.name}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{d.courses} courses</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </Layout>
);

export default Syllabus;
