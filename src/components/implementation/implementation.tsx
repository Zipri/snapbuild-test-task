import "./implementation.css";
import { implementationSteps } from "./constants";

export function Implementation() {
    return (
        <section className="implementation section-shell" id="implementation">
            <div className="implementation__intro">
                <h2>От дизайн-системы до первого результата</h2>
                <span>
                    Настраиваем платформу вместе с вами, чтобы команда начала
                    создавать материалы в день запуска.
                </span>
            </div>

            <div className="implementation__steps">
                {implementationSteps.map((step) => (
                    <article className="implementation__step" key={step.number}>
                        <span>{step.number}</span>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                        <i aria-hidden="true">↓</i>
                    </article>
                ))}
            </div>
        </section>
    );
}
