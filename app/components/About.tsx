import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <div className="container flex">
      <SectionHeading>About</SectionHeading>
      <div>
        <p>
          👋 Yo! I&apos;m Thom, a front-end dev based in London with 10+ years
          experience. Most recently Lead Front-end Developer at Zzish.
        </p>
        <p>
          💻 I&apos;m currently open to opportunities, preferably remote or
          hybrid in the London area. View my recent work below or get in touch.
        </p>
      </div>
      <div>
        <p>
          My body may be here, but my mind is in the Stone Sentinel Maze in
          Dynasty Warriors 3 for the PlayStation 2 😔
        </p>
        <p>
          I&apos;ve spent the majority of recent years working on the front-end
          of web apps, typically using React, but also have some full stack
          experience. Click below for more about me and the projects I&apos;ve
          worked on.
        </p>

        <a href="/TJA_CV.pdf" title="My CV">
          CV
        </a>
      </div>
    </div>
  );
}
