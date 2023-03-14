import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <div className="container mt-6 mb-12 flex flex-col">
      <SectionHeading>About</SectionHeading>
      <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <div className="mb-4 flex basis-1/2 p-2">
          <div className="mr-2 p-1 text-3xl">👋</div>
          <div>
            <p>
              Yo! I&apos;m Thom, a front-end dev based in London with 10+ years
              experience. Most recently lead FE at Zzish.
            </p>
            <p>Probably thinking too much about:</p>
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=X82QTT_vJI0"
                  title="Zeta Gundam OP1"
                >
                  1979&ndash;1988 period Mobile Suit Gundam
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Long-term_nuclear_waste_warning_messages"
                  title="Long-term nuclear waste warning messages on Wikipedia. Treat yourself"
                >
                  Long-term nuclear waste warning messages
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=CUmmxW7Ksc8"
                  title="The Pricemaster. Everything is for sale"
                >
                  The Pricemaster
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-4 flex basis-1/2 p-2">
          <div className="mr-2 p-1 text-3xl">💻</div>
          <div>
            <p>
              I&apos;m currently open to opportunities, preferably remote or
              hybrid in the London area.
            </p>
            <p>
              More info about my recent work on my{" "}
              <a href="/TJA_CV.pdf" title="My CV">
                CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
