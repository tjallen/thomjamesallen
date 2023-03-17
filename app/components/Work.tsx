import Image from "next/image";
import quizaHero from "@/public/quiza-hero.png";
import { Anchor } from "./Anchor";
import { SectionHeading } from "./SectionHeading";
import { TechStack } from "./TechStack";

export function Work() {
  return (
    <div className="container mt-6 mb-12">
      <SectionHeading>Recent work</SectionHeading>

      <h3 className="mb-2 text-xl text-heading-inner">
        <b>Lead Front-end Developer</b>{" "}
        <span className="text-neutral-400">@</span> <b>Zzish</b>
      </h3>
      <div className="relative flex flex-col md:flex-row">
        <Image
          src={quizaHero}
          alt="Zzish dashboards UI"
          className="mx-auto object-contain md:max-w-[50%]"
        />
        <div className="basis-1/2">
          <p className="max-w-prose">
            I led the front-end team at{" "}
            <Anchor href="https://www.zzish.com">Zzish</Anchor> - an education
            technology startup who focus on improving education outcomes for
            teachers and students, primarily via their award-winning teaching
            platform and assessment tool,{" "}
            <Anchor href="https://www.quizalize.com">Quizalize</Anchor>.
            There&apos;s more about my work at Zzish on my{" "}
            <Anchor href="/TJA_CV.pdf">CV</Anchor>.
          </p>
          <TechStack
            items={[
              "React",
              "GraphQL",
              "Apollo",
              "TypeScript",
              "Next",
              "Webpack",
              "Vite",
              "Node",
              "Express",
              "MongoDB",
              "Kubernetes",
              "AWS",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
