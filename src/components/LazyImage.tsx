import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, placeholder, ...props }) => {
  const [imageSrc, setImageSrc] = useState<string>(placeholder || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E');
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;
    let didCancel = false;

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting || entry.intersectionRatio > 0) {
                if (!didCancel) {
                  setImageSrc(src);
                  observer.unobserve(imageRef);
                }
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '50px',
          }
        );
        observer.observe(imageRef);
      } else {
        // Fallback for browsers without IntersectionObserver support
        setImageSrc(src);
      }
    }

    return () => {
      didCancel = true;
      if (observer && observer.unobserve && imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      onLoad={handleLoad}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
};

export default LazyImage;
