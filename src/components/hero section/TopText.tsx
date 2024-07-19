import Button1 from "../ui/Button1";
import Button2 from "../ui/Button2";

export default function TopText() {
  return (
    <div>
        <h1 className="mb-4 font-normal text-6xl leading-[60px]">
            Empowering Lives Through Innovative <span className="underline decoration-custom-blue">AI</span> Technologies. 
        </h1>
        <p className="text-pra leading-7 text-2xl font-normal">
        Finding new horizons for visionaries to accelerate their innovation and progress.
        </p>
        <div className=" flex flex-row gap-6 mt-7">
            <Button2
                title="Explore Our Services"
                navigateTo="/"
                className=" px-10"
            />
            <Button1
                title="Learn more"
                navigateTo="/"
                className=" px-7"
            />
        </div>
    </div>
  )
}
