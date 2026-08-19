import { useState } from 'react'
import heroInterface from './assets/images/hero-interface.webp'
import featureDesignSystem from './assets/images/feature-design-system.webp'
import featureConfiguration from './assets/images/feature-configuration.webp'
import featureCompliance from './assets/images/feature-compliance.webp'
import productImages from './assets/images/product-images.webp'
import securityModels from './assets/images/security-models.webp'
import securityCloud from './assets/images/security-cloud.webp'
import securityStack from './assets/images/security-stack.webp'
import ozonLogo from './assets/images/ozon.svg'
import t2Logo from './assets/images/t2.svg'
import avitoLogo from './assets/images/avito.svg'
import cianLogo from './assets/images/cian.svg'
import lentaLogo from './assets/images/lenta.svg'
import headerLogo from './assets/images/header_logo.svg'

const productTabs = ['Сайты', 'Изображения', 'Видео', 'Баннеры', 'Презентации']

const productContent = {
  Сайты: ['Результат за один запрос', 'Страница за минуту', 'AI или визуальный редактор', 'Адаптация под ЦА за один клик'],
  Изображения: ['В стиле и цвете бренда', 'Попадание с первой генерации', 'Редактирование объектов', 'Любой стиль и формат'],
  Видео: ['Изображения как ключевые кадры', 'Контроль качества и формата', 'Сохранение стиля и композиции', 'Один сценарий — десятки адаптаций'],
  Баннеры: ['Креативы из одной идеи', 'Все размеры автоматически', 'Текст и графика под контролем', 'Экспорт под площадку'],
  Презентации: ['Презентация из запроса', 'В вашей дизайн-системе', 'Редактирование через AI', 'Экспорт в нужном формате'],
}

const faqItems = [
  ['Что можно создавать в Снэпбилде?', 'Сайты, изображения, видео, баннеры и презентации — в единой дизайн-системе и фирменном стиле.'],
  ['Как работает анализ бренда?', 'Платформа выделяет цветовые схемы, типографику, сетки, отступы и компоненты из ваших материалов.'],
  ['Можно ли экспортировать решение в существующую инфраструктуру?', 'Да. Результат подходит для React, Vue, Angular и HTML/CSS, а также интеграции в существующие процессы.'],
  ['Действительно ли интерфейс полностью соответствует дизайн-системе?', 'Правила цветов, типографики, отступов и состояний компонентов применяются автоматически.'],
  ['В чем отличие от универсальных систем на базе искусственного интеллекта?', 'Снэпбилд ограничивает генерацию правилами бренда и дизайн-системы, а не оставляет стиль на усмотрение модели.'],
  ['Чем это отличается от конструкторов без программирования?', 'Вместо жёстких шаблонов используется компонентная архитектура, настроенная для вашего бренда.'],
  ['В чем отличие от популярных AI-инструментов для создания сайтов?', 'Платформа сочетает скорость генерации с управляемым соблюдением корпоративных стандартов и требований безопасности.'],
  ['Возможна ли работа в закрытом корпоративном облаке?', 'Да, платформа может разворачиваться в изолированной инфраструктуре без доступа к внешней сети.'],
]

function BrandMark() {
  return (
    <a className="brand" href="#top" aria-label="снэпбилд — на главную">
      <img src={headerLogo} alt="снэпбилд" />
    </a>
  )
}

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header" id="top">
      <div className="header__inner">
        <BrandMark />
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label="Открыть меню">
          <span />
          <span />
        </button>
        <nav className={isOpen ? 'nav nav--open' : 'nav'} aria-label="Основная навигация">
          <a href="#product" onClick={() => setIsOpen(false)}>Продукт</a>
          <a href="#features" onClick={() => setIsOpen(false)}>Возможности</a>
          <a href="#security" onClick={() => setIsOpen(false)}>Безопасность</a>
          <a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>
        </nav>
        <a className="button button--dark header__cta" href="#contact">Начать сейчас</a>
      </div>
    </header>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState('Изображения')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const activeFeatures = productContent[activeTab as keyof typeof productContent]

  return (
    <main>
      <Header />

      <section className="hero section-shell">
        <div className="hero__content">
          <h1>Платформа, где все создается в рамках вашего бренда и дизайн-системы</h1>
          <p>Подключите дизайн-систему к Снэпбилду, чтобы каждый участник команды мог создавать профессиональные материалы в фирменном стиле за минуты, а не дни.</p>
          <a className="button button--light" href="#contact">Начать сейчас</a>
        </div>
        <div className="hero__interface">
          <img src={heroInterface} alt="Интерфейс платформы снэпбилд" />
        </div>
      </section>

      <section className="trusted section-shell" aria-label="Компании, работающие с платформой">
        <div className="trusted__logos">
          {[
            [ozonLogo, 'Ozon'],
            [t2Logo, 'T2'],
            [avitoLogo, 'Avito'],
            [cianLogo, 'ЦИАН'],
            [lentaLogo, 'Лента'],
          ].map(([logo, company]) => <img src={logo} alt={company} key={company} />)}
        </div>
        <p>С платформой работают команды, для которых бренд — закон</p>
      </section>

      <section className="section section-shell" id="features">
        <h2>Одна платформа — весь маркетинг</h2>
        <p className="section-intro">Сайты, изображения, видео, баннеры и презентации — из одной идеи, в вашем стиле</p>
        <div className="feature-grid">
          {[
            [featureDesignSystem, 'Дизайн-система — ядро платформы', 'Ваши компоненты, цвета и шрифты — единственный источник стиля'],
            [featureConfiguration, 'Гибкая конфигурация', 'Правила бренда задаются один раз — работают в каждой генерации'],
            [featureCompliance, 'Соответствие по умолчанию', 'AI не может нарушить бренд: материалы создаются строго по вашим правилам'],
          ].map(([image, title, text]) => (
            <article className="image-card" key={title}>
              <img src={image} alt="" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-shell product" id="product">
        <h2>Любой контент в фирменном стиле за считанные минуты</h2>
        <div className="tabs" role="tablist" aria-label="Материалы">
          {productTabs.map((tab) => <button key={tab} className={activeTab === tab ? 'tabs__button tabs__button--active' : 'tabs__button'} onClick={() => setActiveTab(tab)} role="tab" aria-selected={activeTab === tab}>{tab}</button>)}
        </div>
        <div className="product-showcase">
          <div className="product-points">
            {activeFeatures.map((feature, index) => <div className={index === 1 ? 'product-point product-point--active' : 'product-point'} key={feature}><strong>{feature}</strong><span>{index === 1 ? 'Без часов промптинга и поиска на стоках' : 'Инструменты для вашей команды'}</span></div>)}
          </div>
          <div className="product-visual">
            <img src={productImages} alt={`Режим «${activeTab}» в Снэпбилде`} />
            <div className="prompt-panel"><span>Опишите, что вы хотите сгенерировать...</span><div><small>Прикрепить</small><small>3:4</small><small>2K</small><button>✦</button></div></div>
          </div>
        </div>
      </section>

      <section className="section section-shell comparison">
        <h2>Почему команды выбирают Снэпбилд</h2>
        <p className="section-intro">Вы получаете не редактор, а результат: готовые маркетинговые материалы без проблем с настройками</p>
        <div className="comparison__table">
          <div>Особенности</div><div className="comparison__highlight">снэпбилд</div><div>Claude + Figma MCP</div><div>No-code платформы</div><div>Cursor</div><div>Традиционный</div>
          {[
            ['Time-to-market', '5 минут', '30–60 мин', '2–3 дня', '1–2 дня', '3–5 недель'],
            ['Дизайн-система', '100% точность', 'Частично, из Figma', 'Шаблоны', 'Вручную в коде', 'Вручную, через ревью'],
            ['Визуальный редактор', '✓ + ИИ', '—', '✓', '—', '—'],
            ['Требуемые навыки', 'Нет', 'Промпты + код', 'Дизайн', 'Разработка', 'Полная команда'],
          ].flat().map((cell, index) => <div className={index % 6 === 1 ? 'comparison__highlight' : ''} key={`${cell}-${index}`}>{cell}</div>)}
        </div>
      </section>

      <section className="section section-shell" id="security">
        <h2>Безопасность без компромиссов</h2>
        <div className="feature-grid">
          {[
            [securityModels, 'Только одобренные модели', 'Работаем только с российскими и локализованными моделями, без экспортных ограничений'],
            [securityCloud, 'Ваш контур, ваша юрисдикция', 'Развертывание в частном облаке с полным соответствием 152-ФЗ и внутренним ИБ-требованиям'],
            [securityStack, 'Собственный AI-стек', 'Вы сами определяете модели, хранилища, доступы и цепочки валидации'],
          ].map(([image, title, text]) => (
            <article className="image-card" key={title}><img src={image} alt="" /><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="section section-shell roadmap">
        <h2>Каждый день — новый релиз</h2>
        <p className="section-intro">Приоритизируем бэклог для ваших целей</p>
        <div className="roadmap__line" />
        <div className="roadmap__items">
          {[
            ['Сайты за 5 минут', 'Генерация корпоративных сайтов по вашей дизайн-системе — 100% консистентность, без разработчиков', 'Декабрь, 2025'],
            ['Консистентные AI-иллюстрации', 'Настраиваете фирменный стиль один раз — графика для каждой секции сайта в едином виде', 'Январь, 2026'],
            ['Дизайн-система из вашего сайта', 'Сканируем существующие страницы и собираем из них готовую дизайн-систему', 'Февраль, 2026'],
            ['Режим изображений', 'Брендовая графика в один клик: управление стилями и темами', 'Март, 2026'],
            ['Генерация видео', 'Видео из ваших изображений с ключевыми кадрами', 'Апрель, 2026'],
          ].map(([title, text, date]) => <article className="roadmap__item" key={title}><span className="roadmap__dot" /><h3>{title}</h3><p>{text}</p><strong>{date}</strong></article>)}
        </div>
      </section>

      <section className="section section-shell faq" id="faq">
        <h2>Часто задаваемые вопросы</h2>
        <p className="section-intro">Ответы, которые помогут вам принять решение уверенно — без рисков для бренда и безопасности</p>
        <div className="faq__grid">
          {faqItems.map(([question, answer], index) => <article className={openFaq === index ? 'faq__item faq__item--open' : 'faq__item'} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><b>+</b></button>{openFaq === index && <p>{answer}</p>}</article>)}
        </div>
      </section>

      <section className="final-cta section-shell" id="contact">
        <h2>Профессиональные материалы в фирменном стиле за минуты, а не дни</h2>
        <a className="button button--light" href="mailto:hey@snapbuild.ru">Начать сейчас</a>
      </section>

      <footer className="footer section-shell">
        <div><BrandMark /><p>Платформа, где все создается в рамках вашего бренда и дизайн-системы</p></div>
        <div><b>Навигация</b><a href="#product">Продукт</a><a href="#features">Возможности</a><a href="#security">Безопасность</a><a href="#faq">Частые вопросы</a></div>
        <div><b>Документация</b><a href="#top">Политика конфиденциальности</a><a href="#faq">FAQ</a></div>
        <div><b>Контакты</b><a href="#contact">Запросить демо</a><a href="https://t.me/snapbuild" target="_blank" rel="noreferrer">Telegram</a></div>
        <div className="footer__bottom"><span>© Сгенерировано в Снэпбилде. Все права защищены.</span><a href="mailto:hey@snapbuild.ru">hey@snapbuild.ru</a></div>
      </footer>
    </main>
  )
}

export default App
