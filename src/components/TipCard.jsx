import React from 'react'

const TipCard = () => {

  return (
    <div className='flex justify-center'>
        <div className="lg:w-[56rem] grid grid-cols-2 bg-white rounded-2xl lg:h-96">
            <div className=' max-w-lg'>
                <div className='m-6 mt-8'>
                    <h5 className=" font-bold text-color-dark">
                        Bill
                    </h5>
                    <img src="/assets/icon-dollar.svg" alt="" />
                    <input type="number" className='input-bg rounded-lg text-right w-full input-text-color' />
                </div>
                
                <div className='my-6'>
                    <h5 className=" font-bold text-color-dark mx-6">
                        Select Tip %
                    </h5>
                    <div className='grid grid-cols-3 mx-4'>
                        <button className='inner-card-bg rounded-md text-lg py-1 m-2 text-white button-hover'>5%</button>
                        <button className='inner-card-bg rounded-md text-lg py-1 m-2 text-white button-hover'>10%</button>
                        <button className='inner-card-bg rounded-md text-lg py-1 m-2 text-white button-hover'>15%</button>
                        <button className='inner-card-bg rounded-md text-lg py-1 m-2 text-white button-hover'>25%</button>
                        <button className='inner-card-bg rounded-md text-lg py-1 m-2 text-white button-hover'>50%</button>
                        <input type="text" placeholder="Custom" className='input-bg rounded-md text-lg py-1 m-2 text-right input-text-color' /> 
                    </div>
                </div>

                <div className='m-6 mb-2'>
                    <h5 className=" font-bold text-color-dark">
                        Number of People
                    </h5>
                    <input type="number" className='input-bg rounded-lg text-right w-full input-text-color' />
                </div>
                
            </div>      
            
            <div className="max-w-lg inner-card-bg p-4 m-6 rounded-2xl">
                <div className='m-6'>
                    <h5 className="font-bold text-white">
                        Tip Amount
                    </h5>
                    <p className="font-normal text-color">
                        / person
                    </p>
                </div>
                
                <div className='m-6'>
                    <h5 className="font-bold text-white">
                        Total
                    </h5>
                    <p className="font-normal text-color">
                        / person
                    </p>
                </div>

                <div className='m-6 mt-16'>
                    <button className='text-white button-hover rounded-lg reset-btn-bg p-2 w-full '>Reset</button>
                </div>

            </div>

        </div>
    </div>
  )
}

export default TipCard