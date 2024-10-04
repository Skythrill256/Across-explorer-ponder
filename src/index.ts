import { ponder } from "@/generated";

// Define the event argument types for both Across and Chainlink

type FundsDepositedEventArgs = {
  amount: bigint;
  depositId: bigint;
  originChainId: bigint;
  destinationChainId: bigint;
  relayerFeePct: bigint;
  quoteTimestamp: bigint;
  originToken: `0x${string}`;
  recipient: `0x${string}`;
  depositor: `0x${string}`;
  message: string;
};

type FilledRelayEventArgs = {
  amount: bigint;
  totalFilledAmount: bigint;
  fillAmount: bigint;
  repaymentChainId: bigint;
  originChainId: bigint;
  destinationChainId: bigint;
  relayerFeePct: bigint;
  realizedLpFeePct: bigint;
  depositId: bigint;
  destinationToken: `0x${string}`;
  relayer: `0x${string}`;
  depositor: `0x${string}`;
  recipient: `0x${string}`;
  message: string;
};

type ChainlinkPriceUpdatedEventArgs = {
  price: bigint;
  roundId: bigint;
  startedAt: bigint;
  updatedAt: bigint;
  answeredInRound: bigint;
};

// Handle the FundsDeposited event
ponder.on("Abi:FundsDeposited", async ({ event, context }) => {
  const args = event.args as FundsDepositedEventArgs;
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
    message,
  } = args;

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

// Handle the FilledRelay event
ponder.on("Abi:FilledRelay", async ({ event, context }) => {
  const args = event.args as FilledRelayEventArgs;
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
    message,
  } = args;

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

// Handle Chainlink Price Feed updates
ponder.on("PriceFeed:ChainlinkPriceUpdated", async ({ event, context }) => {
  const args = event.args as ChainlinkPriceUpdatedEventArgs;
  const PriceFeed = context.db.PriceFeed!;

  const { price, updatedAt } = args;

  // Store Chainlink price feed data in the database
  await PriceFeed.create({
    id: `${context.network.chainId}-${event.transaction.hash}`,
    data: {
      assetSymbol: "ETH/USD", // Adjust according to the asset being monitored
      assetPrice: price,
      timestamp: updatedAt,
    },
  });

  console.log(`Price feed updated: ${price.toString()} at ${updatedAt}`);
});
