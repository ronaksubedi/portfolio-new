
export const initScrollAnimation = () => {
  const animatedElements = document.querySelectorAll('.animate-fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
      }
    });
  }, { threshold: 0.1 });
  
  animatedElements.forEach((element) => {
    observer.observe(element);
  });
};

export const addAnimationDelay = (index: number, baseDelay: number = 100): string => {
  const delay = baseDelay * (index + 1);
  return `animation-delay: ${delay}ms;`;
};
