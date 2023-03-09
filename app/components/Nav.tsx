import Image from "next/image";

interface Props {}

export function Nav({}: Props) {
  return (
    <nav className="container relative mx-auto p-2 lg:p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <Image src="/tja-logo.svg" alt="Logo" width={50} height={50} />
          <h1 className="text-3xl font-bold underline">Thom Allen</h1>
        </div>

        <div className="pt-2">
          <a href="https://github.com/tjallen">GH</a>
        </div>
      </div>
    </nav>
  );
}
