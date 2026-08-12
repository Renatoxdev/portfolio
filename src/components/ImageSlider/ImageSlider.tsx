import { useState } from "react";
import styles from "./ImageSlider.module.css";

type ImageSliderProps = {
  images: string[];
  alt: string;
  emptyLabel: string;
  variant?: "card" | "detail";
};

export default function ImageSlider({ images, alt, emptyLabel, variant = "card" }: ImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasImages = images.length > 0;
  const hasMultipleImages = images.length > 1;
  const shouldShowControls = variant === "detail" && hasMultipleImages;

  function showPrevious() {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  }

  function showNext() {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  }

  if (!hasImages) {
    return (
      <div className={`${styles.slider} ${styles[variant]}`}>
        <div className={styles.placeholder}>
          <span className={styles.placeholderText}>{emptyLabel}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.slider} ${styles[variant]}`}>
      <div
        className={styles.track}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        aria-live="polite"
      >
        {images.map((src, index) => (
          <div className={styles.slide} key={src}>
            <img className={styles.img} src={src} alt={index === activeIndex ? alt : ""} />
          </div>
        ))}
      </div>

      {shouldShowControls ? (
        <>
          <button className={`${styles.nav} ${styles.previous}`} type="button" onClick={showPrevious} aria-label="Imagem anterior">
            &lt;
          </button>
          <button className={`${styles.nav} ${styles.next}`} type="button" onClick={showNext} aria-label="Proxima imagem">
            &gt;
          </button>

          <div className={styles.dots} aria-label={`${activeIndex + 1} de ${images.length}`}>
            {images.map((src, index) => (
              <button
                className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ""}`}
                type="button"
                key={src}
                onClick={() => setActiveIndex(index)}
                aria-label={`Ir para imagem ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
