import {ponder} from "@/generated"


ponder.on("Abi:FundsDeposited", async ({ event, context }) => {
  const FundsDeposited = context.db.FundsDeposited!;
  
  const {
    amount,
    depositId,
    originChainId,
    destinationChainId,
    relayerFeePct,
    quoteTimestamp,
    originToken,
    recipient,
    depositor,
    message
  } = event.args;

  // Store the FundsDeposited event in the database
  await FundsDeposited.create({
    id: `${context.network.chainId}-${depositId}`,
    data: {
      amount,
      depositId,
      originChainId,
      destinationChainId,
      relayerFeePct,
      quoteTimestamp,
      originToken,
      recipient,
      depositor,
      message,
      hash: event.transaction.hash,
    },
  });

  console.log(`FundsDeposited: ${depositId} from ${originChainId} to ${destinationChainId}`);
});

ponder.on("Abi:FilledRelay", async ({ event, context }) => {
  const FilledRelay = context.db.FilledRelay!;
  const FundsDeposited = context.db.FundsDeposited!;

  const {
    amount,
    totalFilledAmount,
    fillAmount,
    repaymentChainId,
    originChainId,
    destinationChainId,
    relayerFeePct,
    realizedLpFeePct,
    depositId,
    destinationToken,
    relayer,
    depositor,
    recipient,
    message
  } = event.args;

  // Store the FilledRelay event in the database
  await FilledRelay.create({
    id: `${context.network.chainId}-${depositId}`,
    data: {
      amount,
      totalFilledAmount,
      fillAmount,
      repaymentChainId,
      originChainId,
      destinationChainId,
      relayerFeePct,
      realizedLpFeePct,
      depositId,
      destinationToken,
      relayer,
      depositor,
      recipient,
      message,
      hash: event.transaction.hash,
    },
  });

  // Find the corresponding FundsDeposited event
  const sourceTransaction = await FundsDeposited.findUnique({
    id: `${originChainId}-${depositId}`,
  });

  if (sourceTransaction) {
    console.log(`Mapped depositId: ${depositId} from source to destination.`);
    // Link the source transaction to the FilledRelay event
    await FilledRelay.update({
      id: `${context.network.chainId}-${depositId}`,
      data: {
        sourceTransactionId: sourceTransaction.id,
      },
    });
  } else {
    console.log(`No source transaction found for depositId: ${depositId}`);
  }
});
