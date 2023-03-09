import Image from "next/image";

export function Header() {
  return (
    <div className="container my-12 px-2 md:px-4 lg:px-6">
      <div className="relative z-0 h-full w-full translate-y-4 -translate-x-4 bg-rose-500">
        <div className="z-1 relative left-4 -top-4 h-full w-full -translate-y-4 translate-x-4 bg-blue-400">
          <div className="z-2 relative flex h-full w-full translate-y-4 -translate-x-4 flex-col-reverse items-center justify-center bg-stone-900 p-4 text-white md:flex-row md:p-8 lg:p-12">
            <div className="m-2">
              <h2 className="text-lg md:text-xl">
                Hello! I&apos;m an experienced front-end web developer
                passionate about building effective, user-friendly web
                experiences.
              </h2>
            </div>
            <div className="relative m-2 min-h-[120px] min-w-[120px]">
              <Image
                src="/tjavatar.jpeg"
                alt="Me with a former office pal"
                className="rounded-full"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
