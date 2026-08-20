import "./features.css";
import { featureCards } from "./constants";

export function Features() {
  return (
    <section className="section section-shell" id="features">
      <h2>Одна платформа — весь маркетинг</h2>
      <p className="section-intro">
        Сайты, изображения, видео, баннеры и презентации — из одной идеи, в
        вашем стиле
      </p>
      <div className="feature-grid">
        {featureCards.map(([image, title, text]) => (
          <article className="image-card" key={title}>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
