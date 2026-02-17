import React from 'react'
import TitleRFQ from './_components/rfqTitle'
import { FormRFQ } from './_components/rfqForm'


const page = () => {
    return (
        <div>
            {/* cjap taraf */}
            <div className='py-[16px] flex flex-col gap-[16px]'>
                <TitleRFQ />
                <FormRFQ/>
            </div>
        </div>
    )
}

export default page