import Image from "next/image";
import { SectionHeading } from "./SectionHeading";

export function Work() {
  return (
    <div className="container">
      <SectionHeading>Recent work</SectionHeading>

      <div className="p-2">
        <h3>
          <b>Lead Front-end Developer</b> @{" "}
          <b>
            <a href="http://www.zzish.com">Zzish</a>
          </b>
        </h3>
        <div className="flex">
          <Image
            src="/zzish.png"
            alt="Zzish insights teacher dashboards UI"
            width={256}
            height={175}
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
            <p>
              Stack: React, Next, Apollo, GraphQL, JavaScript ES6 + TypeScript,
              Node + Express, MongoDB, Webpack, Pusher, Kubernetes, AWS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
