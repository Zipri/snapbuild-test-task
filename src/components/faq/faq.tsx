import { type MouseEvent, useState } from "react";
import "./faq.css";
import { faqItems } from "./constants";

export function Faq() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleFaqClick = (event: MouseEvent<HTMLButtonElement>) => {
        const index = Number(event.currentTarget.dataset.index);

        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section className="section section-shell faq" id="faq">
            <h2>Часто задаваемые вопросы</h2>
            <p className="section-intro">
                Ответы, которые помогут вам принять решение уверенно — без
                рисков для бренда и безопасности
            </p>
            <div className="faq__grid">
                {faqItems.map(([question, answer], index) => (
                    <article
                        className={
                            openFaq === index
                                ? "faq__item faq__item--open"
                                : "faq__item"
                        }
                        key={question}
                    >
                        <button
                            data-index={index}
                            onClick={handleFaqClick}
                            aria-expanded={openFaq === index}
                        >
                            <span>{question}</span>
                            <b>+</b>
                        </button>
                        {openFaq === index && <p>{answer}</p>}
                    </article>
                ))}
            </div>
        </section>
    );
}
