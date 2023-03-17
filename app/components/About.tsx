"use client";
import Image from "next/image";
import { useState } from "react";
import evaUI from "@/public/evaui.webp";
import fmNetwork from "@/public/fm3network.jpeg";
import { ExternalLink } from "./ExternalLink";
import { Modal } from "./Modal";
import { SectionHeading } from "./SectionHeading";

const IMGS = [
  { src: evaUI, alt: "Eva UI" },
  { src: fmNetwork, alt: "FM3 Network" },
];

export function About() {
  const [activeImage, setActiveImage] = useState<number | null>(0);
  const modals = IMGS.map((img, index) => (
    <Modal
      key={img.alt}
      onClose={() => setActiveImage(null)}
      isVisible={activeImage === index}
    >
      <Image src={img.src} alt={img.alt} />
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
              experience. Most recently lead FE at Zzish.
            </p>
            <p>
              Probably thinking too much about the{" "}
              <a onClick={() => setActiveImage(0)}>UI design</a> in{" "}
              <i>Evangelion</i> or the{" "}
              <a onClick={() => setActiveImage(1)}>webpages</a> in{" "}
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
              <ExternalLink href="/TJA_CV.pdf" title="My CV">
                View my CV
              </ExternalLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
