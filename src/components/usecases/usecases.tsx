import { type MouseEvent, useState } from "react";
import "./usecases.css";
import { useCases } from "./constants";

export function Usecases() {
  const [activeCase, setActiveCase] =
    useState<keyof typeof useCases>("Маркетинг");
  const currentCase = useCases[activeCase];

  const handleCaseClick = (event: MouseEvent<HTMLButtonElement>) => {
    const nextCase = event.currentTarget.dataset.case as keyof typeof useCases;

    setActiveCase(nextCase);
  };

  return (
    <section className="section section-shell usecases" id="usecases">
      <div className="usecases__heading">
        <h2>Один бренд — разные сценарии работы</h2>
        <p className="section-intro">
          Снэпбилд помогает командам двигаться быстрее без потери качества и
          контроля над стилем.
        </p>
      </div>

      <div
        className="usecases__tabs"
        role="tablist"
        aria-label="Сценарии команд"
      >
        {Object.entries(useCases).map(([key, value]) => (
          <button
            className={
              activeCase === key
                ? "usecases__tab usecases__tab--active"
                : "usecases__tab"
            }
            key={key}
            data-case={key}
            onClick={handleCaseClick}
            role="tab"
            aria-selected={activeCase === key}
          >
            {value.label}
          </button>
        ))}
      </div>

      <div className="usecases__content">
        <div className="usecases__copy">
          <h3>{currentCase.title}</h3>
          <p>{currentCase.description}</p>
          <a className="usecases__link" href="#contact">
            Обсудить сценарий <span>↗</span>
          </a>
        </div>
        <div className="usecases__visual" aria-label={currentCase.title}>
          <div className="usecases__visual-top">
            <span>снэпбилд</span>
            <span>{currentCase.label}</span>
          </div>
          <div className="usecases__visual-title">{currentCase.title}</div>
          <div className="usecases__list">
            {currentCase.items.map((item, index) => (
              <div className="usecases__list-item" key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
                <i>↗</i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
