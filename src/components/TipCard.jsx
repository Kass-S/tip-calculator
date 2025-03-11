import { Card } from 'flowbite-react'
import React from 'react'

const TipCard = () => {

  return (
    <div className='flex justify-center'>
        <div className="lg:w-[56rem] grid grid-cols-2 bg-white rounded-2xl lg:h-96">
            <div className='m-6 max-w-lg'>
                <h5 className=" font-bold text-color-dark">
                    Bill
                </h5>

                <h5 className=" font-bold text-color-dark">
                    Select Tip %
                </h5>
                
                <h5 className=" font-bold text-color-dark">
                    Number of People
                </h5>
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
                
            </div>
        </div>
    </div>
  )
}

export default TipCard