import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSolution from './components/ProblemSolution';
import AboutCoralie from './components/AboutCoralie';
import Services from './components/Services';
import BlogPreview from './components/BlogPreview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProblemSolution />
        <AboutCoralie />
        <Services />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  );
}

export default App;
