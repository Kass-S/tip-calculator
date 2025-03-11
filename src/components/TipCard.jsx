import { Card } from 'flowbite-react'
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
                    <input type="number" className='input-bg rounded-lg' />
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
                        <input type="text" placeholder="Custom" className='input-bg rounded-md text-lg py-1 m-2' />
                    </div>
                </div>

                <div className='m-6 mb-2'>
                    <h5 className=" font-bold text-color-dark">
                        Number of People
                    </h5>
                    <input type="number" className='input-bg rounded-lg' />
                </div>
                
            </div>      
            
            <div className="max-w-lg inner-card-bg pl-8 p-4 m-6 rounded-2xl">
                <div className='my-6'>
                    <h5 className="font-bold text-white">
                        Tip Amount
                    </h5>
                    <p className="font-normal text-color">
                        / person
                    </p>
                </div>
                
                <div className='my-6'>
                    <h5 className="font-bold text-white">
                        Total
                    </h5>
                    <p className="font-normal text-color">
                        / person
                    </p>
                </div>

                <button className='text-white button-hover rounded-lg reset-btn-bg'>Reset</button>
                
            </div>
        </div>
    </div>
  )
}

export default TipCard