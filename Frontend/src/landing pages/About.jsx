import logo from '/nithinKamath.jpg'

const About = () => {
  return (
    <>
      <div className="h-[45vh] flex items-center justify-center flex-col mt-[2rem] border-gray-200 border-b-1 mainmar mb-[8rem]">
        <h1 className="text-[1.6rem] font-all text-gray-800">We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>
      <div className="flex justify-between mainpad mb-[8rem] flex-col md:flex-row">
        <div className="flex flex-col gap-6 md:w-[45%] lg:pl-[6.5rem] ">
          <p className="aboutps">
            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
          </p>
          <p className="aboutps">
            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
          </p>
          <p className="aboutps">
            Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:w-[45%] lg:pr-[6.5rem]">
          <p className="aboutps">
            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
          </p>
          <p className="aboutps">
            <span>Rainmatter</span>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
          </p>
          <p className="aboutps">
            And yet, we are always up to something new every day. Catch up on the latest updates on our <span>blog</span> or see what the media is <span>saying about us</span> or learn more about our business and product <span>philosophies</span>.
          </p>
        </div>
      </div>
      <div className='flex flex-col justify-between items-center'>
        <h1 className='text-[1.5rem] text-gray-800 font-all'>People</h1>
        <div className="flex flex-col md:flex-row justify-between mainpad mb-[9rem] mt-[5rem] items-center gap-[3rem]">
          <div className='flex flex-col gap-6 md:w-[35%] md:pl-[6.5rem] justify-between items-center'>
            <img src={logo} alt="" className='rounded-full w-[20rem]'/>
            <h1 className='text-[1.2rem]'>Nithin kamath</h1>
            <p className='aboutps'>Founder,CEO</p>
          </div>
          <div className='flex flex-col gap-4 md:w-[57%] md:pr-[6.5rem]'>
            <p className='aboutps'>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p className='aboutps'>
              He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC)
            </p>
            <p className='aboutps'>
              Playing basketball is his zen.
            </p>
            <p className='aboutps'>
              Connect on <span>Homepage</span> / <span>TradingQnA</span> / <span>Twitter</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About