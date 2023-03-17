interface Props {
  href: string;
  newWindow?: boolean;
  title?: string;
  className?: string;
  children: React.ReactElement | string;
}

export function ExternalLink({
  href,
  children,
  newWindow = true,
  title,
  className,
}: Props) {
  return (
    <a
      href={href}
      target={newWindow ? "_blank" : undefined}
      rel={newWindow ? "noopener noreferrer" : undefined}
      title={title}
      className={className}
    >
      {children}
    </a>
  );
}
