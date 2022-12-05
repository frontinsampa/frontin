import clsx from 'clsx';
import { PrismicImage } from '@prismicio/react';

export default function Image(props) {
  const {
    field,
    widths = [],
    className: inheritedClassName,
    color = 'red',
  } = props;

  const className = clsx(
    'border-2',
    'border-black',
    'relative',
    'z-[1]',
    'hover:translate-x-2',
    'hover:-translate-y-2',
    'transition-transform',
    'w-full',
    'h-full',
    // 'object-cover',
    inheritedClassName
  );

  return (
    <div className="relative">
      <PrismicImage
        field={field}
        widths={widths}
        pixelDensities="defaults"
        className={className}
      />

      <span className={clsx(
        'absolute',
        'top-0',
        'left-0',
        'w-full',
        'h-full',
        `bg-${color}`
      )} />
    </div>
  );
}
