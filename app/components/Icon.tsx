import Image from "next/image";

interface Props {
  href: string;
  src: string;
  height?: number;
  width?: number;
  alt: string;
}

export function Icon({ href, src, height = 30, width = 30, alt }: Props) {
  return (
    <a href={href} className="no-underline">
      <Image
        src={src}
        height={height}
        width={width}
        alt={alt}
        title={alt}
        className="min-w-[1.5rem]"
      />
    </a>
  );
}
