import { useEffect, useRef, useState } from 'react';
import headerLogo from '../../assets/images/header_logo.svg';
import './header.css';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasOverflow, setHasOverflow] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const headerRef = useRef<HTMLElement>(null);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const nav = navRef.current;

        if (!nav) {
            return;
        }

        const updateOverflow = () => {
            setHasOverflow(nav.scrollWidth > nav.clientWidth + 1);
        };

        updateOverflow();
        const observer = new ResizeObserver(updateOverflow);
        observer.observe(nav);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const header = headerRef.current;

        if (!header) {
            return;
        }

        const handleWheel = (event: WheelEvent) => {
            const nav = navRef.current;

            if (!nav || nav.scrollWidth <= nav.clientWidth) {
                return;
            }

            nav.scrollLeft += event.deltaY;
            event.preventDefault();
        };

        header.addEventListener('wheel', handleWheel, { passive: false });

        return () => header.removeEventListener('wheel', handleWheel);
    }, []);

    useEffect(() => {
        const updateHeaderState = () => setIsScrolled(window.scrollY > 16);

        updateHeaderState();
        window.addEventListener('scroll', updateHeaderState, { passive: true });

        return () => window.removeEventListener('scroll', updateHeaderState);
    }, []);

    const closeMenu = () => {
        setIsOpen(false);
    };

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
          onClick={(event) => {
            event.preventDefault();
            window.location.reload();
          }}
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
