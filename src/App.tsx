import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Notes from "./pages/Notes";
import PreviousPapers from "./pages/PreviousPapers";
import Syllabus from "./pages/Syllabus";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/previous-papers" element={<PreviousPapers />} />
      <Route path="/syllabus" element={<Syllabus />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
