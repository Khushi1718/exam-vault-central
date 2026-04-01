import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import blogImg from "@/assets/blog-banner.jpg";

const posts = [
  { title: "How to Study Effectively for University Exams", tag: "Study Tips", date: "Mar 15, 2026" },
  { title: "Top 10 Time Management Tips for Students", tag: "Productivity", date: "Mar 8, 2026" },
  { title: "Understanding Exam Patterns and Question Types", tag: "Exam Prep", date: "Feb 28, 2026" },
  { title: "Best Resources for Engineering Students", tag: "Resources", date: "Feb 20, 2026" },
];

const Blog = () => (
  <Layout>
    <section className="relative overflow-hidden">
      <img src={blogImg} alt="Blog" className="w-full h-[280px] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-primary-foreground">
          <h1 className="text-4xl font-bold mb-2">Blog</h1>
          <p className="text-lg opacity-90">Study tips, exam strategies, and educational news.</p>
        </div>
      </div>
    </section>

    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map(p => (
          <Card key={p.title} className="hover:shadow-md transition-shadow cursor-pointer group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="secondary">{p.tag}</Badge>
                <span className="text-xs text-muted-foreground">{p.date}</span>
              </div>
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Click to read more about this topic.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </Layout>
);

export default Blog;
