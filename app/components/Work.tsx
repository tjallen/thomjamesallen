import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { TechStack } from "./TechStack";

export function Work() {
  return (
    <div className="container">
      <SectionHeading>Recent work</SectionHeading>

      <div className="">
        <h3 className="text-xl text-headingInner">
          <b>Lead Front-end Developer</b>{" "}
          <span className="text-neutral-400">@</span>{" "}
          <b>
            <a href="http://www.zzish.com">Zzish</a>
          </b>
        </h3>
        <div className="relative flex flex-col md:flex-row">
          <Image
            src="/zzish.png"
            alt="Zzish insights teacher dashboards UI"
            width={256}
            height={175}
            className="object-contain"
          />
          <div>
            <p>
              I led the front-end team at Zzish - an education technology
              startup who focus on improving the education experience for
              teachers and students, primarily via their award-winning teaching
              platform and assessment tool,{" "}
              <a href="http://www.quizalize.com">Quizalize</a>. There&apos;s
              more info about my work at Zzish on my{" "}
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
    </div>
  );
}
