import { useWallet } from '@solana/wallet-adapter-react';
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'sonner';

function Input() {
    const { publicKey } = useWallet();
    const [query, setQuery] = useState('');
    const handleSearch = async (e: any) => {
        e.preventDefault();
        toast("Fetching the transactions");
        const response = await axios.post("/api/search", { query, publicKey });
        if (response.data.success) {
            toast.success("Fetched the transactions");
        } else {
            toast.error("Fetch couldn't happen");
        }
    }
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <input type='text' disabled={!publicKey} onChange={(e) => setQuery(e.target.value)} value={query} className="p-2 mb-4 border-2 border-gray-300 w-[75%] text-black block rounded-md" placeholder='Enter your query for the transaction' />
            <button onClick={handleSearch} className="p-2 rounded-md bg-blue-500 text-white">Search</button>
        </div>
    )
}

export default Input
