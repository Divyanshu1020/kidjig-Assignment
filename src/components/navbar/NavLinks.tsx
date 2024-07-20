export default function NavLinks() {
  const navLinks = [
    {
      title: "About",
      link: "/",
    },
    {
      title: "Services",
      link: "/",
    },
    {
      title: "Process",
      link: "/",
    },
    {
      title: "Work",
      link: "/",
    },
    {
      title: "Pricing",
      link: "/",
    },
    {
      title: "FAQs",
      link: "/",
    },
  ];
  return (
    <div className=" hidden md:block h-full w-full max-w-[460px]">
      <ul className=" h-full flex flex-row items-center justify-between">
        {navLinks.map((link) => (
          <li key={link.title}>
            <a
              className=" text-white leading-8 font-normal text-xl "
              href={link.link}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
