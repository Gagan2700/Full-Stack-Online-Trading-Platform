import Hero from "../Components.jsx/Hero"
import Heroparas from "../Components.jsx/Heroparas"
import logo from "/ecosystem.png"
import press from "/pressLogos.png";
import Anchor from "../Components.jsx/Anchor";
import Create from "../Components.jsx/Create";
import RuppeComponent from "../Components.jsx/RuppeComponent";
import logo1 from "/zero.png";
import logo2 from "/twenty.png";
import varsity from "/education.svg";


const zerodhaProps = {
  customerFirstTitle: "Customer-first always",
  customerFirstDescription: "That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.",
  
  noSpamTitle: "No spam or gimmicks",
  noSpamDescription: 'No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.',

  universeTitle: "The Zerodha universe",
  universeDescription: "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",

  betterWithMoneyTitle: "Do better with money",
  betterWithMoneyDescription: "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",

  pricingtitle:"Unbeatable pricing",
  pricingDescription:"We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.",

  lastTitle:"Free and open source title",
  lastpara:"Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.",
  
  latestPara :"TradingQ&A, the most active trading and investment community in India for all your market related queries.",
};


const Home = () => {

  return (
    <>
        <Hero></Hero>
        <div className="w-[100%] mainpad min-h-[90vh] ">
          <div className="flex lg:flex-row flex-col justify-between mb-[4rem] gap-10">
            <div className="flex flex-col gap-8 justify-between lg:w-[60%] mr-10">
                <h1 className="text-gray-700 text-[1.6rem] font-all mb-[.5rem]">Trust with confidence</h1>
                <Heroparas title={zerodhaProps.customerFirstTitle} para={zerodhaProps.customerFirstDescription}></Heroparas>
                <Heroparas title={zerodhaProps.noSpamTitle} para={zerodhaProps.noSpamDescription}></Heroparas>
                <Heroparas title={zerodhaProps.universeTitle} para={zerodhaProps.universeDescription}></Heroparas>
                <Heroparas title={zerodhaProps.betterWithMoneyTitle} para={zerodhaProps.betterWithMoneyDescription}></Heroparas>
            </div>
            <div className="flex flex-col items-center">
                <img src={logo} alt="" className="lg:w-auto lg:h-auto h-[30%] md:w-[50%]"/>
                <div className="flex gap-7 mt-4">
                  <Anchor text="Explore our products"></Anchor>
                  <Anchor text="Kite demo"></Anchor>
                </div>
            </div>
          </div>
          <div className="flex justify-center mb-[7rem] hover:opacity-70 cursor-pointer"><img src={press} alt="" /></div>
          <div className="flex justify-between mb-[4rem] gap-3 lg:flex-row flex-col">
            <div>
              <Heroparas title={zerodhaProps.pricingtitle} para={zerodhaProps.pricingDescription} ></Heroparas>
              <Anchor text="See Pricing"></Anchor>
            </div>
            <div className="flex gap-8">
              <RuppeComponent logo={logo1} text="Free account opening"></RuppeComponent>
              <RuppeComponent logo={logo1} text="Free equity delivery and direct mutual funds"></RuppeComponent>
              <RuppeComponent logo={logo2} text="Intraday and F&O"></RuppeComponent>
            </div>
          </div>
          <div className="my-[7rem] flex items-center gap-[10rem] lg:flex-row flex-col">
            <img src={varsity} alt="varsity image" />
            <div className="flex flex-col gap-[3rem]">
              <div className="flex flex-col gap-[2rem] justify-center">
                <Heroparas title={zerodhaProps.lastTitle} para={zerodhaProps.lastpara}></Heroparas>
                <Anchor text={"Varsity"}></Anchor>
              </div>
              <div className="flex flex-col gap-[2rem] justify-center">
                <Heroparas para={zerodhaProps.latestPara}></Heroparas>
                <Anchor text={"TradingQ&A"}></Anchor>
              </div>
            </div>
          </div>
        </div>
        <Create></Create>
    </>
  )
}

export default Home