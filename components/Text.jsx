import clsx from 'clsx';

export default function Text(props) {
  const {
    as: Component = 'p',
    size = 'base',
    variant = 'body',
    children,
    className,
    transform = null
  } = props;

  return (
    <Component
      className={clsx(
        `text-${size}`,
        transform,
        variant && `font-${variant}`,
        className
      )}
    >
      {children}
    </Component>
  )
}
