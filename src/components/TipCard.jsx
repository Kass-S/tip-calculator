import React, { useEffect, useState } from 'react'

const TipCard = () => {
    const [billInput, setBillInput] = useState('');
    const [peopleNum, setPeopleNum] = useState('');
    const [tip, setTip] = useState('');

    const [tipAmount, setTipAmount] = useState('0.00');
    const [total, setTotal] = useState('0.00');

    let billNum = Number(billInput);
    let people = Number(peopleNum);
    let tipNum = Number(tip);
    
    const ResetTips = () => {
        setBillInput('');
        setPeopleNum('');
        setTip('');
        setTipAmount("0.00");
        setTotal("0.00");
    }
   
        

    useEffect(() => {
        const Calculator = () => {
            tipNum /= 100;
            
            if(billNum > 0 && people > 0){
                let preTip = billNum * tipNum
                let preTipPerson = preTip / people;
                
                setTipAmount(preTipPerson.toFixed(2));
                setTotal((billNum / people + preTipPerson).toFixed(2));
            }else{
                setTipAmount("0.00");
                setTotal("0.00");
            }
            //add billNum == 0 and people == 0 conditionals where the focus turns orange and tells the user they cant be 0    
        }
        Calculator();
    },[billInput, peopleNum, tip])

  return (
    <div className='flex justify-center'>
        <div className="lg:w-[56rem] grid lg:grid-cols-2 bg-white rounded-2xl lg:h-96">
            <div className=' max-w-lg'>
                <div className='m-6 mt-7'>
                    <h5 className=" font-bold text-color-dark">
                        Bill
                    </h5>
                    
                    <div className='input-icons'>
                        <img className='icon' src="/assets/icon-dollar.svg" alt="dollar sign icon" />
                        <input type="text" placeholder='0' className='input-bg rounded-lg text-right w-full input-text-color font-bold text-xl stuff focus:ring-0' value={billInput} onChange={(e) => {setBillInput(e.target.value)}} />
                    </div>
                </div>
                
                <div className='my-6'>
                    <h5 className=" font-bold text-color-dark mx-6">
                        Select Tip %
                    </h5>

                    
                    <div className='grid grid-cols-2 md:grid-cols-3 mx-4 font-bold'>

                        <button className={`rounded-md text-xl py-2 m-2  button-hover dark-card-bg ${
                            tip == 5
                            ? "dark-btn-bg input-text-color"
                            : "dark-card-bg text-white"
                        }`} onClick={() => {setTip(5)}}>5%</button>

                        <button className={`rounded-md text-xl py-2 m-2 button-hover ${
                            tip == 10
                            ? "dark-btn-bg input-text-color"
                            : "dark-card-bg text-white"
                        }`} onClick={() => {setTip(10)}}>10%</button>

                        <button className={`rounded-md text-xl py-2 m-2 button-hover ${
                            tip == 15
                            ? "dark-btn-bg input-text-color"
                            : "dark-card-bg text-white"
                        }`} onClick={() => {setTip(15)}}>15%</button>

                        <button className={`rounded-md text-xl py-2 m-2 button-hover ${
                            tip == 25
                            ? "dark-btn-bg input-text-color"
                            : "dark-card-bg text-white"
                        }`} onClick={() => {setTip(25)}}>25%</button>

                        <button className={`rounded-md text-xl py-2 m-2 button-hover ${
                            tip == 50
                            ? "dark-btn-bg input-text-color"
                            : "dark-card-bg text-white"
                        }`} onClick={() => {setTip(50)}}>50%</button>
                        
                        <input type="text" placeholder="Custom" className='input-bg rounded-md text-xl py-2 m-2 text-right input-text-color font-bold focus:ring-0 stuff' value={tip} onChange={(e) => {setTip(e.target.value)}} /> 
                    </div>
                </div>

                <div className='m-6 mb-2'>
                    <h5 className=" font-bold text-color-dark">
                        Number of People
                    </h5>
                    
                    <div className='input-icons'>
                        <img className='icon' src="/assets/icon-person.svg" alt="people icon" />
                        <input type="text" placeholder='0' className='input-bg rounded-lg text-right w-full input-text-color font-bold text-xl stuff focus:ring-0' value={peopleNum} onChange={(e) => {setPeopleNum(e.target.value)}} />
                    </div>
                </div>
                
            </div>      
            
            <div className="max-w-lg dark-card-bg p-4 m-6 rounded-2xl">
                <div className='m-2 my-3 md:m-6 flex justify-between'>
                    <div>
                        <h5 className="font-bold text-white">
                            Tip Amount
                        </h5>
                        <p className="font-normal text-color">
                            / person
                        </p>
                    </div>

                    <p className='money-number-color text-3xl font-bold'>${tipAmount}</p>
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

                    <p className='money-number-color text-3xl font-bold'>${total}</p>
                </div>

                <div className='mx-2 md:mx-6 mt-6 md:mt-28'>
                    <button className={`input-text-color rounded-md  p-2 w-full font-bold   ${
                        tip == '' && peopleNum == '' && billInput == ''
                        ? 'disabled-btn-bg'
                        : ' dark-btn-bg button-hover'
                    }`} disabled={
                        tip == '' && peopleNum == '' && billInput == ''
                        ? true
                        : false
                    }  onClick={ResetTips}>RESET</button>
                </div>

            </div>

        </div>
    </div>
  )
}

export default TipCard