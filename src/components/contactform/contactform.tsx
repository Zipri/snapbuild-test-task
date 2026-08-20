import "./contactform.css";
import { useContactForm } from "./hooks";

export function Contactform() {
  const {
    form,
    submitted,
    error,
    handleSubmit,
    handleNameChange,
    handleEmailChange,
    handleCompanyChange,
    handleMessageChange,
    handleNewRequest,
  } = useContactForm();

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
            <button type="button" onClick={handleNewRequest}>
              Отправить ещё одну заявку
            </button>
          </div>
        ) : (
          <>
            <label>
              Имя
              <input
                value={form.name}
                onChange={handleNameChange}
                placeholder="Как к вам обращаться?"
                autoComplete="name"
              />
            </label>
            <label>
              Рабочий email
              <input
                value={form.email}
                onChange={handleEmailChange}
                placeholder="name@company.ru"
                autoComplete="email"
                inputMode="email"
              />
            </label>
            <label>
              Компания
              <input
                value={form.company}
                onChange={handleCompanyChange}
                placeholder="Название компании"
                autoComplete="organization"
              />
            </label>
            <label>
              Что хотите создавать?
              <textarea
                value={form.message}
                onChange={handleMessageChange}
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
