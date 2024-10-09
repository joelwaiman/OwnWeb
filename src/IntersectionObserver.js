import { useEffect } from 'react';

export const useIntersectionObserver = (setActiveSection) => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Actualiza la sección activa
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.6, // Cambia según cuándo quieras que detecte la sección
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setActiveSection]);
};
