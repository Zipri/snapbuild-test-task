import { type FormEvent, useState } from "react";
import "./contactform.css";

type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function Contactform() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.company.trim()) {
      setError("Заполните имя, рабочий email и название компании.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Укажите корректный email.");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <section className="contactform section-shell" id="contactform">
      <div className="contactform__intro">
        <h2>Посмотрим, как Снэпбилд работает для вашего бренда</h2>
        <p>
          Оставьте контакты — покажем сценарии для вашей команды и обсудим
          подходящий формат подключения.
        </p>
        <div className="contactform__details">
          <span>Ответим в течение рабочего дня</span>
          <a href="mailto:hey@snapbuild.ru">hey@snapbuild.ru</a>
        </div>
      </div>

      <form className="contactform__form" onSubmit={handleSubmit} noValidate>
        {submitted ? (
          <div className="contactform__success" role="status">
            <span>✓</span>
            <h3>Заявка отправлена</h3>
            <p>Спасибо! Мы свяжемся с вами по указанному email.</p>
            <button type="button" onClick={() => setSubmitted(false)}>
              Отправить ещё одну заявку
            </button>
          </div>
        ) : (
          <>
            <label>
              Имя
              <input
                value={form.name}
                onChange={(event) =>
                  setForm({ ...form, name: event.target.value })
                }
                placeholder="Как к вам обращаться?"
                autoComplete="name"
              />
            </label>
            <label>
              Рабочий email
              <input
                value={form.email}
                onChange={(event) =>
                  setForm({ ...form, email: event.target.value })
                }
                placeholder="name@company.ru"
                autoComplete="email"
                inputMode="email"
              />
            </label>
            <label>
              Компания
              <input
                value={form.company}
                onChange={(event) =>
                  setForm({ ...form, company: event.target.value })
                }
                placeholder="Название компании"
                autoComplete="organization"
              />
            </label>
            <label>
              Что хотите создавать?
              <textarea
                value={form.message}
                onChange={(event) =>
                  setForm({ ...form, message: event.target.value })
                }
                placeholder="Например: сайты и баннеры для продуктовых запусков"
                rows={3}
              />
            </label>
            {error && <p className="contactform__error">{error}</p>}
            <button className="contactform__submit" type="submit">
              Запросить демо <span>↗</span>
            </button>
            <small>
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
            </small>
          </>
        )}
      </form>
    </section>
  );
}
