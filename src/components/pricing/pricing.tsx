import { useState } from "react";
import "./pricing.css";
import { plans } from "./constants";

export function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const selectMonthlyBilling = () => {
    setBilling("monthly");
  };

  const selectYearlyBilling = () => {
    setBilling("yearly");
  };

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
        <div
          className="pricing__switch"
          role="group"
          aria-label="Период оплаты"
        >
          <button
            className={
              billing === "monthly"
                ? "pricing__switch-button pricing__switch-button--active"
                : "pricing__switch-button"
            }
            onClick={selectMonthlyBilling}
          >
            Ежемесячно
          </button>
          <button
            className={
              billing === "yearly"
                ? "pricing__switch-button pricing__switch-button--active"
                : "pricing__switch-button"
            }
            onClick={selectYearlyBilling}
          >
            Годовой <span>−20%</span>
          </button>
        </div>
      </div>

      <div className="pricing__plans">
        {plans.map((plan) => (
          <article
            className={
              plan.featured
                ? "pricing__plan pricing__plan--featured"
                : "pricing__plan"
            }
            key={plan.name}
          >
            <div>
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
            </div>
            <div className="pricing__price">
              <strong>{plan[billing]}</strong>
              {plan[billing] !== "По запросу" && (
                <span>{billing === "monthly" ? "₽ / месяц" : "₽ / месяц при оплате за год"}</span>
              )}
            </div>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>
            <a
              className={
                plan.featured
                  ? "pricing__cta pricing__cta--dark"
                  : "pricing__cta"
              }
              href="#contact"
            >
              Выбрать план
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
