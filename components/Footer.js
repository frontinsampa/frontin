import SocialLink from './SocialLink';

export const Footer = ({ settings }) => {
  const {
    cnpj,
    corporate_name: corporateName,
  } = settings;

  return (
    <footer
      className={`
        grid
        gap-4
        lg:grid-cols-[1fr,auto]
        py-8
      `}
    >
      <div>
        <span
          className={`
            block
            text-sm
          `}
        >
          {corporateName}
        </span>

        <span
          className={`
            block
            text-sm
          `}
        >
          {cnpj}
        </span>
      </div>

      <div>
        {settings?.social && (
          <ul
            className={`
              flex
              gap-2
            `}
          >
            {settings.social.map((social, i) => (
              <li key={i}>
                <SocialLink {...social} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
};
