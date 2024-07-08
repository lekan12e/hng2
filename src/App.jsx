import React from 'react'
import NavBar from './component/NavBar'
import BestSeller from './view/BestSeller';
import ComingSoon from './view/ComingSoon';
import NewsLetter from './view/NewsLetter';
import  Wines  from './view/Wines';
import Footer from './view/Footer';

const App = () => {
  const [open, setOpen] = React.useState(false);
  const toggle = () => {
    setOpen(!open);
  }

  return (
    <div className="flex flex-col">
      <NavBar />
      <BestSeller />
      <ComingSoon />
      <NewsLetter />
      <Wines />
      <div className='w-ful h-[40px] bg-sectionbg' />
      <Footer />
    </div>
  )
}

export default App
