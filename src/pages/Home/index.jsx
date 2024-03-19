import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { pages } from '../../modules/pagesPath';

import { Container } from './styles';
import { motion, AnimatePresence } from 'framer-motion';
import { useHeaderLogic } from '../../hooks/useHeaderLogic';

export function Home() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(1);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const categories = Object.keys(pages);
  const projects = Object.values(pages);
  const linkRef = useRef(null);

  const { isMobile } = useHeaderLogic();

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentProjectIndex + 1 < getCurrentCategory().length) {
        setCurrentProjectIndex(currentProjectIndex + 1);
      } else {
        setCurrentCategoryIndex(
          (prevIndex) => (prevIndex + 1) % categories.length,
        );
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

  function handleScroll() {
    if (!isMobile && linkRef.current) {
      linkRef.current.click();
    }
  }

  return (
    <Container>
      <AnimatePresence>
        {isMobile &&
          projects.map((category) =>
            Object.values(category).map((project) => (
              <motion.div
                key={project.slug}
                className="image-container">
                <motion.div
                  className="overlay-container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}>
                  <Link
                    to={`/${categories[currentCategoryIndex]}/${project.slug}`}>
                    <img
                      src={project.cover}
                      alt={project.title}
                      className="images"
                    />
                    <div className="overlay">{project.title}</div>
                  </Link>
                </motion.div>
              </motion.div>
            )),
          )}

        {!isMobile && (
          <motion.div
            key={getCurrentProject().slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}>
            <Link
              to={`/${categories[currentCategoryIndex]}/${
                getCurrentProject().slug
              }`}
              ref={linkRef}>
              <img
                src={getCurrentProject().cover}
                alt={getCurrentProject().title}
              />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
}
