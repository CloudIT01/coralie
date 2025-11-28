import { useNavigate, useLocation } from 'react-router-dom';

export function useScrollToSection() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/?section=${id}`);
    }
  };

  return scrollToSection;
}
