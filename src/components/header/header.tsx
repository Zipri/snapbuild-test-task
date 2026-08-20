import { type MouseEvent, useRef, useState } from 'react';
import headerLogo from '../../assets/images/header_logo.svg';
import './header.css';
import {
    useHeaderScrollState,
    useHorizontalNavigationScroll,
    useNavigationOverflow,
} from './hooks';

export function Header() {
    const headerRef = useRef<HTMLElement>(null);
    const navRef = useRef<HTMLElement>(null);

    const [isOpen, setIsOpen] = useState(false);

    const hasOverflow = useNavigationOverflow(navRef);
    const isScrolled = useHeaderScrollState();

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleBrandClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        window.location.reload();
    };

    const toggleMenu = () => {
        setIsOpen((currentState) => !currentState);
    };

    useHorizontalNavigationScroll(headerRef, navRef);

    return (
        <header
            className={isScrolled ? 'header header--scrolled' : 'header'}
            id="top"
            ref={headerRef}
        >
            <div className="header__inner">
                <a
                    className="header__brand"
                    href="#top"
                    aria-label="снэпбилд — на главную"
                    onClick={handleBrandClick}
                >
                    <img src={headerLogo} alt="снэпбилд" />
                </a>
                <button
                    className="header__menu-button"
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-label="Открыть меню"
                >
                    <span />
                    <span />
                </button>
                <nav
                    className={[
                        'header__nav',
                        isOpen && 'header__nav--open',
                        hasOverflow && 'header__nav--overflow',
                    ]
                        .filter(Boolean)
                        .join(' ')}
                    aria-label="Основная навигация"
                    ref={navRef}
                >
                    <a href="#features" onClick={closeMenu}>
                        Продукт
                    </a>
                    <a href="#usecases" onClick={closeMenu}>
                        Сценарии
                    </a>
                    <a href="#implementation" onClick={closeMenu}>
                        Внедрение
                    </a>
                    <a href="#integrations" onClick={closeMenu}>
                        Интеграции
                    </a>
                    <a href="#pricing" onClick={closeMenu}>
                        Тарифы
                    </a>
                    <a href="#product" onClick={closeMenu}>
                        Возможности
                    </a>
                    <a href="#comparison" onClick={closeMenu}>
                        Преимущества
                    </a>
                    <a href="#security" onClick={closeMenu}>
                        Безопасность
                    </a>
                    <a href="#roadmap" onClick={closeMenu}>
                        Роадмап
                    </a>
                    <a href="#contactform" onClick={closeMenu}>
                        Демо
                    </a>
                    <a href="#faq" onClick={closeMenu}>
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
