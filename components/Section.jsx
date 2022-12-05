import clsx from 'clsx';

export default function Section(props) {
  const {
    as: Component = 'section',
    children,
    className
  } = props;

  return (
    <Component
      className={clsx(
        'py-10',
        className
      )}
    >
      {children}
    </Component>
  )
}
