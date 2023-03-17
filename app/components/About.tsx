"use client";
import { ExternalLink } from "./ExternalLink";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const setModal = {};
  return (
    <div className="container mt-6 mb-12 flex flex-col">
      <SectionHeading>About</SectionHeading>
      <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <div className="mb-4 flex basis-1/2 p-2">
          <div className="mr-2 p-1 text-3xl">👋</div>
          <div>
            <p>
              Yo! I&apos;m Thom, a front-end dev based in London with 10+ years
              experience. Most recently lead FE at Zzish.
            </p>
            <p>
              Probably thinking too much about the{" "}
              <ExternalLink href="/evaui.webp">UI design</ExternalLink> in{" "}
              <i>Evangelion</i> or the{" "}
              <ExternalLink href="/fm3network.jpeg">webpages</ExternalLink> in{" "}
              <i>Front Mission 3</i>.
            </p>
          </div>
        </div>
        <div className="mb-4 flex basis-1/2 p-2">
          <div className="mr-2 p-1 text-3xl">💻</div>
          <div>
            <p>
              I&apos;m currently open to opportunities, preferably remote or
              hybrid in the London area.
            </p>
            <p>
              More info about my recent work on my{" "}
              <ExternalLink href="/TJA_CV.pdf" title="My CV">
                CV
              </ExternalLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
