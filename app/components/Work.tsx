import { SectionHeading } from "./SectionHeading";

export function Work() {
  return (
    <>
      <div>
        <SectionHeading>Status</SectionHeading>
        <p>
          Most recently I was <b>Lead Front-end Developer</b> at{" "}
          <b>
            <a href="http://www.zzish.com">Zzish</a>
          </b>
          , an education technology startup who focus on improving the education
          experience for teachers and students, primarily via their
          award-winning teaching platform and assessment tool,{" "}
          <a href="http://www.quizalize.com">Quizalize</a>. There&apos;s more
          info about my work at Zzish on my <a href="/TJA_CV.pdf">CV</a>.
        </p>
        <p>
          Stack: React, Next, Apollo, GraphQL, JavaScript ES6 + TypeScript, Node
          + Express, MongoDB, Webpack, Pusher, Kubernetes, AWS
        </p>
      </div>
    </>
  );
}
