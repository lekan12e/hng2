import React from 'react'
import logo from "../assets/logo.svg"
import logoOrg from "../assets/Logo-org.svg"

const Footer = () => {
    const [email, setEmail] = React.useState('');
    const [submitted, setSubmitted] = React.useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        setSubmitted(true);
      };
  return (
    <footer className='flex flex-col border-t-[1px] border-black border-solid bg-sectionbg sm:px-5 py-section-y lg:px-section-x'>
        <div className='flex lg:flex-row sm:flex-col sm:justify-center  sm:items-center sm:gap-3 justify-between mt-6'>
            <img className='sm:hidden lg:block w-[368px] h-[175px]' src={logo} alt="logo" />
            <h1 className='text-base font-bold font-Mulish text-center uppercase'>Subscribe for updates on upcoming products!</h1>
            {submitted ? (
                <p className="text-green-600 font-Mulish font-medium text-base">Thank you for subscribing!</p>
                ) : (
                <form onSubmit={handleSubmit} className="lg:mt-5 sm:mt-1 flex flex-col items-center sm:w-[300px] lg:w-[527px] sm:mb-5 justify-center gap-[10px]">
                  <div  className='w-full'>
                    <input
                      type="email"
                      id="email"
                      placeholder='EMAIL'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className=" w-full px-[27px] h-[63px] py-5 font-bold text-base text-customGray bg-white font-Mulish border uppercase rounded-[5px] border-solid border-[#3B383A] outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-[#FCF8F3] font-Mulish font-bold text-base uppercase rounded-md py-[18px] px-[120px] bg-[#698474] shadow-custom"
                  >
                    Subscribe
                  </button>
                </form>
            )}
            <img className='sm:w-[192px] sm:h-24 lg:w-[368px] lg:h-[175px]' src={logoOrg} alt="logo" />
        </div>
        <div className='flex justify-center items-center sm:mt-5 lg:mt-32 mb-12'>
            <ul className='flex uppercase lg:flex-row sm:grid grid-cols-2 justify-between gap-6 font-Mulish sm:text-xs font-bold lg:text-base'>
                <li>©2024, old barrel</li>
                <li><a href="#">refund policy</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">terms of service</a></li>
                <li><a href="#">contact informartion</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer