export const Footer = ({ settings }) => {
  const {
    cnpj,
    corporate_name: corporateName,
    email,
  } = settings;

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
