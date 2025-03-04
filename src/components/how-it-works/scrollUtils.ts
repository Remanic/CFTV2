
export const scrollToSection = (sectionId: string) => {
  const targetElement = document.getElementById(sectionId.replace('#', ''));
  if (targetElement) {
    const headerOffset = 80; // Adjust this value based on your header height
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
