import Image from "next/image";

export function Nav() {
  return (
    <nav className="container relative mx-auto p-2 lg:p-6">
      <div className="flex items-center justify-between">
        <div className="flex pt-2">
          <div className="relative h-[3rem] w-[5.5rem]">
            <Image
              src="/tja-logo.svg"
              alt="Logo"
              fill
              className="mr-2 object-fill "
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="m-0 p-0 text-xl font-bold uppercase leading-none tracking-tight text-neutral-800">
              Thom Allen
            </h2>
            <p className="mb-0 p-0 text-base uppercase  leading-none tracking-tight text-neutral-500">
              Front-end developer
            </p>
          </div>
        </div>

        <div className="pt-2">
          <a href="https://github.com/tjallen" className="no-underline">
            <Image
              src="/icon-github.svg"
              height={30}
              width={30}
              alt="View code on GitHub"
              title="View code on GitHub"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
