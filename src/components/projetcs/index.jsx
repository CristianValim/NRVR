import { Container } from "./styles";
import { pages } from '../../modules/pagesPath';
import { useParams } from "react-router-dom";

export function Project () {
    const { slug } = useParams();

    const projectsBySlug = Object.fromEntries(
      Object.values(pages).flatMap(Object.values).map((project) => [project.slug, project])
    );

    console.log("projectsBySlug: ", projectsBySlug);

    const findProjectBySlug = (slug) => projectsBySlug[slug] || null;

    const project = findProjectBySlug(slug);

    console.log("project: ", project);

    if (!project) {
      console.log(project, slug, projectsBySlug)
      return <p>Projeto não encontrado</p>;
    }

    const {
      title,
      location,
      builtArea,
      year,
      team,
      concept,
      modelage,
      execution,
      adtext,
      description,
      cover,
      images,
      figures,
    } = project;

    console.log("images: ", project.cover, project.images, project.figures);

    return (
      <Container>
        <img className="cover" src={cover} alt="Capa do projeto" />
  
        <div className="flex-wrap">
            <div className="description"><h1>{title}</h1>
              <h2><span>{location ? "localização" : "conceito"}</span> {location ? location : concept}</h2>
              <h2><span>{builtArea ? "área construída" : "projeto e modelagem tridimensional"}</span> {builtArea ? builtArea : modelage}</h2>
              <h2><span>{year ? "ano" : "execução"}</span> {year ? year : execution}</h2>
              <h2><span>{team ? "equipe" : ""}</span> {team}</h2>
        </div>  
  
            <div className="info">
              <p>{adtext}</p>
              <br/>
              <p>{description}</p>
            </div>
        </div>
  
        <div className="gallery">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Foto ${index + 1}`} />
          ))}
        </div>
  
        <div className="figures">
          {figures.map((figure, index) => (
            <img key={index} src={figure} alt={`Figura ${index + 1}`} />
          ))}
        </div>
      </Container>
    );
}