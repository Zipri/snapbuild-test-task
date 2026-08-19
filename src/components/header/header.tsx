import { useState } from "react";
import headerLogo from "../../assets/images/header_logo.svg";
import "./header.css";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header" id="top">
      <div className="header__inner">
        <a
          className="header__brand"
          href="#top"
          aria-label="снэпбилд — на главную"
        >
          <img src={headerLogo} alt="снэпбилд" />
        </a>
        <button
          className="header__menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Открыть меню"
        >
          <span />
          <span />
        </button>
        <nav
          className={isOpen ? "header__nav header__nav--open" : "header__nav"}
          aria-label="Основная навигация"
        >
          <a href="#product" onClick={() => setIsOpen(false)}>
            Продукт
          </a>
          <a href="#features" onClick={() => setIsOpen(false)}>
            Возможности
          </a>
          <a href="#security" onClick={() => setIsOpen(false)}>
            Безопасность
          </a>
          <a href="#faq" onClick={() => setIsOpen(false)}>
            FAQ
          </a>
        </nav>
        <a className="button button--dark header__cta" href="#contact">
          Начать сейчас
        </a>
      </div>
    </header>
  );
}
