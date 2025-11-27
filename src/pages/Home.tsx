import HeroSection from '../components/HeroSection';
import ProblemSolution from '../components/ProblemSolution';
import AboutCoralie from '../components/AboutCoralie';
import Services from '../components/Services';
import BlogPreview from '../components/BlogPreview';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSolution />
      <AboutCoralie />
      <Services />
      <BlogPreview />
    </>
  );
}
