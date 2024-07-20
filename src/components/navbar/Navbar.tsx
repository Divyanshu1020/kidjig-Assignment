import logo from '../../assets/logo.svg';
import NavLinks from './NavLinks';

export default function Navbar() {
  return (
    <div className=" hightOfNavbar sticky left-0 top-[-2px] w-full bg-nav_bg blur25px ">
        <nav className=" max-w-site_width mx-auto h-full flex flex-row items-center justify-between">
          <div>
            <img src={logo} alt="" />
          </div>
          
          <NavLinks/>
          
          <div>
            <span className=' mr-4 px-4 py-4 border border-blueBorder  rounded-xl'>
              <a 
                className=' leading-8 font-semibold text-xl'
                href="/">
                Book a call 
              </a>
            </span>
          </div>
        </nav>
    </div>
  )
}
