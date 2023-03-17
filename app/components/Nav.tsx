import Image from "next/image";
import { Anchor } from "./Anchor";
import { Icon } from "./Icon";

export function Nav() {
  return (
    <nav className="container relative mx-auto p-2 lg:p-6">
      <div className="flex items-start justify-between">
        <div className="flex flex-col pt-2 [@media(min-width:380px)]:flex-row">
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
          <Anchor href="https://github.com/tjallen">
            <Icon src="/icon-github.svg" alt="View code on GitHub" />
          </Anchor>
        </div>
      </div>
    </nav>
  );
}
