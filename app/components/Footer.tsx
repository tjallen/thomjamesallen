import { SectionHeading } from "./SectionHeading";

export function Footer() {
  return (
    <div className="container mt-6 border-t-2 border-gray-900">
      <div className="mx-auto p-4">
        <SectionHeading>Get in touch</SectionHeading>
        <p>
          Drop me an email -{" "}
          <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#116;&#104;&#111;&#109;&#119;&#111;&#114;&#107;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">
            &#116;&#104;&#111;&#109;&#119;&#111;&#114;&#107;&#32;&#97;&#116;&#32;&#103;&#109;&#97;&#105;&#108;
          </a>
          , or click a link below
        </p>
        <div>
          <a href="http://github.com/tjallen" title="My GitHub">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/thom-allen-797040155/"
            title="Enter the buzzword zone on LinkedIn. Kudos!"
          >
            LinkedIn
          </a>

          <a href="mailto:thomwork@gmail.com">Email</a>
        </div>
      </div>
    </div>
  );
}
