import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <div className="container my-6 flex flex-col">
      <SectionHeading>About</SectionHeading>
      <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <p>
          👋 Yo! I&apos;m Thom, a front-end dev based in London with 10+ years
          experience. Most recently Lead Front-end Developer at Zzish.
        </p>
        <div>
          <p>
            💻 I&apos;m currently open to opportunities, preferably remote or
            hybrid in the London area. View my recent work below or get in
            touch.
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
  );
}
