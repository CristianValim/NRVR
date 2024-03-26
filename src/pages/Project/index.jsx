import { useState, useRef } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import { Container } from './styles';
import { motion } from 'framer-motion';
import { pages } from '../../modules/pagesPath';
import { useParams, Navigate } from 'react-router-dom';
import { useHeaderLogic } from '../../hooks/useHeaderLogic';
import { FaLongArrowAltUp } from 'react-icons/fa';

export function Project() {
  const { slug } = useParams();
  const { margin } = useHeaderLogic();
  const galleryRef = useRef(null);
  const figuresRef = useRef(null);

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

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [currentGalleryItems, setCurrentGalleryItems] = useState([]);

  const openFullscreen = (index, items) => {
    setCurrentImageIndex(index);
    setCurrentGalleryItems(items);
    setIsGalleryOpen(true);
  };

  const closeFullscreen = () => {
    setCurrentImageIndex(null);
    setCurrentGalleryItems([]);
    setIsGalleryOpen(false);
  };

  const handleMainImageClick = (index) => {
    openFullscreen(
      index,
      images.map((image) => ({ original: image })),
    );
  };

  const handleFigureClick = (index) => {
    openFullscreen(
      index,
      figures.map((figure) => ({ original: figure })),
    );
  };

  const handleClickOutside = (event) => {
    if (
      isGalleryOpen &&
      !galleryRef.current.contains(event.target) &&
      !figuresRef.current.contains(event.target)
    ) {
      closeFullscreen();
    }
  };

  const handleFullscreenOverlayClick = (event) => {
    if (
      isGalleryOpen &&
      event.target.closest('.fullscreen-overlay') === event.target
    ) {
      closeFullscreen();
    }
  };

  const handleGoUpClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container
      ref={galleryRef}
      as={motion.div}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClickOutside}>
      <img
        className="cover"
        src={cover}
        alt="Capa do projeto"
        style={
          margin
            ? { paddingInline: '5%', transition: '1s' }
            : { paddingInline: '0', transition: '1s' }
        }
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

      <div
        className="gallery"
        ref={galleryRef}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={project.title}
            onClick={() => handleMainImageClick(index)}
          />
        ))}
      </div>

      {isGalleryOpen && (
        <div
          className="fullscreen-overlay"
          onClick={(event) => handleFullscreenOverlayClick(event)}>
          <ImageGallery
            items={currentGalleryItems}
            showPlayButton={false}
            showFullscreenButton={false}
            showThumbnails={false}
            startIndex={currentImageIndex}
          />
        </div>
      )}

      <div
        className="figures"
        ref={figuresRef}>
        {figures.map((figure, index) => (
          <img
            key={index}
            src={figure}
            alt={project.title}
            onClick={() => handleFigureClick(index)}
          />
        ))}

        <iframe
          src={video}
          style={{ display: video ? 'block' : 'none' }}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      </div>

      <button
        className="goUp"
        onClick={handleGoUpClick}>
        ↑
      </button>
    </Container>
  );
}
