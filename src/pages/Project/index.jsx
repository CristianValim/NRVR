import { Container } from './styles';
import { motion } from 'framer-motion';
import { pages } from '../../modules/pagesPath';
import { useParams, Navigate } from 'react-router-dom';
import { useHeaderLogic } from '../../hooks/useHeaderLogic';

export function Project() {
  const { slug } = useParams();
  const { margin } = useHeaderLogic();

  const projectsBySlug = Object.fromEntries(
    Object.values(pages)
      .flatMap(Object.values)
      .map((project) => [project.slug, project]),
  );

  const findProjectBySlug = (slug) => projectsBySlug[slug] || null;
  const project = findProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/404" />;
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
    video,
  } = project;

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <img
        className="cover"
        src={cover}
        alt="Capa do projeto"
        style={
          margin
            ? { paddingInline: '5%', transition: '1s' }
            : { paddingInline: '0', transition: '1s' }}
      />

      <div className="flex-wrap">
       
        <div className="description">
          <h1>{title}</h1>

          <div className="info">
              <p>{adtext}</p>
              <br />
              {description}
          </div>

          <div className="detail">
          <h2>
            <span>{location ? 'localização' : 'conceito'}</span>{' '}
            {location ? location : concept}
          </h2>
          <h2>
            <span>
              {builtArea
                ? 'área construída'
                : 'projeto e modelagem tridimensional'}
            </span>{' '}
            {builtArea ? builtArea : modelage}
          </h2>
          <h2>
            <span>{year ? 'ano' : 'execução'}</span> {year ? year : execution}
          </h2>
          <h2>
            <span>{team ? 'equipe' : ''}</span> {team}
          </h2>
          </div>
        
        </div>

      </div>

      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={project.title}
          />
        ))}
      </div>

      <div className="figures">
        {figures.map((figure, index) => (
          <img
            key={index}
            src={figure}
            alt={project.title}
          />
        ))}

        <iframe
          src={video}
          style={{ display: video ? 'block' : 'none' }}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
    </Container>
  );
}
