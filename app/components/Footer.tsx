import Image from "next/image";
import { SectionHeading } from "./SectionHeading";

export function Footer() {
  return (
    <div className="container mx-auto mt-6 border-t-2 border-gray-900">
      <div className="mx-auto p-4">
        <SectionHeading>Get in touch</SectionHeading>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p>
            <a
              className="text-3xl"
              href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#116;&#104;&#111;&#109;&#119;&#111;&#114;&#107;&#43;&#112;&#111;&#114;&#116;&#102;&#111;&#108;&#105;&#111;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
            >
              &#116;&#104;&#111;&#109;&#119;&#111;&#114;&#107;&#64;&#103;&#109;&#97;&#105;&#108;
            </a>
          </p>
          <div>
            <ul className="flex items-center space-x-2">
              <li>
                <a
                  href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#116;&#104;&#111;&#109;&#119;&#111;&#114;&#107;&#43;&#112;&#111;&#114;&#116;&#102;&#111;&#108;&#105;&#111;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
                  title="Email"
                  className="no-underline"
                >
                  <Image
                    src="/icon-email.svg"
                    height={30}
                    width={30}
                    alt="Email me"
                    title="Email me"
                  />
                </a>
              </li>
              <li>
                <a
                  href="http://github.com/tjallen"
                  title="My GitHub"
                  className="no-underline"
                >
                  <Image
                    src="/icon-github.svg"
                    height={30}
                    width={30}
                    alt="View code on GitHub"
                    title="View code on GitHub"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/thom-allen-797040155/"
                  title="Enter the buzzword zone on LinkedIn. Kudos!"
                  className="no-underline"
                >
                  <Image
                    src="/icon-kudos.svg"
                    height={30}
                    width={30}
                    alt="Enter the buzzword zone on LinkedIn. Kudos!"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
