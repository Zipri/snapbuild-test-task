import headerLogo from "../../assets/images/header_logo.svg";
import "./footer.css";

function BrandMark() {
  return (
    <a className="footer__brand" href="#top" aria-label="снэпбилд — на главную">
      <img src={headerLogo} alt="снэпбилд" />
    </a>
  );
}

export function Footer() {
  return (
    <footer className="footer section-shell">
      <div>
        <BrandMark />
        <p>
          Платформа, где все создается в рамках вашего бренда и дизайн-системы
        </p>
      </div>
      <div>
        <b>Навигация</b>
        <a href="#product">Продукт</a>
        <a href="#features">Возможности</a>
        <a href="#security">Безопасность</a>
        <a href="#faq">Частые вопросы</a>
      </div>
      <div>
        <b>Документация</b>
        <a href="#top">Политика конфиденциальности</a>
        <a href="#faq">FAQ</a>
      </div>
      <div>
        <b>Контакты</b>
        <a href="#contact">Запросить демо</a>
        <a href="https://t.me/snapbuild" target="_blank" rel="noreferrer">
          Telegram
        </a>
      </div>
      <div className="footer__bottom">
        <span>© Сгенерировано в Снэпбилде. Все права защищены.</span>
        <a href="mailto:hey@snapbuild.ru">hey@snapbuild.ru</a>
      </div>
    </footer>
  );
}
