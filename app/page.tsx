'use client'

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useState } from "react";

export default function Home() {

  const {publicKey} = useWallet();
  const [query, setQuery] = useState('');
  return (
   <div className="flex flex-col relative items-center justify-center h-screen">
    <div className="flex items-center absolute top-0 w-full justify-between p-4 border-b-2 border-gray-200">
      <h1 className="text-2xl font-bold">BlockSpeak</h1>
      <WalletMultiButton style={{}} />
    </div>
    <input type='text' disabled={!publicKey} onChange={(e) => setQuery(e.target.value)} value={query} className="p-2 text-black rounded-md" placeholder='Enter your query for the transaction' />
    <button disabled={!publicKey} className="p-2 rounded-md bg-blue-500 text-white">Search</button>
   </div>
  );
}
