
import React from 'react'
import QrCode from '../home/images/qrCode'

const Section5 = () => {
    return (
        <section className='flex justify-center items-center'>
            <div className='flex md:flex-row flex-col p-10 border-[1px] md:w-4/5 rounded-lg'>
                <div className='md:w-2/3 space-y-10 py-6 px-10 w-full'>
                    <h1 className='font-bold md:text-2xl text-xl'>Baixe o APP</h1>
                    <p className='font-opensans md:text-xl text-1xl'>Conectando mulheres e cuidando de saúde:</p>
                    <h1 className='text-red-900 font-extrabold md:text-5xl text-3xl'>ONNA, juntas em cada ciclo!</h1>
                </div>
                <div className='flex justify-center'>
                    <button>
                        <QrCode />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Section5