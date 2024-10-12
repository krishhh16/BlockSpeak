import { NextRequest, NextResponse } from 'next/server';
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { ChatOpenAI } from "@langchain/openai";

const llm = new ChatOpenAI({
    model: "gpt-4o-mini",
    temperature: 0,
    apiKey: process.env.OPEN_AI_API_KEY
});

const connection = new Connection(clusterApiUrl("devnet"));

export async function POST(req: NextRequest) {
    const { query, publicKey } = await req.json()

    const transactions = await tryFetchquery(publicKey);
    const llmInvoke = await llm.invoke([
        { role: "user", content: "I have a JSON object with details about the web3 transactions I've performed." },
        { role: "assistant", content: "Got it! How can I assist you with your transaction data?" },
        { role: "user", content: `How many transactions are there where I've received 5 SOL?
    My public key is '${publicKey}'., here's the list of transactions: [
  {
    "blockTime": 1728668342,
    "meta": {
      "computeUnitsConsumed": 450,
      "err": null,
      "fee": 15000,
      "innerInstructions": [],
      "loadedAddresses": {
        "readonly": [],
        "writable": []
      },
      "logMessages": [
        "Program ComputeBudget111111111111111111111111111111 invoke [1]",
        "Program ComputeBudget111111111111111111111111111111 success",
        "Program ComputeBudget111111111111111111111111111111 invoke [1]",
        "Program ComputeBudget111111111111111111111111111111 success",
        "Program 11111111111111111111111111111111 invoke [1]",
        "Program 11111111111111111111111111111111 success"
      ],
      "postBalances": [
        14999985000,
        17847591680,
        1,
        1
      ],
      "postTokenBalances": [],
      "preBalances": [
        20000000000,
        12847591680,
        1,
        1
      ],
      "preTokenBalances": [],
      "rewards": [],
      "status": {
        "Ok": null
      }
    },
    "slot": 332220496,
    "transaction": {
      "message": {
        "header": {
          "numReadonlySignedAccounts": 0,
          "numReadonlyUnsignedAccounts": 2,
          "numRequiredSignatures": 1
        },
        "accountKeys": [
          "FCfrMJLWHAhAB6NPZekpsGWy1MZYyMKF7QGhJ25ayWU3",
          "FXgHYnZFbzGGaQtUc2wchCQHQphnKVrPZkEKpuwbSH3a",
          "11111111111111111111111111111111",
          "ComputeBudget111111111111111111111111111111"
        ],
        "recentBlockhash": "4CwBawNxjjYGUL5feMuSgU614yfa4gVQyB1LhiUx8WrJ",
        "instructions": [
          {
            "accounts": [],
            "data": "3DVGviTXKAPH",
            "programIdIndex": 3,
            "stackHeight": null
          },
          {
            "accounts": [],
            "data": "LKoyXd",
            "programIdIndex": 3,
            "stackHeight": null
          },
          {
            "accounts": [
              0,
              1
            ],
            "data": "3Bxs411qCLLRMUsZ",
            "programIdIndex": 2,
            "stackHeight": null
          }
        ],
        "indexToProgramIds": {}
      },
      "signatures": [
        "5gXkjQN9yc3r452zHy9ZN7VqfQXMtrVkh1otmC976ohD3fdXSfYdzzr3Lt4YJsCFpUuwibp24DVJYcaTg89vSjjW"
      ]
    }
  },
  {
    "blockTime": 1728668234,
    "meta": {
      "computeUnitsConsumed": 150,
      "err": null,
      "fee": 5000,
      "innerInstructions": [],
      "loadedAddresses": {
        "readonly": [],
        "writable": []
      },
      "logMessages": [
        "Program 11111111111111111111111111111111 invoke [1]",
        "Program 11111111111111111111111111111111 success"
      ],
      "postBalances": [
        413824540382647,
        20000000000,
        1
      ],
      "postTokenBalances": [],
      "preBalances": [
        413829540387647,
        15000000000,
        1
      ],
      "preTokenBalances": [],
      "rewards": [],
      "status": {
        "Ok": null
      }
    },
    "slot": 332220208,
    "transaction": {
      "message": {
        "header": {
          "numReadonlySignedAccounts": 0,
          "numReadonlyUnsignedAccounts": 1,
          "numRequiredSignatures": 1
        },
        "accountKeys": [
          "devwuNsNYACyiEYxRNqMNseBpNnGfnd4ZwNHL7sphqv",
          "FCfrMJLWHAhAB6NPZekpsGWy1MZYyMKF7QGhJ25ayWU3",
          "11111111111111111111111111111111"
        ],
        "recentBlockhash": "HRCC5bL3wQuUxdekP97H1a2KXdae9NSNWduaMsnGpKWU",
        "instructions": [
          {
            "accounts": [
              0,
              1
            ],
            "data": "3Bxs411qCLLRMUsZ",
            "programIdIndex": 2,
            "stackHeight": null
          }
        ],
        "indexToProgramIds": {}
      },
      "signatures": [
        "XyZp8iYafna5yfnsDWrY3bP9VtN8bdNveDsRffmFyhsVeQjis7cCmMJ66gfCn6xkspzM1NNxqcLRznDVTosymMr"
      ]
    }
  },
  {
    "blockTime": 1728668223,
    "meta": {
      "computeUnitsConsumed": 150,
      "err": null,
      "fee": 5000,
      "innerInstructions": [],
      "loadedAddresses": {
        "readonly": [],
        "writable": []
      },
      "logMessages": [
        "Program 11111111111111111111111111111111 invoke [1]",
        "Program 11111111111111111111111111111111 success"
      ],
      "postBalances": [
        413829540387647,
        15000000000,
        1
      ],
      "postTokenBalances": [],
      "preBalances": [
        413834540392647,
        10000000000,
        1
      ],
      "preTokenBalances": [],
      "rewards": [],
      "status": {
        "Ok": null
      }
    },
    "slot": 332220178,
    "transaction": {
      "message": {
        "header": {
          "numReadonlySignedAccounts": 0,
          "numReadonlyUnsignedAccounts": 1,
          "numRequiredSignatures": 1
        },
        "accountKeys": [
          "devwuNsNYACyiEYxRNqMNseBpNnGfnd4ZwNHL7sphqv",
          "FCfrMJLWHAhAB6NPZekpsGWy1MZYyMKF7QGhJ25ayWU3",
          "11111111111111111111111111111111"
        ],
        "recentBlockhash": "E3qQbaJstFfdJdBRhuBEThp4sFx6vcbfJK3Ls1JhXqRd",
        "instructions": [
          {
            "accounts": [
              0,
              1
            ],
            "data": "3Bxs411qCLLRMUsZ",
            "programIdIndex": 2,
            "stackHeight": null
          }
        ],
        "indexToProgramIds": {}
      },
      "signatures": [
        "Tw5gRruv7XLjMK8mtWMeSmAH4fdiJrNt6AbQUvBpSFcQJXbDZ5hyU8u6sYriPSV54G4uvKmLAFvYufius6dj59r"
      ]
    }
  },
  {
    "blockTime": 1728422954,
    "meta": {
      "computeUnitsConsumed": 150,
      "err": null,
      "fee": 5000,
      "innerInstructions": [],
      "loadedAddresses": {
        "readonly": [],
        "writable": []
      },
      "logMessages": [
        "Program 11111111111111111111111111111111 invoke [1]",
        "Program 11111111111111111111111111111111 success"
      ],
      "postBalances": [
        403686078752647,
        10000000000,
        1
      ],
      "postTokenBalances": [],
      "preBalances": [
        403691078757647,
        5000000000,
        1
      ],
      "preTokenBalances": [],
      "rewards": [],
      "status": {
        "Ok": null
      }
    },
    "slot": 331561206,
    "transaction": {
      "message": {
        "header": {
          "numReadonlySignedAccounts": 0,
          "numReadonlyUnsignedAccounts": 1,
          "numRequiredSignatures": 1
        },
        "accountKeys": [
          "devwuNsNYACyiEYxRNqMNseBpNnGfnd4ZwNHL7sphqv",
          "FCfrMJLWHAhAB6NPZekpsGWy1MZYyMKF7QGhJ25ayWU3",
          "11111111111111111111111111111111"
        ],
        "recentBlockhash": "BoZMyRGkp3s5iWC7vkcvsEvEGJ1LdG1N8jwhhVD2TPGz",
        "instructions": [
          {
            "accounts": [
              0,
              1
            ],
            "data": "3Bxs411qCLLRMUsZ",
            "programIdIndex": 2,
            "stackHeight": null
          }
        ],
        "indexToProgramIds": {}
      },
      "signatures": [
        "2csHbrXN5whAmmgXwRwJk4GrvQivYYf1XNFKgwQUHZK81q8DHEWQVcPmdFhaEJoWR3oyJbv8PTr4ZVL6Qtudnjr3"
      ]
    }
  },
  {
    "blockTime": 1728422942,
    "meta": {
      "computeUnitsConsumed": 150,
      "err": null,
      "fee": 5000,
      "innerInstructions": [],
      "loadedAddresses": {
        "readonly": [],
        "writable": []
      },
      "logMessages": [
        "Program 11111111111111111111111111111111 invoke [1]",
        "Program 11111111111111111111111111111111 success"
      ],
      "postBalances": [
        403696078762647,
        5000000000,
        1
      ],
      "postTokenBalances": [],
      "preBalances": [
        403701078767647,
        0,
        1
      ],
      "preTokenBalances": [],
      "rewards": [],
      "status": {
        "Ok": null
      }
    },
    "slot": 331561174,
    "transaction": {
      "message": {
        "header": {
          "numReadonlySignedAccounts": 0,
          "numReadonlyUnsignedAccounts": 1,
          "numRequiredSignatures": 1
        },
        "accountKeys": [
          "devwuNsNYACyiEYxRNqMNseBpNnGfnd4ZwNHL7sphqv",
          "FCfrMJLWHAhAB6NPZekpsGWy1MZYyMKF7QGhJ25ayWU3",
          "11111111111111111111111111111111"
        ],
        "recentBlockhash": "DYNfMEZWQiit9LZwePf282tcRv2sqhpHVxLVaQuCnuS4",
        "instructions": [
          {
            "accounts": [
              0,
              1
            ],
            "data": "3Bxs411qCLLRMUsZ",
            "programIdIndex": 2,
            "stackHeight": null
          }
        ],
        "indexToProgramIds": {}
      },
      "signatures": [
        "2Ae5NjME4i5Z5RAKhjDFUZsTXB79AWan9XrKPhuYsq9XgYWUNAFKW8Y651F6aKDLA6HeHUszehwtQuJoWdhP1mXf"
      ]
    }
  }
]` },
        { role: "assistant", content: '[{"transaction_id": "tx_2","amount_received": 5},{"transaction_id": "tx_3","amount_received": 5},{"transaction_id": "tx_4","amount_received": 5},{"transaction_id": "tx_5","amount_received": 5}]'},
        {role: "user", content: `${query}, here's my public key: ${publicKey}, and here's my transaction history ${JSON.stringify(transactions, null, 2)}`}
    ]);

    console.log(llmInvoke.content)

    return NextResponse.json({ transactions });

}


async function tryFetchquery(publicKey: string) {
    try {
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