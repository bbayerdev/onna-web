
import React from 'react'
import QrCode from '../home/images/qrCode'

const Section5 = () => {
    return (
        <section className='flex justify-center items-center'>
            <div className='flex flex-row p-10 border-[1px] w-4/5 rounded-lg'>
                <div className='w-2/3 space-y-10 py-6 px-10'>
                    <h1 className='font-bold text-2xl'>Baixe o APP</h1>
                    <p className='font-opensans text-xl'>Conectando mulheres e cuidando de saúde:</p>
                    <h1 className='text-red-900 font-extrabold text-5xl'>ONNA, juntas em cada ciclo!</h1>
                </div>
                <div className='flex'>
                    <button>
                        <QrCode />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Section5