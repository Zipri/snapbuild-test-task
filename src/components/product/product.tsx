import { type MouseEvent, useState } from "react";
import productImages from "../../assets/images/product-images.webp";
import "./product.css";
import { productContent, productTabs } from "./constants";

export function Product() {
    const [activeTab, setActiveTab] =
        useState<keyof typeof productContent>("Изображения");
    const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
    const activeFeatures = productContent[activeTab];

    const handleTabClick = (event: MouseEvent<HTMLButtonElement>) => {
        const nextTab = event.currentTarget.dataset
            .tab as keyof typeof productContent;

        setActiveTab(nextTab);
        setActiveFeatureIndex(0);
    };

    return (
        <section className="section section-shell product" id="product">
            <h2>Любой контент в фирменном стиле за считанные минуты</h2>
            <div className="tabs" role="tablist" aria-label="Материалы">
                {productTabs.map((tab) => (
                    <button
                        className={
                            activeTab === tab
                                ? "tabs__button tabs__button--active"
                                : "tabs__button"
                        }
                        key={tab}
                        data-tab={tab}
                        onClick={handleTabClick}
                        role="tab"
                        aria-selected={activeTab === tab}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="product-showcase">
                <div className="product-points">
                    {activeFeatures.map((feature, index) => (
                        <button
                            type="button"
                            className={
                                index === activeFeatureIndex
                                    ? "product-point product-point--active"
                                    : "product-point"
                            }
                            key={feature}
                            onClick={() => setActiveFeatureIndex(index)}
                        >
                            <strong>{feature}</strong>
                            <span>
                                {index === activeFeatureIndex
                                    ? "Без часов промптинга и поиска на стоках"
                                    : "Инструменты для вашей команды"}
                            </span>
                        </button>
                    ))}
                </div>
                <div className="product-visual">
                    <img
                        src={productImages}
                        alt={`Режим «${activeTab}» в Снэпбилде`}
                    />
                    <div className="prompt-panel">
                        <span>Опишите, что вы хотите сгенерировать...</span>
                        <div>
                            <small>Прикрепить</small>
                            <small>3:4</small>
                            <small>2K</small>
                            <button>✦</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
