import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import React from 'react'

function Navbar() {
    return (
        <div className="flex items-center absolute top-0 w-full justify-between p-4 border-b-2 border-gray-200">
            <h1 className="text-2xl text-white font-bold">BlockSpeak</h1>
            <WalletMultiButton style={{}} />
        </div>
    )
}

export default Navbar
