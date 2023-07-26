import Link from './Link';
import dynamic from 'next/dynamic';
import clsx from 'clsx';

function getSocialIconByLabel(label) {
  const social = {
    twitter: dynamic(() => import('../icons/Twitter.svg')),
    twitchtv: dynamic(() => import('../icons/Twitch.svg')),
    youtube: dynamic(() => import('../icons/Youtube.svg')),
    instagram: dynamic(() => import('../icons/Instagram.svg')),
    website: dynamic(() => import('../icons/Website.svg')),
    discord: dynamic(() => import('../icons/Discord.svg')),
  };

  const key = label
    .replace(/\W/,'')
    .toLowerCase()
  ;

  return social?.[key] || social.website;
}
/**
 * Returns a social link with an icon.
 */
export default function SocialLink(props) {
  const {
    href,
    a11y,
    label,
    className,
  } = props;

  const Icon = getSocialIconByLabel(label);

  if (!Icon) {
    return null;
  }

  return (
    <Link
      href={href}
      target="_blank"
      title={label}
      aria-label={a11y}
      className={clsx(
        `social-link`,
        className,
      )}
    >
      <Icon />
      <span className="sr-only">
        {label}
      </span>
    </Link>
  );
}
