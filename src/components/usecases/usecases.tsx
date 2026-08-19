import { useState } from "react";
import "./usecases.css";

const useCases = {
  Маркетинг: {
    label: "Маркетинг",
    title: "Кампания из одной идеи",
    description:
      "Соберите лендинг, баннеры, изображения и презентацию из одного брифа — с единым оффером и фирменным стилем.",
    items: ["Лендинг для запуска", "Баннеры под площадки", "Материалы для рассылки"],
  },
  Дизайн: {
    label: "Дизайн",
    title: "Больше времени на систему",
    description:
      "Команда работает с готовыми правилами бренда, а дизайнеры контролируют систему вместо ручной сборки типовых материалов.",
    items: ["Контроль компонентов", "Проверка визуального языка", "Быстрые варианты кампании"],
  },
  Продажи: {
    label: "Продажи",
    title: "Материалы для каждой встречи",
    description:
      "Адаптируйте презентации и клиентские предложения под сегмент, задачу и этап сделки — без очереди к дизайнерам.",
    items: ["Клиентские презентации", "Отраслевые лендинги", "Персональные предложения"],
  },
  Продукт: {
    label: "Продукт",
    title: "Единый язык продукта",
    description:
      "Превращайте описание новой функции в понятные маркетинговые материалы, сохраняя связь между продуктом и брендом.",
    items: ["Анонс обновления", "Объясняющий лендинг", "Материалы для базы знаний"],
  },
};

export function Usecases() {
  const [activeCase, setActiveCase] = useState<keyof typeof useCases>(
    "Маркетинг",
  );
  const currentCase = useCases[activeCase];

  return (
    <section className="section section-shell usecases" id="usecases">
      <div className="usecases__heading">
        <h2>Один бренд — разные сценарии работы</h2>
        <p className="section-intro">
          Снэпбилд помогает командам двигаться быстрее без потери качества и
          контроля над стилем.
        </p>
      </div>

      <div className="usecases__tabs" role="tablist" aria-label="Сценарии команд">
        {Object.entries(useCases).map(([key, value]) => (
          <button
            className={
              activeCase === key
                ? "usecases__tab usecases__tab--active"
                : "usecases__tab"
            }
            key={key}
            onClick={() => setActiveCase(key as keyof typeof useCases)}
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
