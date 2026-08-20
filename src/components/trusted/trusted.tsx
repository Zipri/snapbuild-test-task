import "./trusted.css";
import { companies } from "./constants";

export function Trusted() {
    return (
        <section
            className="trusted section-shell"
            aria-label="Компании, работающие с платформой"
        >
            <div className="trusted__logos">
                {companies.map(([logo, company]) => (
                    <img src={logo} alt={company} key={company} />
                ))}
            </div>
            <p>С платформой работают команды, для которых бренд — закон</p>
        </section>
    );
}
