import { IoMdSearch } from "react-icons/io";
import { FiUser, FiBriefcase, FiPieChart, FiCreditCard } from 'react-icons/fi';
import Acronynm from "../Components.jsx/Acronynm";

const Support = () => {
  const helpCenterData = [
  {
    title: "Account Opening",
    icon:<FiUser></FiUser>,
    items: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary"
    ]
  },
  {
    title: "Your Zerodha Account",
    icon:<FiBriefcase></FiBriefcase>,
    items: [
      "Your Profile",
      "Account modification",
      "Client Master Report (CMR) and Depository Participant (DP)",
      "Nomination",
      "Transfer and conversion of securities"
    ]
  },
  {
    title: "Kite",
    icon:<FiPieChart></FiPieChart>,
    items: [
      "IPO",
      "Trading FAQs",
      "Margin Trading Facility (MTF) and Margins",
      "Charts and orders",
      "Alerts and Nudges",
      "General"
    ]
  },
  {
    title: "Funds",
    icon:<FiCreditCard></FiCreditCard>,
    items: [
      "Add money",
      "Withdraw money",
      "Add bank accounts",
      "eMandates"
    ]
  }
];
  return (
    <div className="lg:mt-[9vh]">
      <div className="h-[30vh] bg-[#F6F6F6] mainpad pt-[3rem] flex flex-col gap-6">
        <div className="flex justify-between">
          <h1 className="text-[2.2rem] font-all font-semibold text-gray-600">
            Support Portal
          </h1>
          <button className="bg-[#387ED1] hover:bg-black text-white px-[1.4rem] h-[2.5rem] cursor-pointer font-all rounded-sm">
            My Tickets
          </button>
        </div>
        <div
          className="flex bg-white px-[1.5rem] py-[.9rem] gap-4 border border-gray-300 
          rounded-sm transition-shadow duration-300 focus-within:shadow-[0_0_12px_rgba(0,0,0,0.2)]"
        >
          <IoMdSearch className="text-[1.5rem] text-gray-500" />
          <input
            type="text"
            className="w-full focus:outline-none font-all placeholder:opacity-80"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
          />
        </div>
      </div>
      <div className="mainpad py-[1rem] flex md:justify-between lg:flex-row flex-col gap-3">
        <div className="md:w-[68%] md:h-[100vh]">
          {
            helpCenterData.map((el,index)=>(
              <Acronynm key={index} icon={el.icon} title={el.title} items={el.items} id={index}></Acronynm>
            ) 
          )
          }
        </div>
        <div className="md:w-[28%] flex flex-col gap-7 md:mt-[2.4rem]">
          <div className="border-[#FF9100] border-l-4 w-[100%] p-2 bg-[#FFF4E6]">
            <ul>
              <li className="underline underline-offset-1 text-blue-400 hover:text-gray-800 cursor-pointer p-2">Trading hoilday on Festive seasons</li>
            </ul>
          </div>
          <div className="w-[100%]">
            <table className="font-all w-[100%]">
              <thead>
                <tr>
                  <th className="text-gray-700 bg-gray-200 p-3 text-start">Quick Links</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1.Track account opening</td></tr>
                <tr><td>2.Track segment activation</td></tr>
                <tr><td>3.Intraday margins</td></tr>
                <tr><td>3.Intraday margins</td></tr>
                <tr><td>5.Learn how to create a ticket</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
