interface Props {}

export function About({}: Props) {
  return (
    <>
      {" "}
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
      </div>
    </>
  );
}
