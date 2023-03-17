import { Anchor } from "./Anchor";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function Footer() {
  return (
    <div
      className="container mx-auto mt-6 border-t-4 [border-image-slice:1]"
      style={{
        borderImageSource: "linear-gradient(45deg, #f43f5e, #60a5fa)",
      }}
    >
      <div className="mx-auto p-4">
        <SectionHeading>Get in touch</SectionHeading>
        <div className="flex flex-col items-center justify-between space-y-2  md:flex-row">
          <p>
            <Anchor
              className="text-xl sm:text-2xl md:text-3xl"
              href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#116;&#104;&#111;&#109;&#119;&#111;&#114;&#107;&#43;&#112;&#111;&#114;&#116;&#102;&#111;&#108;&#105;&#111;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
            >
              &#116;&#104;&#111;&#109;&#119;&#111;&#114;&#107;&#64;&#103;&#109;&#97;&#105;&#108;
            </Anchor>
          </p>
          <div>
            <ul className="flex items-center space-x-2">
              <li>
                <Anchor href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#116;&#104;&#111;&#109;&#119;&#111;&#114;&#107;&#43;&#112;&#111;&#114;&#116;&#102;&#111;&#108;&#105;&#111;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">
                  <Icon src="/icon-email.svg" alt="Email me" />
                </Anchor>
              </li>
              <li>
                <Anchor href="http://github.com/tjallen">
                  <Icon src="/icon-github.svg" alt="View code on GitHub" />
                </Anchor>
              </li>
              <li>
                <Anchor href="https://www.linkedin.com/in/thom-allen-797040155/">
                  <Icon
                    src="/icon-kudos.svg"
                    alt="Enter the buzzword zone on LinkedIn. Kudos!"
                  />
                </Anchor>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
