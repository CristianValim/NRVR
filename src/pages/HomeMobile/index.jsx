import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pages } from '../../modules/pagesPath';

import { Container } from './styles';
import { motion, AnimatePresence } from 'framer-motion';

export function HomeMobile() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(1);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const categories = Object.keys(pages);
  const projects = Object.values(pages);

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

  return (
    <Container>
      <AnimatePresence>
        {projects.map((category) =>
          Object.values(category).map((project) => (
            <motion.div key={project.slug} className="image-container">
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
                    loading="lazy"
                    className="images"
                  />
                  <div className="overlay">{project.title}</div>
                </Link>
              </motion.div>
            </motion.div>
          )),
        )}
      </AnimatePresence>
    </Container>
  );
}
