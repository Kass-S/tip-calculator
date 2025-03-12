import React, { useEffect, useState } from 'react'

const TipCard = () => {
    const [billInput, setBillInput] = useState(0);
    const [peopleNum, setPeopleNum] = useState(0);
    const [tip, setTip] = useState(0);

    let billNum = Number(billInput);
    let people = Number(peopleNum);
    let tipNum = Number(tip);
    tipNum /= 100;
    
    
    let tipAmount = 0.00;
    tipAmount = billNum * tipNum;
    let total = 0.00;
    total = billNum / people + tipAmount;
    
    

    // useEffect(() => {
    //     console.log(billInput);
    //     console.log(peopleNum);
    //     console.log(tip);
    // },[billInput, peopleNum, tip])

  return (
    <div className='flex justify-center'>
        <div className="lg:w-[56rem] grid lg:grid-cols-2 bg-white rounded-2xl lg:h-96">
            <div className=' max-w-lg'>
                <div className='m-6 mt-8'>
                    <h5 className=" font-bold text-color-dark">
                        Bill
                    </h5>
                    
                    <div className='input-icons'>
                        <img className='icon' src="/assets/icon-dollar.svg" alt="dollar sign icon" />
                        <input type="number" className='input-bg rounded-lg text-right w-full input-text-color font-bold text-xl stuff focus:ring-0' onChange={(e) => {setBillInput(e.target.value)}} />
                    </div>
                </div>
                
                <div className='my-6'>
                    <h5 className=" font-bold text-color-dark mx-6">
                        Select Tip %
                    </h5>
                    <div className='grid grid-cols-2 md:grid-cols-3 mx-4 font-bold'>
                        <button className='inner-card-bg rounded-md text-xl py-2 m-2 text-white button-hover' onClick={(e) => {setTip(5)}}>5%</button>
                        <button className='inner-card-bg rounded-md text-xl py-2 m-2 text-white button-hover' onClick={(e) => {setTip(10)}}>10%</button>
                        <button className='inner-card-bg rounded-md text-xl py-2 m-2 text-white button-hover' onClick={(e) => {setTip(15)}}>15%</button>
                        <button className='inner-card-bg rounded-md text-xl py-2 m-2 text-white button-hover' onClick={(e) => {setTip(25)}}>25%</button>
                        <button className='inner-card-bg rounded-md text-xl py-2 m-2 text-white button-hover' onClick={(e) => {setTip(50)}}>50%</button>
                        <input type="text" placeholder="Custom" className='input-bg rounded-md text-xl py-2 m-2 text-right input-text-color font-bold focus:ring-0 stuff' onChange={(e) => {setTip(e.target.value)}} /> 
                    </div>
                </div>

                <div className='m-6 mb-2'>
                    <h5 className=" font-bold text-color-dark">
                        Number of People
                    </h5>
                    
                    <div className='input-icons'>
                        <img className='icon' src="/assets/icon-person.svg" alt="people icon" />
                        <input type="number" className='input-bg rounded-lg text-right w-full input-text-color font-bold text-xl stuff focus:ring-0' onChange={(e) => {setPeopleNum(e.target.value)}} />
                    </div>
                </div>
                
            </div>      
            
            <div className="max-w-lg inner-card-bg p-4 m-6 rounded-2xl">
                <div className='m-2 my-3 md:m-6 flex justify-between'>
                    <div>
                        <h5 className="font-bold text-white">
                            Tip Amount
                        </h5>
                        <p className="font-normal text-color">
                            / person
                        </p>
                    </div>

                    <p className='money-number-color text-3xl font-bold'>$0.00</p>
                </div>
                
                <div className='m-2 my-3 md:m-6 flex justify-between'>
                    <div>
                        <h5 className="font-bold text-white">
                            Total
                        </h5>
                        <p className="font-normal text-color">
                            / person
                        </p>                        
                    </div>

                    <p className='money-number-color text-3xl font-bold'>$0.00</p>
                </div>

                <div className='mx-2 md:mx-6 mt-6 md:mt-28'>
                    <button className='input-text-color button-hover rounded-md reset-btn-bg p-2 w-full font-bold'>RESET</button>
                </div>

            </div>

        </div>
    </div>
  )
}

export default TipCard