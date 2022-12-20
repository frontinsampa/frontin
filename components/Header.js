import * as prismicH from '@prismicio/helpers';
import { PrismicLink, PrismicText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

import { linkResolver } from '../prismicio';

/**
 * @todo move this to a separate file
 */
const FlagIcon = ({ lang }) => {
  const code = lang.substring(3).toLowerCase();

  return (
    <span
      className={`
        fi
        fi-${code}
        w-[20px]
        h-[20px]
      `}
    />
  );
};

export function Header({ languages = [], settings }) {
  return (
    <header
      className="
        z-[100]
      bg-black
        border-b
        border-1
        border-gray
      "
    >
      <div className="
        py-4
        container
        mx-auto
      ">
        <div className="
          flex
          flex-wrap
          items-center
          justify-between
          gap-x-6
          gap-y-3
          leading-none
        ">
          <PrismicLink href="/">
            <PrismicNextImage
              field={settings.logo_short}
              width={40}
            />
          </PrismicLink>

          <nav>
            <ul className="
              flex
              flex-wrap
              gap-6
              md:gap-10
            ">
              {languages.map((lang) => (
                <li key={lang.lang}>
                  <PrismicLink
                    href={linkResolver(lang)}
                    locale={lang.lang}
                    title={`Switch to ${lang.lang}`}
                  >
                    <span className="sr-only">
                      {lang.lang}
                    </span>

                    <FlagIcon lang={lang.lang} />
                  </PrismicLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
