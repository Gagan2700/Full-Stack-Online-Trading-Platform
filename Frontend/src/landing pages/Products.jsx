import Anchor from "../Components.jsx/Anchor"
import SignupButton from "../Components.jsx/SignupButton"
import ImageRight from "../Components.jsx/ImageRight"
import ImageLeft from "../Components.jsx/ImageLeft"
import logo from '/kite.png'
import coin from '/coin.png'
import varsity from "/varsity.png"
import console from "/console.png"
import api from "/kiteconnect.png"

const Products = () => {
  const para={
    kiteTitle:"Kite",
    kitePara:"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",

    consoleTitle:"Console",
    consolePara : "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",

    coinTitle :"Coin",
    coinPara :"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",

    api:"Kite Connect API",
    para:"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.",

    varsity:"Varsity mobile",
    varsityPara:"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",

  }

  const zerodhaUniverse = [
  { 
    img: "/zerodhaFundhouse.png",
    description:
      "Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
  },
  {
    img: "/sensibullLogo.svg",
    description:
      "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
  },
  {
    img: "/tijori.svg",
    description:
      "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
  },
  {
    img: "/streakLogo.png",
    description:
      "Systematic trading platform that allows you to create and backtest strategies without coding."
  },
  {
    img: "/smallcaseLogo.png",
    description:
      "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
  },
  {
    img: "/dittoLogo.png",
    description:
      "Personalized advice on life and health insurance. No spam and no mis-selling."
  }
];


  return (
    <div className="mainpad">
      <div className='md:h-[45vh] flex flex-col items-center md:mt-[13vh] mt-[5vh] md:px-[5rem] px-[1rem] md:py-[5rem] py-[1rem] justify-center gap-[1rem] border-b-1 border-gray-200 h-[25vh]'>
        <h1 className="text-[1.85rem] font-all">Zerodha Products</h1>
        <p className="text-[1.3rem] font-all text-gray-700 text-center">Sleek, modern, and intuitive trading platforms</p>
        <div className="flex gap-1">
          <p>Check out our </p>
          <Anchor text="investment offerings"></Anchor>
        </div>
      </div>
      <ImageRight title="Kite" img={logo} anh="Try Kite Demo" para={para.kitePara}></ImageRight>
      <ImageLeft title={para.consoleTitle} para={para.consolePara} anh="Learn more" img={console}></ImageLeft>
      <ImageRight title={para.coinTitle} img={coin} anh="Coin" para={para.coinPara}></ImageRight>
      <ImageLeft title={para.kiteTitle} para={para.kitePara} anh="Kite Connect" img={api}></ImageLeft>
      <ImageRight title={para.varsity} img={varsity} anh="Coin" para={para.varsityPara}></ImageRight>
      <h1 className="text-center text-[1.35rem] text-gray-700 font-all my-[3rem]">Want to know more about our technology stack? Check out the <span>Zerodha.tech</span> blog.</h1>
      <section className="text-center flex flex-col gap-[5rem] my-[7rem]">
        <div>
            <h1 className="text-3xl font-semibold mb-4">The Zerodha Universe</h1>
          <p className="text-gray-600 mb-12">
            Extend your trading and investment experience even further with our partner platforms
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
            {zerodhaUniverse.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img src={item.img} alt={item.name} className="h-14 mb-4" />
                <p className="text-gray-500 text-sm max-w-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <SignupButton></SignupButton>
      </section>
    </div>
  )
}

export default Products