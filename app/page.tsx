import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Image src="/tja-logo.svg" alt="Logo" width={50} height={50} />
        <h1 className="text-3xl font-bold underline">Thom Allen</h1>
        <Image
          src="/tjavatar.jpeg"
          alt="Me with a former office pal"
          width={80}
          height={80}
        />
      </div>
      <div>
        <h2>
          Hello! I&apos;m an experienced front-end web developer passionate
          about building effective, user-friendly web experiences.
        </h2>
      </div>

      <div>
        <h3>Status</h3>
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

      <div>
        <h2>About</h2>
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
        <a href="http://github.com/tjallen" title="My GitHub">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/thom-allen-797040155/"
          title="Enter the buzzword zone on LinkedIn. Kudos!"
        >
          LinkedIn
        </a>
        <h4>Get in touch</h4>
        <a href="mailto:thomwork@gmail.com">Email me</a>
      </div>
    </main>
  );
}
