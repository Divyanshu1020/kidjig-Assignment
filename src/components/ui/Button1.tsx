export default function Button1({
    title="",
    navigateTo="/",
    className="",
}) {
  return (
    <span className={` text-nowrap px-4 py-4 border border-blueBorder  rounded-xl ${className}`}>
      <a className=" leading-8 font-semibold text-sm md:text-xl" href={navigateTo}>
        {title}
      </a>
    </span>
  );
}
