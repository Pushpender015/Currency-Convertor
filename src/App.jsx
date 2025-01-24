import { useState } from 'react'
import './App.css'
import { InputBox } from './Components'
import useCurrencyInfo from './Hooks/useCurrencyInfo'

function App() {

  const [amount , setAmount] = useState()
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const [covertedAmount , setConvertedAmount] = useState()

  // use custom hook
  const currencyInfo = useCurrencyInfo(from)

  // retrive all keys of conerted currency [FOR EX: usd to which one (that key)]
  const options = Object.keys(currencyInfo)

  // covert swap to variable
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(covertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-center overflow-y-hidden "
        style={{
            backgroundImage: `url('https://watermark.lovepik.com/photo/40172/7536.jpg_wh1200.jpg')`,

        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault(); // pervent default isliye use krte hai kuki hum jab bhi form submit krte hai to 
                                            // directly kahi jaya hai or hum nhi chahte ki kahi jaye data 
                                            // that why USE "preventDefault()"
                        convert();
                       
                    }}
                >
                    
                    <div className="w-full mb-1">
                        <InputBox
                            label="From" 
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            onAmountChange={(amount) => setAmount(amount)}
                            selectCurrency={from}
                        />
                    </div>
                    
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" 
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To" 
                            amount={covertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}  
                            amountDisable   // if you want to person don't change the lower value
                        />
                    </div>
                    
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        {`Convert ${from.toUpperCase()} to ${to.toUpperCase()}`} 
                    </button>

                </form>
            </div>
        </div>
    </div>
);
}

export default App
