import logoText from "../../assets/logo-text.png";

const groups = [
  {
    title: "Product",
    links: [
      { name: "Home", href: "#home" },
      { name: "Technologies", href: "#technologies" },
      { name: "Projects", href: "#projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#about" },
      { name: "Contact", href: "#contact" },
      { name: "Careers", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#contact" },
      { name: "Terms of Service", href: "#contact" },
    ],
  },
];

const socials = [
  { name: "GitHub", href: "https://github.com" },
  { name: "Twitter", href: "https://twitter.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
];

function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="text-center md:text-left">
          <a href="#home" className="mx-auto flex w-fit items-center md:mx-0">
            <img src={logoText} alt="Dev Stack" className="h-8 w-auto" />
          </a>
          <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-slate-500 md:mx-0">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3 md:justify-start md:gap-5">
            {socials.map((social, index) => (
              <span key={social.name} className="flex items-center gap-3 md:gap-5">
                {index > 0 && <span className="text-slate-300 md:hidden">•</span>}
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-slate-500 hover:text-pink-600"
                >
                  {social.name}
                </a>
              </span>
            ))}
          </div>
        </div>

        {groups.map((group) => (
          <div key={group.title} className="hidden md:block">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">
              {group.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {group.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-slate-500 hover:text-pink-600">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between gap-3 text-xs text-slate-400 sm:text-sm">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#contact" className="hover:text-pink-600">Privacy</a>
            <a href="#contact" className="hover:text-pink-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;