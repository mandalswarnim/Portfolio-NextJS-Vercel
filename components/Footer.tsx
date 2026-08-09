import Link from "next/link";
import AthenaMark from "@/components/AthenaMark";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-divider bg-background">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <AthenaMark height={44} />
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-[200px]">
              Software engineer and ML researcher based in London.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-subtle mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Work", href: "/services" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-subtle mb-5">
              Expertise
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              <li>Full-Stack Development</li>
              <li>Machine Learning</li>
              <li>Data Analysis</li>
              <li>Mobile Development</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-subtle mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:mswarnim1@gmail.com"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mandalswarnim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/swarnim-mandal-678976259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-divider pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-subtle">© {year} Swarnim Mandal. All rights reserved.</p>
          <p className="text-sm text-subtle">London, United Kingdom</p>
        </div>
      </div>
    </footer>
  );
}
