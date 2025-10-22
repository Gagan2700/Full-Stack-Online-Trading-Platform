import zero from "/zero.png"
import twenty from "/twenty.png"

const Pricing = () => {
  return (
    <div className='mainpad lg:mt-[10vh]'>
      <div>
        <div className="h-[40vh] flex flex-col items-center justify-center gap-2">
          <h1 className="text-[2.3rem] font-all text-gray-700">Charges</h1>
          <h3 className="text-[1.3rem] font-all text-gray-400">List of all charges and taxes</h3>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center mb-[2rem]">
          <div className="tara">
            <img src={zero} alt="" />
            <h1 className="text-[1.8rem] font-all text-gray-700">Free equity delivery</h1>
            <h3 className="text-[1rem] font-all text-gray-600 text-pretty text-center">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</h3>
          </div>
          <div className="tara">
            <img src={twenty} alt="" />
            <h1 className="text-[1.8rem] font-all text-gray-700"  >Intraday and F&O trades</h1>
            <h3 className="text-[1rem] font-all text-gray-600 text-pretty text-center">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</h3>
          </div>
          <div className="tara">
            <img src={zero} alt="" />
            <h1 className="text-[1.8rem] font-all text-gray-700">Free Direct MF</h1>
            <h3 className="text-[1rem] font-all text-gray-600 text-pretty text-center">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</h3>
          </div>
        </div>
      </div>
      <div className="my-[7rem]">
        <h1 className="text-[1.5rem] font-all text-gray-900">Charges for account opening</h1>
      <table className="border-1 border-black w-[100%] my-[2rem]">
        <thead>
          <tr>
            <th className="text-left">Type of account</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Online account</td>
            <td><span className="bg-green-600 p-1 text-white text-[0.75rem]">FREE</span></td>
          </tr>
          <tr>
            <td>Offline account</td>
            <td ><span className="bg-green-600 p-1 text-white text-[0.75rem]">FREE</span></td>
          </tr>
          <tr>
            <td>NRI account (offline only)</td>
            <td>₹ 500</td>
          </tr>
          <tr>
            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
            <td>₹ 500</td>
          </tr>
        </tbody>
      </table>
      </div>
      <div className="my-[7rem]">
        <h1 className="text-[1.5rem] font-all text-gray-900">Charges for account opening</h1>
      <table className="border-1 border-black w-[100%] my-[2rem]">
        <thead>
          <tr>
            <th className="text-left">Value of holdings	AMC</th>
            <th className="text-left">AMC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Up to ₹4 lakh</td>
            <td><span className="bg-green-600 p-1 text-white text-[0.75rem]">FREE</span></td>
          </tr>
          <tr>
            <td>₹4 lakh - ₹10 lakh</td>
            <td >₹ 100 per year, charged quarterly*</td>
          </tr>
          <tr>
            <td>Above ₹10 lakh</td>
            <td>₹ 300 per year, charged quarterly</td>
          </tr> 
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Pricing