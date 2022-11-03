import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from './components/assets/shared/logo.svg';
import hamburger from './components/assets/shared/icon-hamburger.svg';
import closeIcon from './components/assets/shared/icon-close.svg';

export const Navbar = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);

  return (
    <nav className='flex justify-between items-center md:overflow-clip px-5 bg-transparent absolute top-0 pt-6 md:pt-0 w-full z-50 lg:pl-14 xl:top-10'>
      <img src={logo} alt="logo" className='w-10' />
      {/* menu */}
      <div className={`${!menuDisplay ? `hidden menu translate-x-full md:translate-x-0 md:flex` :  `translate-x-0 flex`} flex bg-white/10 backdrop-blur-lg flex-col absolute top-0 right-0 w-[70%] md:relative h-screen md:h-24 md:justify-center xl:w-3/5 xl:before:absolute xl:before:-left-[443px] xl:before:bg-white/25 xl:before:w-[30rem] xl:before:h-[1px] `}>
        {/* nav links */}
        <ul className="font-Barlow-Condensed flex flex-col order-2 mt-36 px-6 text-left justify-start font-medium uppercase text-base tracking-[2.7px] gap-8 md:justify-between md:flex-row md:mt-0 md:px-0 md:w-fit md:mx-auto">
          <li className="text-white text-sm relative px-2 md:px-0 w-fit transition-all after:absolute after:h-[3px] after:top-[30px] after:left-0 after:w-0 hover:after:w-full after:bg-white hover:after:bg-white/25 hover:text-white md:after:top-[56px]" onClick={() => setMenuDisplay(prevValue => !prevValue)} >
            <NavLink className='font-medium' to="/"><span className='font-bold mr-2 md:hidden lg:inline-block'>00</span> Home </NavLink>
          </li>
          <li className="text-white text-sm relative px-2 md:px-0 w-fit transition-all after:absolute after:h-[3px] after:top-[30px] after:left-0 after:w-0 hover:after:w-full after:bg-white hover:after:bg-white/25 hover:text-white md:after:top-[56px]" onClick={() => setMenuDisplay(prevValue => !prevValue)}>
            <NavLink className='font-medium' to="/destination"><span className='font-bold mr-2 md:hidden lg:inline-block'>01</span> Destination </NavLink>
          </li>
          <li className="text-white text-sm relative px-2 md:px-0 w-fit transition-all after:absolute after:h-[3px] after:top-[30px] after:left-0 after:w-0 hover:after:w-full after:bg-white hover:after:bg-white/25 hover:text-white md:after:top-[56px]" onClick={() => setMenuDisplay(prevValue => !prevValue)}>
            <NavLink className='font-medium' to="/crew"><span className='font-bold mr-2 md:hidden lg:inline-block'>02</span> Crew</NavLink>
          </li>
          <li className="text-white text-sm relative px-2 md:px-0 w-fit transition-all after:absolute after:h-[3px] after:top-[30px] after:left-0 after:w-0 hover:after:w-full after:bg-white hover:after:bg-white/25 hover:text-white md:after:top-[56px]" onClick={() => setMenuDisplay(prevValue => !prevValue)}>
            <NavLink className='font-medium' to="/technology"><span className='font-bold mr-2 md:hidden lg:inline-block'>03</span> Technology</NavLink>
          </li>
        </ul>

        {/* close button
        <img src={closeIcon} onClick={() => setMenuDisplay(!menuDisplay)} className="absolute top-8 right-6 order-1 md:hidden text-accent w-6 cursor-pointer" alt='close button' /> */}
      </div>
      {/* hamburger */}
      <div onClick={() => setMenuDisplay(prevValue => !prevValue)} className="absolute right-5 flex justify-between flex-col gap-1.5 md:hidden cursor-pointer rounded-md ">
        <img src={!menuDisplay ? hamburger : closeIcon} alt="hamburger" />
      </div>
    </nav>
  )
}
