import NavSubs from "./NavSubs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

const accountList = [
  "Open demat account",
  "Minor demat account",
  "NRI demat account",
  "Commodity",
  "Dematerialisation",
  "Fund transfer",
  "MTF",
  "Referral program"
];

const supportList = [
  "Contact us",
  "Support portal",
  "How to file a complaint?",
  "Status of your complaints",
  "Bulletin",
  "Circular",
  "Z-Connect blog",
  "Downloads"
];

const companyList = [
  "About",
  "Philosophy",
  "Press & media",
  "Careers",
  "Zerodha Cares (CSR)",
  "Zerodha.tech",
  "Open source"
];

const quickLinks=[
    "Upcoming IPOs",
"Brokerage charges",
"Market holidays",
"Economic calendar",
"Calculators",
"Markets",
"Sectors",
]


const Footer = () => {
  return ( 
    <div className="bg-[#FBFBFB] w-[100%] h-[auto] mainpad overflow-x-hidden">
      <div className="flex sm:flex-row flex-col py-4 justify-between gap-[2rem]">
          <div className="flex flex-col gap-3">
              <div>
              <img src="./zerodha-logo.jpg" alt="" className="h-[3rem] "/>
              </div>
              <p className="text-[.85rem] font-all text-gray-600">
                  © 2010 - 2025, Zerodha Broking Ltd. <br />All rights reserved.
              </p>
              <div className="flex text-[1.2rem] text-gray-600 gap-5 py-6 border-b-1 border-gray-300 items-center">
                  <FaInstagram className="rep"/>
                  <FaFacebookSquare className="rep"/>
                  <FaXTwitter className="rep"/>
                  <FaLinkedinIn className="rep"/>
              </div>
              <div className="flex text-[1.3rem] text-gray-600 gap-4">
                  <FaYoutube  className="rep"/>
                  <FaWhatsapp  className="rep"/>
                  <FaTelegram  className="rep"/>
              </div>
          </div>
          <NavSubs title={"Account"} list={accountList}></NavSubs>
          <NavSubs title={"Support"} list={supportList}></NavSubs>
          <NavSubs title={"Company"} list={companyList}></NavSubs>
          <NavSubs title={"Quick Links"} list={accountList}></NavSubs>
      </div>
      <p className="break-words text-[0.75rem] leading-8 font-all mt-4 text-gray-400 ">
        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF

  Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances

  Smart Online Dispute Resolution | Grievances Redressal Mechanism

  Investments in securities market are subject to market risks; read all the related documents carefully before investing.

  Attention investors: 1. Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2. Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.

  India's largest broker based on networth as per NSE. NSE broker factsheet

  "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
      </p>
      <div className="flex justify-between items-center lg:px-[7rem] lg:py-[1rem] flex-wrap lg:flex-nowrap px-[2rem] py-[3rem] lg:gap-0 gap-4">
        <a href="" className="rep text-[.9rem] text-gray-500 hover:text-blue-500">NSE</a>
        <a href="" className="rep text-[.9rem] text-gray-500 hover:text-blue-500">BSE</a>
        <a href="" className="rep text-[.9rem] text-gray-500 hover:text-blue-500">MCX</a>
        <a href="" className="rep text-[.9rem] text-gray-500 hover:text-blue-500">Terms and conditions</a>
        <a href="" className="rep text-[.9rem] text-gray-500 hover:text-blue-500">Policy & Procedures</a>
        <a href="" className="rep text-[.9rem] text-gray-500 hover:text-blue-500">Privacy Policy</a>
        <a href="" className="rep text-[.9rem] text-gray-500 hover:text-blue-500">Discloure</a>
        <a href="" className="rep text-[.9rem] text-gray-500 hover:text-blue-500">For Investor's Attention</a>
        <a href="" className="rep text-[.9rem] text-gray-500 hover:text-blue-500">Investor charter</a>
      </div>
    </div>
  )
}

export default Footer