import "./roadmap.css";

const roadmapItems = [
  [
    "Сайты за 5 минут",
    "Генерация корпоративных сайтов по вашей дизайн-системе — 100% консистентность, без разработчиков",
    "Декабрь, 2025",
  ],
  [
    "Консистентные AI-иллюстрации",
    "Настраиваете фирменный стиль один раз — графика для каждой секции сайта в едином виде",
    "Январь, 2026",
  ],
  [
    "Дизайн-система из вашего сайта",
    "Сканируем существующие страницы и собираем из них готовую дизайн-систему",
    "Февраль, 2026",
  ],
  [
    "Режим изображений",
    "Брендовая графика в один клик: управление стилями и темами",
    "Март, 2026",
  ],
  [
    "Генерация видео",
    "Видео из ваших изображений с ключевыми кадрами",
    "Апрель, 2026",
  ],
];

export function Roadmap() {
  return (
    <section className="section section-shell roadmap" id="roadmap">
      <h2>Каждый день — новый релиз</h2>
      <p className="section-intro">Приоритизируем бэклог для ваших целей</p>
      <div className="roadmap__line" />
      <div className="roadmap__items">
        {roadmapItems.map(([title, text, date]) => (
          <article className="roadmap__item" key={title}>
            <span className="roadmap__dot" />
            <h3>{title}</h3>
            <p>{text}</p>
            <strong>{date}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
