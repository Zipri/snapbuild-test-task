import avitoLogo from "../../assets/images/avito.svg";
import cianLogo from "../../assets/images/cian.svg";
import lentaLogo from "../../assets/images/lenta.svg";
import ozonLogo from "../../assets/images/ozon.svg";
import t2Logo from "../../assets/images/t2.svg";
import "./trusted.css";

const companies = [
  [ozonLogo, "Ozon"],
  [t2Logo, "T2"],
  [avitoLogo, "Avito"],
  [cianLogo, "ЦИАН"],
  [lentaLogo, "Лента"],
];

export function Trusted() {
  return (
    <section
      className="trusted section-shell"
      aria-label="Компании, работающие с платформой"
    >
      <div className="trusted__logos">
        {companies.map(([logo, company]) => (
          <img src={logo} alt={company} key={company} />
        ))}
      </div>
      <p>С платформой работают команды, для которых бренд — закон</p>
    </section>
  );
}
