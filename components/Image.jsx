import clsx from 'clsx';
import { PrismicImage } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

export default function Image(props) {
  const {
    field,
    className: inheritedClassName,
    color = 'red',
  } = props;

  const { alt } = field;

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
    <div className={`
      relative
    `}>
      <PrismicNextImage
        field={field}
        className={className}
        alt={alt}
        imgixParams={{
          fit: 'fill'
        }}
      />

      <span className="
        hidden
      bg-white
      bg-green
      bg-red
      bg-blue
      bg-pink
      " />

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
