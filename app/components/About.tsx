import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <div className="container mt-6 mb-12 flex flex-col">
      <SectionHeading>About</SectionHeading>
      <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <div className="mb-4 flex basis-1/2 flex-col items-center p-2 lg:flex-row">
          <div className="p-1 text-3xl lg:mr-2">👋</div>
          <div>
            <p>
              Yo! I&apos;m Thom, a front-end dev based in London with 10+ years
              experience. Most recently lead FE at Zzish.
            </p>
          </div>
        </div>
        <div className="mb-4 flex basis-1/2 flex-col items-center p-2 lg:flex-row">
          <div className="p-1 text-3xl lg:mr-2">💻</div>
          <div>
            <p>
              I&apos;m currently open to opportunities, preferably remote or
              hybrid in the London area.
            </p>
            <p>
              More info about my recent work on my{" "}
              <a href="/TJA_CV.pdf" title="My CV">
                CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
