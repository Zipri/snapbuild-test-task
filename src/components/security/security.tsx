import securityCloud from "../../assets/images/security-cloud.webp";
import securityModels from "../../assets/images/security-models.webp";
import securityStack from "../../assets/images/security-stack.webp";
import "./security.css";

const securityCards = [
  [
    securityModels,
    "Только одобренные модели",
    "Работаем только с российскими и локализованными моделями, без экспортных ограничений",
  ],
  [
    securityCloud,
    "Ваш контур, ваша юрисдикция",
    "Развертывание в частном облаке с полным соответствием 152-ФЗ и внутренним ИБ-требованиям",
  ],
  [
    securityStack,
    "Собственный AI-стек",
    "Вы сами определяете модели, хранилища, доступы и цепочки валидации",
  ],
];

export function Security() {
  return (
    <section className="section section-shell" id="security">
      <h2>Безопасность без компромиссов</h2>
      <div className="security-grid">
        {securityCards.map(([image, title, text]) => (
          <article className="security-card" key={title}>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
