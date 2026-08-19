import "./comparison.css";

const comparisonRows = [
  [
    "Time-to-market",
    "5 минут",
    "30–60 мин",
    "2–3 дня",
    "1–2 дня",
    "3–5 недель",
  ],
  [
    "Дизайн-система",
    "100% точность",
    "Частично, из Figma",
    "Шаблоны",
    "Вручную в коде",
    "Вручную, через ревью",
  ],
  ["Визуальный редактор", "✓ + ИИ", "—", "✓", "—", "—"],
  [
    "Требуемые навыки",
    "Нет",
    "Промпты + код",
    "Дизайн",
    "Разработка",
    "Полная команда",
  ],
];

export function Comparison() {
  return (
    <section className="section section-shell comparison">
      <h2>Почему команды выбирают Снэпбилд</h2>
      <p className="section-intro">
        Вы получаете не редактор, а результат: готовые маркетинговые материалы
        без проблем с настройками
      </p>
      <div className="comparison__table">
        <div>Особенности</div>
        <div className="comparison__highlight">снэпбилд</div>
        <div>Claude + Figma MCP</div>
        <div>No-code платформы</div>
        <div>Cursor</div>
        <div>Традиционный</div>
        {comparisonRows.flat().map((cell, index) => (
          <div
            className={index % 6 === 1 ? "comparison__highlight" : ""}
            key={`${cell}-${index}`}
          >
            {cell}
          </div>
        ))}
      </div>
    </section>
  );
}
