import HSection from "./components/hero section/HSection";
import Navbar from "./components/navbar/Navbar";
import BlueLight from "./components/ui/BlueLight";

function App() {
  return (
    <div className=" relative">
      <BlueLight />
      <Navbar />
      <main className=" w-full max-w-site_width mx-auto">
        <HSection/>
      </main>
    </div>
  );
}

export default App;
