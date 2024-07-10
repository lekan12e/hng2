import React from 'react'
const NewsLetter = () => {
    const [email, setEmail] = React.useState('');
    const [submitted, setSubmitted] = React.useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        setSubmitted(true);
      };
  return (
    <div className='bg-[#FFF6E9] flex flex-col gap-6 items-center sm:px-5 py-6 px-[70px]'>
        <h1 className='text-base font-bold font-Mulish text-center uppercase'>Subscribe for updates on upcoming products!</h1>
        {submitted ? (
                <p className="text-green-600 font-Mulish font-medium text-base">Thank you for subscribing!</p>
                ) : (
                <form onSubmit={handleSubmit} className="mt-5 flex flex-col items-center sm:w-[300px] w-[527px] sm:mb-5 justify-center gap-[10px]">
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
    </div>
  )
}

export default NewsLetter