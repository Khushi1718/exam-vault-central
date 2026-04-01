import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/notes", label: "Notes" },
  { to: "/previous-papers", label: "Previous Papers" },
  { to: "/syllabus", label: "Syllabus" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-background text-foreground">
    <header className="border-b border-border px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary">ExamVault</Link>
        <nav className="flex gap-4">
          {navLinks.map(l => (
            <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
    <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-10">{children}</main>
    <footer className="border-t border-border px-6 py-6 text-center text-sm text-muted-foreground">
      © 2026 ExamVault. All rights reserved.
    </footer>
  </div>
);

export default Layout;
