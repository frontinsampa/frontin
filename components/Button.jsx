import clsx from 'clsx';

export default function Button(props) {
  const {
    href = null,
    type,
    children,
    target,
    className: inheritedClassName,
    disabled: inheritedDisabled,
  } = props;

  const disabled = inheritedDisabled || !href;

  const className = clsx(
    'bg-blue',
    'flex',
    'font-heading',
    'hover:bg-red',
    'items-center',
    'justify-center',
    'px-4',
    'py-2',
    'text-center',
    'uppercase',
    'transition',
    inheritedClassName,
    {
      'pointer-events-none': disabled,
      'bg-gray': disabled,
    },
  );

  if (href) {
    return (
      <a
        href={href}
        className={className}
        target={target}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={className}
      disabled
    >
      {children}
    </button>
  )
}
