import { Card } from 'flowbite-react'
import React from 'react'

const TipCard = () => {

  return (
    <div className='flex justify-center'>
        <Card className="lg:w-[56rem]">
            <h5 className=" font-bold text-color-dark">
                Bill
            </h5>
            <h5 className=" font-bold text-color-dark">
                Select Tip %
            </h5>
            <h5 className=" font-bold text-color-dark">
                Number of People
            </h5>
            
            <Card className="max-w-sm inner-card-bg">
                <h5 className="font-bold text-white">
                    Tip Amount
                </h5>
                <p className="font-normal text-color">
                    / person
                </p>
                <h5 className="font-bold text-white">
                    Total
                </h5>
                <p className="font-normal text-color">
                    / person
                </p>
            </Card>
        </Card>
    </div>
  )
}

export default TipCard