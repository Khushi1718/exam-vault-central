import { Link, useLocation } from "react-router-dom";
import { BookOpen, FileText, ClipboardList, PenTool, Mail, Home } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/notes", label: "Notes", icon: BookOpen },
  { to: "/previous-papers", label: "Previous Papers", icon: FileText },
  { to: "/syllabus", label: "Syllabus", icon: ClipboardList },
  { to: "/blog", label: "Blog", icon: PenTool },
  { to: "/contact", label: "Contact", icon: Mail },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border px-6 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <BookOpen className="w-6 h-6" />
            ExamVault
          </Link>
          <nav className="flex gap-1">
            {navLinks.map(l => {
              const isActive = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <l.icon className="w-4 h-4" />
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-card border-t border-border px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-primary font-bold">
            <BookOpen className="w-5 h-5" />
            ExamVault
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 ExamVault. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
