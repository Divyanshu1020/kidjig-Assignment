import BottomText from "./BottomText";
import TopText from "./TopText";

export default function HSection() {
  return (
    <div className=" mt-24 pl-9 py-24 text-start flex flex-col">
        <TopText/>
        <BottomText/>
    </div>
  )
}
