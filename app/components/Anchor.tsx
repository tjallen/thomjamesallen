interface Props {
  href?: string;
  onClick?: () => void;
  newWindow?: boolean;
  title?: string;
  className?: string;
  children: React.ReactElement | string;
}

export function Anchor({
  href,
  children,
  newWindow = true,
  title,
  className,
  onClick,
}: Props) {
  if (!href && !onClick) {
    console.error("link missing expected href/onClick prop");
  }
  return (
    <a
      href={href}
      onClick={onClick}
      target={href && newWindow ? "_blank" : undefined}
      rel={href && newWindow ? "noopener noreferrer" : undefined}
      title={title}
      className={`relative cursor-pointer overflow-hidden border-b-4 border-solid border-anchor/25 font-bold text-anchor hover:border-anchor hover:transition-colors ${className}`}
    >
      {children}
    </a>
  );
}
