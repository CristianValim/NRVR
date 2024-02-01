import { Container } from "./styles";
import { Link, useParams, Navigate } from "react-router-dom";
import { pages } from '../../modules/pagesPath';

export function Categories() {
  const { category } = useParams();
  const projects = Object.values(pages[category]);
  
  if (projects.length === 1) {
    const projectSlug = projects[0].slug;
    return <Navigate to={`/${category}/${projectSlug}`} replace />;
  }

  return (
    <Container>
      {projects.map((project) => (
        <div key={project.slug}>
          <Link to={`/${category}/${project.slug}`}>
          <img src={project.cover} alt={project.title} />
          </Link>
        </div>
      ))}
    </Container>
  );
}
