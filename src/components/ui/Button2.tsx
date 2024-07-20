
export default function Button2({
    title = "",
    navigateTo = "/",
    className = "",
}) {
  return (
    <span className={` text-white text-nowrap px-4 py-4 bg-[#6A35FF]  rounded-xl ${className}`}>
      <a className=" leading-8 font-semibold text-sm md:text-xl" href={navigateTo}>
        {title}
      </a>
    </span>
  )
}
