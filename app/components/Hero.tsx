import Image from "next/image";

export function Hero() {
  return (
    <div className="container mx-auto my-12 px-2 md:px-4 lg:px-6">
      <div className="relative z-0 h-full w-full translate-y-4 -translate-x-4 bg-rose-500">
        <div className="z-1 relative left-4 -top-4 h-full w-full -translate-y-4 translate-x-4 bg-blue-400">
          <div className="z-2 relative flex h-full w-full translate-y-4 -translate-x-4 flex-col-reverse items-center justify-center bg-stone-900 p-4 text-white md:flex-row md:p-8 lg:p-12 xl:py-16">
            <div className="m-2">
              <h2 className="break-keep text-lg md:text-2xl lg:text-3xl">
                Experienced front-end web developer, passionate about building
                effective, user-friendly web experiences.
              </h2>
            </div>
            <div className="relative m-2 min-h-[120px] min-w-[120px] rounded-full border-2 border-white">
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
