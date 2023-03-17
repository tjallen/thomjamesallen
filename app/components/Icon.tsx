import Image from "next/image";

interface Props {
  src: string;
  height?: number;
  width?: number;
  alt: string;
}

export function Icon({ src, height = 30, width = 30, alt }: Props) {
  return (
    <Image
      src={src}
      height={height}
      width={width}
      alt={alt}
      title={alt}
      className="min-w-[1.5rem]"
    />
  );
}
