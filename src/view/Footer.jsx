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
    <footer className='flex flex-col border-t-[1px] border-black border-solid bg-sectionbg py-section-y px-section-x'>
        <div className='flex justify-between mt-6'>
            <img className='w-[368px] h-[175px]' src={logo} alt="logo" />
            {submitted ? (
                <p className="text-green-600 font-Mulish font-medium text-base">Thank you for subscribing!</p>
                ) : (
                <form onSubmit={handleSubmit} className="mt-5 flex flex-col items-center w-[527px] justify-center gap-[10px]">
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
            <img className='w-[368px] h-[175px]' src={logoOrg} alt="logo" />
        </div>
        <div className='flex justify-center items-center mt-32 mb-12'>
            <ul className='flex uppercase justify-between gap-6 font-Mulish font-bold text-base'>
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