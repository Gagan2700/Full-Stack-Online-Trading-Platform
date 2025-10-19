import Create from "./Create"
import logo from "/homeHero.png"

const Hero = () => {
  return (
    <div className="min-h-[100vh] w-[100%] flex flex-col justify-center items-center pt-[16vh] ">
        <img src={logo} alt="" className="w-[55rem] "/>
        <Create title="Invest in everything" para="Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more."></Create>
    </div>
  )
}

export default Hero