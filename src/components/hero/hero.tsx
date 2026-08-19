import heroInterface from "../../assets/images/hero-interface.webp";
import "./hero.css";

export function Hero() {
  return (
    <section className="hero section-shell">
      <div className="hero__content">
        <h1>
          Платформа, где все создается в рамках вашего бренда и дизайн-системы
        </h1>
        <p>
          Подключите дизайн-систему к Снэпбилду, чтобы каждый участник команды
          мог создавать профессиональные материалы в фирменном стиле за минуты,
          а не дни.
        </p>
        <a className="button button--light" href="#contact">
          <span>Начать сейчас</span>
        </a>
      </div>
      <div className="hero__interface">
        <img src={heroInterface} alt="Интерфейс платформы снэпбилд" />
      </div>
    </section>
  );
}
