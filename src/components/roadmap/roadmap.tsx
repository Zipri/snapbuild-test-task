import "./roadmap.css";
import { roadmapItems } from "./constants";

export function Roadmap() {
    return (
        <section className="section section-shell roadmap" id="roadmap">
            <h2>Каждый день — новый релиз</h2>
            <p className="section-intro">
                Приоритизируем бэклог для ваших целей
            </p>
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
