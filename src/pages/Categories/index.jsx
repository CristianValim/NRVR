import { Container } from './styles';
import { Link, useParams, Navigate } from 'react-router-dom';
import { pages } from '../../modules/pagesPath';

import { motion, AnimatePresence } from 'framer-motion';

export function Categories() {
  const { category } = useParams();
  const categoryProjects = pages[category];

  if (!categoryProjects) {
    return (
      <Navigate
        to="/404"
        replace
      />
    );
  }

  const projects = Object.values(categoryProjects);

  if (projects.length === 0) {
    return (
      <Navigate
        to="/404"
        replace
      />
    );
  }

  return (
    <Container>
      <AnimatePresence>
        {projects.map((project) => (
          <div
            key={project.slug}
            className="image-container">
            <Link to={`/${category}/${project.slug}`}>
              <motion.div
                className="overlay-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}>
                <img
                  src={project.cover}
                  alt={project.title}
                  className="images"
                />
                <div className="overlay">{project.title}</div>
              </motion.div>
            </Link>
          </div>
        ))}
      </AnimatePresence>
    </Container>
  );
}
