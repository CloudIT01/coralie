import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProblemSolution from '../components/ProblemSolution';
import AboutCoralie from '../components/AboutCoralie';
import Services from '../components/Services';
import BlogPreview from '../components/BlogPreview';

export default function Home() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [searchParams]);

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
