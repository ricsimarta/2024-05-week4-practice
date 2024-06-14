const transactions = [
  {
    type: "deposit",
    amount: 20000
  },
  {
    type: "deposit",
    amount: 15000
  },
  {
    type: "withdrawal",
    amount: 8000
  },
  {
    type: "deposit",
    amount: 50000
  },
  {
    type: "withdrawal",
    amount: 12000
  },
  {
    type: "withdrawal",
    amount: 30000
  }
]

const largestTransaction = (transArr) => {
  /* let largest = transArr[0];

  for (let i = 1; i < transArr.length; i++) {
    if (transArr[i].amount > largest.amount) {
      largest = transArr[i];
    }
  }

  return largest; */

  return transArr.sort((a, b) => b.amount - a.amount)[0];
}

// console.log(largestTransaction(transactions));

const filterTransactions = (transArr, transType) => {
  return transArr.filter((transaction) => transaction.type === transType);
}

console.log(filterTransactions(transactions, "deposit"));

/* 
HOMEWORK:
 - create a currentBalance function, which returns the current amount of money on the account
 - create a transactionsHistory function, which returns a string of the transactions like this: 20000 + 15000 - 8000 + 50000 - 27000 = currentBalance()
*/