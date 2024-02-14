import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { pages } from '../../modules/pagesPath';

import { Container } from './styles'

export function Home() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(1);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [imageFadeClass, setImageFadeClass] = useState("fade-out"); // Estado para controlar a classe de transição
  const categories = Object.keys(pages);
  const projects = Object.values(pages);
  const linkRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentProjectIndex + 1 < getCurrentCategory().length) {
        setCurrentProjectIndex(currentProjectIndex + 1);
      } else {
        setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
        setCurrentProjectIndex(0);
      }
      
      // Altera a classe para 'fade-in' após a mudança do projeto
      setImageFadeClass("fade-in");

      // Define um tempo para voltar a classe para 'fade-out'
      setTimeout(() => {
        setImageFadeClass("fade-out");
      }, 1000); // Tempo para a transição terminar
    }, 4000);
     
    return () => clearInterval(timer);
  }, [currentCategoryIndex, currentProjectIndex, categories.length]);

const getCurrentCategory = () => {
    return Object.values(projects[currentCategoryIndex]);
  };

const getCurrentProject = () => {
    return getCurrentCategory()[currentProjectIndex];
};

function handleWheel() {
    if (linkRef.current) {
      linkRef.current.click();
    }
  } 

    return (
        <Container>
            <Link to={`/${categories[currentCategoryIndex]}/${getCurrentProject().slug}`} ref={linkRef}>
                <img src={getCurrentProject().cover} alt={getCurrentProject().title} onWheel={handleWheel} className={imageFadeClass} />
            </Link>
        </Container>
    )
}