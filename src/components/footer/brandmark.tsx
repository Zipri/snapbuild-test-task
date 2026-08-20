import headerLogo from "../../assets/images/header_logo.svg";

export function BrandMark() {
  return (
    <a className="footer__brand" href="#top" aria-label="снэпбилд — на главную">
      <img src={headerLogo} alt="снэпбилд" />
    </a>
  );
}
