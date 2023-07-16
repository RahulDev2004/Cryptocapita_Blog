---
title: "Demystifying Blockchain — Part-2 (How a Blockchain Transaction works)"
excerpt: "Ornare cum cursus laoreet sagittis nunc fusce posuere per euismod dis vehicula a, semper fames lacus maecenas dictumst pulvinar neque enim non potenti. Torquent hac sociosqu eleifend potenti."
publishDate: "2023-07-16T11:39:36.050Z"
image: "https://miro.medium.com/v2/resize:fit:828/0*9TP_MB3ptxcvsZhy"
category: "blockchain"
author: "pranshu-jha"
tags: [web3, blockchain, development, decentralization]
---

**Note** : If you didn’t read the Part-1 of demystifying blockchain, Check that out here “[Anatomy of Blockchain](https://medium.com/@hlodevs/demystifying-blockchain-part-1-anatomy-of-a-blockchain-4dfb50461145)”.

Let’s imagine a user uses a blockchain to complete a transaction. What actually occurs along the chain? What steps are needed to complete the transaction from creation to final confirmation? The procedure you don’t really observe looks like this:

**Creation of a transaction**: By establishing a digital signature that authenticates their identity and the transaction’s specifics, including the sender, receiver, and amount, a user can start a transaction.

**Broadcasting the transaction**: A pool of unconfirmed transactions is created after the user broadcasts the transaction to the blockchain network’s nodes, who then verify it.

**Verification of the transaction**: To verify the transaction and include it in a new block, nodes in the network compete with one another. Checking the digital signature, making sure the sender has enough money, and making sure the transaction complies with the network’s consensus rules are all steps in the process of validating a transaction.

**Creation of a new block**: The transaction and any other unconfirmed transactions from the pool are included in a new block that is created by the node after it has validated the transaction. A timestamp, a special hash, and a reference to the preceding block in the chain are also included in each block.

**Verification of the block**: A new block is broadcast to all network nodes as soon as it is formed. The block is verified by the nodes, who make sure that every transaction in the block is legitimate and that the block complies with the network’s consensus guidelines.

**Adding the block to the blockchain**: A permanent and unchangeable record of the transaction is created once the block has been confirmed and added to the blockchain. All nodes in the network update their copies of the blockchain to include the new block after the block is appended to the end of the chain.

**Confirmation of the transaction**: Once a transaction is included in a block and added to the blockchain, it is regarded as confirmed. Depending on the blockchain network, different amounts of confirmations must occur before a transaction is deemed final, but generally speaking, the more confirmations a transaction has, the more safe and final it is.

These are the fundamental actions taken by a user to complete a transaction on a blockchain. The method of validating transactions, producing new blocks, and adding them to the blockchain may differ slightly depending on the particular blockchain network and consensus mechanism employed, but the fundamental concepts stay the same.

Lets us see about “ **How Consensus Mechanisms Shape Blockchain Performance** “ in the next part. Please share the blog if you feels it is really help full. Thank you.
