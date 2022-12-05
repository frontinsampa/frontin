import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { Bounded } from "./Bounded";

export const Footer = ({ settings }) => {
  const {
    cnpj,
    corporate_name: corporateName,
    email,
  } = settings.data;

  return (
    <footer
      className="
        py-8
        text-xs
        text-right
      "
    >
      <span className="block">
        {corporateName}
      </span>

      <span className="block">
        {cnpj}
      </span>

      <span className="block">
        {email}
      </span>
    </footer>
  );
};
