import featureCompliance from "../../assets/images/feature-compliance.webp";
import featureConfiguration from "../../assets/images/feature-configuration.webp";
import featureDesignSystem from "../../assets/images/feature-design-system.webp";
import "./features.css";

const featureCards = [
  [
    featureDesignSystem,
    "Дизайн-система — ядро платформы",
    "Ваши компоненты, цвета и шрифты — единственный источник стиля",
  ],
  [
    featureConfiguration,
    "Гибкая конфигурация",
    "Правила бренда задаются один раз — работают в каждой генерации",
  ],
  [
    featureCompliance,
    "Соответствие по умолчанию",
    "AI не может нарушить бренд: материалы создаются строго по вашим правилам",
  ],
];

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
