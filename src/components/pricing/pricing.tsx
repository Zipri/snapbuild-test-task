import { useState } from "react";
import "./pricing.css";

const plans = [
  {
    name: "Старт",
    description: "Для небольшой команды, которая запускает первые брендовые материалы.",
    monthly: "49 000",
    yearly: "39 000",
    features: ["До 5 пользователей", "Сайты и изображения", "Базовые бренд-правила"],
  },
  {
    name: "Команда",
    description: "Для маркетинга и дизайна, которым нужен единый производственный процесс.",
    monthly: "119 000",
    yearly: "95 000",
    features: ["До 25 пользователей", "Все форматы материалов", "Роли и согласование", "Приоритетная поддержка"],
    featured: true,
  },
  {
    name: "Контур",
    description: "Для компаний с требованиями к безопасности и собственной инфраструктуре.",
    monthly: "По запросу",
    yearly: "По запросу",
    features: ["Без ограничений по пользователям", "Частное облако", "Интеграции и API", "Выделенная команда"],
  },
];

export function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="pricing section-shell" id="pricing">
      <div className="pricing__header">
        <div>
          <h2>Подключение под задачи вашей команды</h2>
          <p>
            Начните с нужного сценария и масштабируйте платформу вместе с
            командой.
          </p>
        </div>
        <div className="pricing__switch" role="group" aria-label="Период оплаты">
          <button
            className={billing === "monthly" ? "pricing__switch-button pricing__switch-button--active" : "pricing__switch-button"}
            onClick={() => setBilling("monthly")}
          >
            Ежемесячно
          </button>
          <button
            className={billing === "yearly" ? "pricing__switch-button pricing__switch-button--active" : "pricing__switch-button"}
            onClick={() => setBilling("yearly")}
          >
            Годовой <span>−20%</span>
          </button>
        </div>
      </div>

      <div className="pricing__plans">
        {plans.map((plan) => (
          <article
            className={plan.featured ? "pricing__plan pricing__plan--featured" : "pricing__plan"}
            key={plan.name}
          >
            <div>
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
            </div>
            <div className="pricing__price">
              <strong>{plan[billing]}</strong>
              {plan[billing] !== "По запросу" && <span>₽ / месяц</span>}
            </div>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>
            <a className={plan.featured ? "pricing__cta pricing__cta--dark" : "pricing__cta"} href="#contact">
              Выбрать план
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
