"use client";
import Image from "next/image";
import { useState } from "react";
import evaUI from "@/public/magi.gif";
import fmNetwork from "@/public/fm3network.png";
import { Anchor } from "./Anchor";
import { Modal } from "./Modal";
import { SectionHeading } from "./SectionHeading";

const IMGS = [
  { src: evaUI, alt: "Peak UI design in Evangelion (UX may be lacking)" },
  {
    src: fmNetwork,
    alt: "FM3's in-universe web pages. Beware Polvadingers",
  },
];

export function About() {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const modals = IMGS.map((img, index) => (
    <Modal
      key={img.alt}
      onClose={() => setActiveImage(null)}
      isVisible={activeImage === index}
    >
      <Image src={img.src} alt={img.alt} className="mx-auto" />
      <p className="mb-0 bg-stone-900 p-2 text-center font-bold text-white">
        {img.alt}
      </p>
    </Modal>
  ));
  return (
    <div className="container mt-6 mb-12 flex flex-col">
      {modals}
      <SectionHeading>About</SectionHeading>
      <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <div className="mb-4 flex basis-1/2 p-2">
          <div className="mr-2 p-1 text-3xl">👋</div>
          <div>
            <p>
              Yo! I&apos;m Thom, a front-end dev based in London with 10+ years
              experience. Most recently focused on building web app UI using
              React.
            </p>
            <p>
              Probably thinking too much about the{" "}
              <Anchor onClick={() => setActiveImage(0)}>UI design</Anchor> in{" "}
              <i>Evangelion</i> or the{" "}
              <Anchor onClick={() => setActiveImage(1)}>webpages</Anchor> in{" "}
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
              <Anchor href="/thom_allen_cv.pdf" title="My CV">
                View my CV
              </Anchor>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
