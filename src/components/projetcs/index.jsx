import { Container } from "./styles";
import { pages } from '../../modules/pagesPath';
import { useParams } from "react-router-dom";

export function Project () {
    const { slug } = useParams();
    // PROBLEMA TA AQUI NOS PROJETO 
    const projectsBySlug = Object.fromEntries(
      Object.values(pages).flatMap(Object.values).map((project) => [project.slug, project])
    );
  
    const findProjectBySlug = (slug) => projectsBySlug[slug] || null;
  
    const project = findProjectBySlug(slug);
  
    if (!project) {
      console.log(project, slug, projectsBySlug)
      return <p>Projeto não encontrado</p>;
    }
  
    const {
      title,
      location,
      builtArea,
      year,
      adtext,
      description,
      cover,
      images,
      figures,
    } = project;

  return (
    <Container>
      <img className="cover" src={cover} alt="Capa do projeto" />

      <div className="flex-wrap">
          <div className="description"><h1>{title}</h1>
            <h2><span></span>{location}</h2>
            <h2><span></span>{builtArea}</h2>
            <h2><span></span>{year}</h2>
            <h2><span></span></h2>
      </div>  

          <div className="info">
            <p>{adtext}</p>
            <br/>
            <p>{description}</p>
          </div>
      </div>

      <div className="gallery">
        {images.map((image, index) => (
          <img key={index} src={image} alt={title} />
        ))}
      </div>

      <div className="figures">
        {figures.map((figure, index) => (
          <img key={index} src={figure} alt={title} />
        ))}
      </div>
    </Container>
  );
}