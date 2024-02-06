import { Container } from "./styles";
import { Link, useParams, Navigate } from "react-router-dom";
import { pages } from '../../modules/pagesPath';

export function Categories() {
  const { category } = useParams();
  const categoryProjects = pages[category];

  // Check if the category exists
  if (!categoryProjects) {
    return <Navigate to="/404" replace />;
  }

  const projects = Object.values(categoryProjects);

  if (projects.length === 0) {
    return <Navigate to="/404" replace />;
  }


  return (
    <Container>
      {projects.map((project) => (
        <div key={project.slug} className="image-container">
          <Link to={`/${category}/${project.slug}`}>
            <div className="overlay-container">
              <img src={project.cover} alt={project.title} className="images" />
              <div className="overlay">{project.title}</div>
            </div>
          </Link>
        </div>
      ))}
    </Container>
  );
}
