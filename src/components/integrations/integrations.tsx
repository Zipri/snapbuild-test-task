import "./integrations.css";
import { integrations } from "./constants";

export function Integrations() {
    return (
        <section className="integrations section-shell" id="integrations">
            <div className="integrations__intro">
                <h2>Встраивается в ваш рабочий контур</h2>
                <p>
                    Подключайте дизайн-систему и существующие процессы, а не
                    собирайте новую инфраструктуру вокруг генерации.
                </p>
                <a href="#contact">Обсудить интеграцию ↗</a>
            </div>
            <div className="integrations__grid">
                {integrations.map(([name, description], index) => (
                    <article className="integrations__card" key={name}>
                        <span>0{index + 1}</span>
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <i aria-hidden="true">↗</i>
                    </article>
                ))}
            </div>
        </section>
    );
}
