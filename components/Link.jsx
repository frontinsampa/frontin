import { PrismicNextLink } from '@prismicio/next';
import clsx from 'clsx';

export default function Link(props) {
  const {
    a11y,
    label,
    children,
    className,
  } = props;

  /**
   * Support for Prismic.io Link fields.
   * @example
   * ```json
   * {
   *  "link_type": "Web",
   *  "url": "https://example.com"
   * }
   * ```
   */
  const href = props.href;

  return (
    <PrismicNextLink
      field={href}
      aria-label={a11y}
      target="_blank"
      className={clsx(
        `link`,
        className,
      )}
    >
      {children ?? label}
    </PrismicNextLink>
  );
}
