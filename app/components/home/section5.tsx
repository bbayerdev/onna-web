
import React from 'react'
import QrCode from '../home/images/qrCode'

const Section5 = () => {
    return (
        <section className='flex justify-center items-center'>
            <div className='flex flex-row p-10 border-2 border-black w-2/3 rounded-lg'>
                <div className='w-2/3 space-y-10 py-5'>
                    <h1 className='font-bold text-5xl'>Baixe o APP</h1>
                    <p className='font-opensans text-2xl'>Conectando mulheres e cuidando de saúde:</p>
                    <h1 className='text-red-900 font-bold text-6xl'>ONNA, juntas em cada ciclo!</h1>
                </div>
                <div className='flex justify-center items-center border-2'>
                    <button>
                        <QrCode />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Section5