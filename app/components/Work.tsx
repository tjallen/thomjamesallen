import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { TechStack } from "./TechStack";

export function Work() {
  return (
    <div className="container my-6">
      <SectionHeading>Recent work</SectionHeading>

      <h3 className="mb-2 text-xl text-heading-inner">
        <b>Lead Front-end Developer</b>{" "}
        <span className="text-neutral-400">@</span> <b>Zzish</b>
      </h3>
      <div className="relative flex flex-col md:flex-row">
        <Image
          src="/zzish.png"
          alt="Zzish insights teacher dashboards UI"
          width={256}
          height={175}
          className="mx-auto object-contain"
        />
        <div className="basis-3/4">
          <p className="max-w-prose">
            I led the front-end team at{" "}
            <a href="https://www.zzish.com">Zzish</a> - an education technology
            startup who focus on improving education outcomes for teachers and
            students, primarily via their award-winning teaching platform and
            assessment tool, <a href="https://www.quizalize.com">Quizalize</a>.
            There&apos;s more info about my work at Zzish on my{" "}
            <a href="/TJA_CV.pdf">CV</a>.
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
