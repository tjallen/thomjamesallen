interface Props {}

import Image from "next/image";

export function Header({}: Props) {
  return (
    <>
      <div>
        <h2>
          Hello! I&apos;m an experienced front-end web developer passionate
          about building effective, user-friendly web experiences.
        </h2>
      </div>
      <div>
        <Image src="/tja-logo.svg" alt="Logo" width={50} height={50} />
        <h1 className="text-3xl font-bold underline">Thom Allen</h1>
        <Image
          src="/tjavatar.jpeg"
          alt="Me with a former office pal"
          width={80}
          height={80}
        />
      </div>
    </>
  );
}
