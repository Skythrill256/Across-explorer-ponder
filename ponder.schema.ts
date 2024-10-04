import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  FundsDeposited: p.createTable({
    id: p.string(),
    amount: p.bigint(), // Asset Amount
    depositId: p.bigint(), // Transaction Hash (depositId)
    originChainId: p.bigint(), // Source Chain
    destinationChainId: p.bigint(), // Destination Chain
    relayerFeePct: p.bigint(),
    quoteTimestamp: p.bigint(), // Timestamp
    originToken: p.string(), // Source Token (srcToken)
    recipient: p.string(), // Recipient Address
    depositor: p.string(),
    message: p.string(),
  }),

  FilledRelay: p.createTable({
    id: p.string(),
    amount: p.bigint(), // Total Amount Transferred
    totalFilledAmount: p.bigint(),
    fillAmount: p.bigint(), // Asset Amount
    repaymentChainId: p.bigint(),
    originChainId: p.bigint(), // Source Chain
    destinationChainId: p.bigint(), // Destination Chain
    relayerFeePct: p.bigint(),
    realizedLpFeePct: p.bigint(),
    depositId: p.bigint(), // Transaction Hash (depositId)
    destinationToken: p.string(), // Destination Token (destToken)
    relayer: p.string(),
    depositor: p.string(),
    recipient: p.string(), // Recipient Address
    message: p.string(),
  }),

  PriceFeed: p.createTable({
    id: p.string(),
    assetSymbol: p.string(),
    assetPrice: p.bigint(), // Chainlink price value
    timestamp: p.bigint(), // Timestamp when price was fetched
  }),
}));
