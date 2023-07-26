import clsx from 'clsx';
import { PrismicNextImage } from '@prismicio/next';

export default function Image(props) {
  const {
    field,
    className,
    color = 'red',
    fill,
  } = props;

  const { alt } = field;

  return (
    <div
      className={clsx(
        `
          relative
        `,
        className,
      )}
    >
      <div
        className={clsx(
          `
          bg-white
            h-full
            w-full
            flex
            justify-center
            items-center
            relative
            z-[1]
            border-2
          border-black
            transition-transform
            hover:translate-x-2
            hover:-translate-y-2
          `,
          { 'px-2': fill },
        )}
      >
        <PrismicNextImage
          field={field}
          className={`
            object-contain
          `}
          alt={alt}
          imgixParams={{
            fit: 'fill'
          }}
        />
      </div>

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
