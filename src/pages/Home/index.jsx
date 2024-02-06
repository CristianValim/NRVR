import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { pages } from '../../modules/pagesPath';

import { Container } from './styles'

export function Home() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(1);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
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
            <Link id="" to={`/${categories[currentCategoryIndex]}/${getCurrentProject().slug}`} ref={linkRef}>
                <img src={getCurrentProject().cover} alt={getCurrentProject().title} onWheel={handleWheel}/>
            </Link>
        </Container>
    )
}