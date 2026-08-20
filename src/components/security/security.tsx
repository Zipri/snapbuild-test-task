import "./security.css";
import { securityCards } from "./constants";

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
