import {NextRequest, NextResponse} from 'next/server';
import {Connection, PublicKey, clusterApiUrl}  from '@solana/web3.js';

const connection = new Connection(clusterApiUrl("devnet"));

export async function POST(req: NextRequest) {
    const {query, publicKey} = await req.json()

    const transactions = await tryFetchquery(publicKey);

    console.log(transactions, `for the query ${query}`)

    return NextResponse.json({transactions});
    
}


async function tryFetchquery(publicKey: string) {
    try{
        const signature = await connection.getSignaturesForAddress(new PublicKey(publicKey));

        const transactions = []
        for (const sig of signature) {
            const transaction = await connection.getTransaction(sig.signature);
            transactions.push(transaction);
        }

        return transactions;

    } catch (error) {
        console.log(error);
        return null;
    }
}