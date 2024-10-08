'use client'

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import axios from "axios";
import { useState } from "react";
import {toast, Toaster} from 'sonner'


export default function Home() {
  const {publicKey} = useWallet();
  const [query, setQuery] = useState('');
  const handleSearch = async (e: any) => {
    e.preventDefault();
    toast("Fetching the transactions");
    const response = await axios.post("/api/search", {query, publicKey});
    if (response.data.success) {
      toast.success("Fetched the transactions");
    } else {
      toast.error("Fetch couldn't happen");
    }
  }

  return (
   <div className="flex flex-col relative items-center justify-center h-screen">
    <div className="flex items-center absolute top-0 w-full justify-between p-4 border-b-2 border-gray-200">
      <h1 className="text-2xl font-bold">BlockSpeak</h1>
      <WalletMultiButton style={{}} />
    </div>
    <input type='text' disabled={!publicKey} onChange={(e) => setQuery(e.target.value)} value={query} className="p-2 mb-4 border-2 border-gray-300 w-[75%] text-black rounded-md" placeholder='Enter your query for the transaction' />
    <button onClick={handleSearch} className="p-2 rounded-md bg-blue-500 text-white">Search</button>
   </div>
  );
}
