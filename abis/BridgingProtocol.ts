export const Abi = [
  
 {
      "inputs": [
        {
          "internalType": "address",
          "name": "_wrappedNativeTokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "_depositQuoteTimeBuffer",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "_fillDeadlineBuffer",
          "type": "uint32"
        },
        {
          "internalType": "contract IERC20",
          "name": "_l2Usdc",
          "type": "address"
        },
        {
          "internalType": "contract ITokenMessenger",
          "name": "_cctpTokenMessenger",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "ClaimedMerkleLeaf",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "DepositsArePaused",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "DisabledRoute",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ExpiredFillDeadline",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FillsArePaused",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidChainId",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidCrossDomainAdmin",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidDepositorSignature",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidExclusiveRelayer",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidExclusivityDeadline",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidFillDeadline",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidHubPool",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMerkleLeaf",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMerkleProof",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidPayoutAdjustmentPct",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidQuoteTimestamp",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidRelayerFeePct",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidSlowFillRequest",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MaxTransferSizeExceeded",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MsgValueDoesNotMatchInputAmount",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NoSlowFillsInExclusivityWindow",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotCrossChainCall",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotCrossDomainAdmin",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotEOA",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotExclusiveRelayer",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "RelayFilled",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "previousAdmin",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "AdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "beacon",
          "type": "address"
        }
      ],
      "name": "BeaconUpgraded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "rootBundleId",
          "type": "uint256"
        }
      ],
      "name": "EmergencyDeleteRootBundle",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "originToken",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "destinationChainId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "name": "EnabledDepositRoute",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountToReturn",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "chainId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "refundAmounts",
          "type": "uint256[]"
        },
        {
          "indexed": true,
          "internalType": "uint32",
          "name": "rootBundleId",
          "type": "uint32"
        },
        {
          "indexed": true,
          "internalType": "uint32",
          "name": "leafId",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "l2TokenAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "refundAddresses",
          "type": "address[]"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "ExecutedRelayerRefundRoot",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "totalFilledAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fillAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "repaymentChainId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "originChainId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "destinationChainId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "int64",
          "name": "relayerFeePct",
          "type": "int64"
        },
        {
          "indexed": false,
          "internalType": "int64",
          "name": "realizedLpFeePct",
          "type": "int64"
        },
        {
          "indexed": true,
          "internalType": "uint32",
          "name": "depositId",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "destinationToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "relayer",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "depositor",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "message",
          "type": "bytes"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "message",
              "type": "bytes"
            },
            {
              "internalType": "int64",
              "name": "relayerFeePct",
              "type": "int64"
            },
            {
              "internalType": "bool",
              "name": "isSlowRelay",
              "type": "bool"
            },
            {
              "internalType": "int256",
              "name": "payoutAdjustmentPct",
              "type": "int256"
            }
          ],
          "indexed": false,
          "internalType": "struct SpokePool.RelayExecutionInfo",
          "name": "updatableRelayData",
          "type": "tuple"
        }
      ],
      "name": "FilledRelay",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "inputToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "outputToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "inputAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "outputAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "repaymentChainId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "originChainId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint32",
          "name": "depositId",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "fillDeadline",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "exclusivityDeadline",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "exclusiveRelayer",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "relayer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "depositor",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "message",
          "type": "bytes"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "updatedRecipient",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "updatedMessage",
              "type": "bytes"
            },
            {
              "internalType": "uint256",
              "name": "updatedOutputAmount",
              "type": "uint256"
            },
            {
              "internalType": "enum V3SpokePoolInterface.FillType",
              "name": "fillType",
              "type": "uint8"
            }
          ],
          "indexed": false,
          "internalType": "struct V3SpokePoolInterface.V3RelayExecutionEventInfo",
          "name": "relayExecutionInfo",
          "type": "tuple"
        }
      ],
      "name": "FilledV3Relay",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "originChainId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "destinationChainId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "int64",
          "name": "relayerFeePct",
          "type": "int64"
        },
        {
          "indexed": true,
          "internalType": "uint32",
          "name": "depositId",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "quoteTimestamp",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "originToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "depositor",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "message",
          "type": "bytes"
        }
      ],
      "name": "FundsDeposited",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isPaused",
          "type": "bool"
        }
      ],
      "name": "PausedDeposits",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isPaused",
          "type": "bool"
        }
      ],
      "name": "PausedFills",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint32",
          "name": "rootBundleId",
          "type": "uint32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "relayerRefundRoot",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "slowRelayRoot",
          "type": "bytes32"
        }
      ],
      "name": "RelayedRootBundle",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "int64",
          "name": "newRelayerFeePct",
          "type": "int64"
        },
        {
          "indexed": true,
          "internalType": "uint32",
          "name": "depositId",
          "type": "uint32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "depositor",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "updatedRecipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "updatedMessage",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "depositorSignature",
          "type": "bytes"
        }
      ],
      "name": "RequestedSpeedUpDeposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "updatedOutputAmount",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint32",
          "name": "depositId",
          "type": "uint32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "depositor",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "updatedRecipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "updatedMessage",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "depositorSignature",
          "type": "bytes"
        }
      ],
      "name": "RequestedSpeedUpV3Deposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "inputToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "outputToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "inputAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "outputAmount",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "originChainId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint32",
          "name": "depositId",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "fillDeadline",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "exclusivityDeadline",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "exclusiveRelayer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "depositor",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "message",
          "type": "bytes"
        }
      ],
      "name": "RequestedV3SlowFill",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "newHubPool",
          "type": "address"
        }
      ],
      "name": "SetHubPool",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint32",
          "name": "newL1Gas",
          "type": "uint32"
        }
      ],
      "name": "SetL1Gas",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "l2Token",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "tokenBridge",
          "type": "address"
        }
      ],
      "name": "SetL2TokenBridge",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "l2Token",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "l1Token",
          "type": "address"
        }
      ],
      "name": "SetRemoteL1Token",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "SetXDomainAdmin",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountToReturn",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "chainId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint32",
          "name": "leafId",
          "type": "uint32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "l2TokenAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "TokensBridged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        }
      ],
      "name": "Upgraded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "inputToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "outputToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "inputAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "outputAmount",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "destinationChainId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint32",
          "name": "depositId",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "quoteTimestamp",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "fillDeadline",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "exclusivityDeadline",
          "type": "uint32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "depositor",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "exclusiveRelayer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "message",
          "type": "bytes"
        }
      ],
      "name": "V3FundsDeposited",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "EMPTY_RELAYER",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "EMPTY_REPAYMENT_CHAIN_ID",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "INFINITE_FILL_DEADLINE",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MAX_TRANSFER_SIZE",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MESSENGER",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "UPDATE_V3_DEPOSIT_DETAILS_HASH",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "_initialDepositId",
          "type": "uint32"
        },
        {
          "internalType": "address",
          "name": "_crossDomainAdmin",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_hubPool",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_l2Eth",
          "type": "address"
        }
      ],
      "name": "__OvmSpokePool_init",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "_initialDepositId",
          "type": "uint32"
        },
        {
          "internalType": "address",
          "name": "_crossDomainAdmin",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_hubPool",
          "type": "address"
        }
      ],
      "name": "__SpokePool_init",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "cctpTokenMessenger",
      "outputs": [
        {
          "internalType": "contract ITokenMessenger",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "chainId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "crossDomainAdmin",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "originToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "destinationChainId",
          "type": "uint256"
        },
        {
          "internalType": "int64",
          "name": "relayerFeePct",
          "type": "int64"
        },
        {
          "internalType": "uint32",
          "name": "quoteTimestamp",
          "type": "uint32"
        },
        {
          "internalType": "bytes",
          "name": "message",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "depositor",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "inputToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "outputToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "inputAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "outputAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "destinationChainId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "exclusiveRelayer",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "quoteTimestamp",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "fillDeadline",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "exclusivityPeriod",
          "type": "uint32"
        },
        {
          "internalType": "bytes",
          "name": "message",
          "type": "bytes"
        }
      ],
      "name": "depositExclusive",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "depositor",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "originToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "destinationChainId",
          "type": "uint256"
        },
        {
          "internalType": "int64",
          "name": "relayerFeePct",
          "type": "int64"
        },
        {
          "internalType": "uint32",
          "name": "quoteTimestamp",
          "type": "uint32"
        },
        {
          "internalType": "bytes",
          "name": "message",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "depositFor",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "depositQuoteTimeBuffer",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "depositor",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "inputToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "outputToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "inputAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "outputAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "destinationChainId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "exclusiveRelayer",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "quoteTimestamp",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "fillDeadline",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "exclusivityPeriod",
          "type": "uint32"
        },
        {
          "internalType": "bytes",
          "name": "message",
          "type": "bytes"
        }
      ],
      "name": "depositV3",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "depositor",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "inputToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "outputToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "inputAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "outputAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "destinationChainId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "exclusiveRelayer",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "fillDeadlineOffset",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "exclusivityPeriod",
          "type": "uint32"
        },
        {
          "internalType": "bytes",
          "name": "message",
          "type": "bytes"
        }
      ],
      "name": "depositV3Now",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "rootBundleId",
          "type": "uint256"
        }
      ],
      "name": "emergencyDeleteRootBundle",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "enabledDepositRoutes",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "rootBundleId",
          "type": "uint32"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "amountToReturn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "chainId",
              "type": "uint256"
            },
            {
              "internalType": "uint256[]",
              "name": "refundAmounts",
              "type": "uint256[]"
            },
            {
              "internalType": "uint32",
              "name": "leafId",
              "type": "uint32"
            },
            {
              "internalType": "address",
              "name": "l2TokenAddress",
              "type": "address"
            },
            {
              "internalType": "address[]",
              "name": "refundAddresses",
              "type": "address[]"
            }
          ],
          "internalType": "struct SpokePoolInterface.RelayerRefundLeaf",
          "name": "relayerRefundLeaf",
          "type": "tuple"
        },
        {
          "internalType": "bytes32[]",
          "name": "proof",
          "type": "bytes32[]"
        }
      ],
      "name": "executeRelayerRefundLeaf",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "depositor",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "exclusiveRelayer",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "inputToken",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "outputToken",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "inputAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "outputAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "originChainId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint32",
                  "name": "depositId",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "fillDeadline",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "exclusivityDeadline",
                  "type": "uint32"
                },
                {
                  "internalType": "bytes",
                  "name": "message",
                  "type": "bytes"
                }
              ],
              "internalType": "struct V3SpokePoolInterface.V3RelayData",
              "name": "relayData",
              "type": "tuple"
            },
            {
              "internalType": "uint256",
              "name": "chainId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "updatedOutputAmount",
              "type": "uint256"
            }
          ],
          "internalType": "struct V3SpokePoolInterface.V3SlowFill",
          "name": "slowFillLeaf",
          "type": "tuple"
        },
        {
          "internalType": "uint32",
          "name": "rootBundleId",
          "type": "uint32"
        },
        {
          "internalType": "bytes32[]",
          "name": "proof",
          "type": "bytes32[]"
        }
      ],
      "name": "executeV3SlowRelayLeaf",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "fillDeadlineBuffer",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "fillStatuses",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "depositor",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "exclusiveRelayer",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "inputToken",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "outputToken",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "inputAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "outputAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "originChainId",
              "type": "uint256"
            },
            {
              "internalType": "uint32",
              "name": "depositId",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "fillDeadline",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "exclusivityDeadline",
              "type": "uint32"
            },
            {
              "internalType": "bytes",
              "name": "message",
              "type": "bytes"
            }
          ],
          "internalType": "struct V3SpokePoolInterface.V3RelayData",
          "name": "relayData",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "repaymentChainId",
          "type": "uint256"
        }
      ],
      "name": "fillV3Relay",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "depositor",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "exclusiveRelayer",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "inputToken",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "outputToken",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "inputAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "outputAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "originChainId",
              "type": "uint256"
            },
            {
              "internalType": "uint32",
              "name": "depositId",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "fillDeadline",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "exclusivityDeadline",
              "type": "uint32"
            },
            {
              "internalType": "bytes",
              "name": "message",
              "type": "bytes"
            }
          ],
          "internalType": "struct V3SpokePoolInterface.V3RelayData",
          "name": "relayData",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "repaymentChainId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "updatedOutputAmount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "updatedRecipient",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "updatedMessage",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "depositorSignature",
          "type": "bytes"
        }
      ],
      "name": "fillV3RelayWithUpdatedDeposit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCurrentTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "hubPool",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "_initialDepositId",
          "type": "uint32"
        },
        {
          "internalType": "address",
          "name": "_crossDomainAdmin",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_hubPool",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "l1Gas",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "l2Eth",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes[]",
          "name": "data",
          "type": "bytes[]"
        }
      ],
      "name": "multicall",
      "outputs": [
        {
          "internalType": "bytes[]",
          "name": "results",
          "type": "bytes[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "numberOfDeposits",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "pause",
          "type": "bool"
        }
      ],
      "name": "pauseDeposits",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "pause",
          "type": "bool"
        }
      ],
      "name": "pauseFills",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pausedDeposits",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pausedFills",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "proxiableUUID",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "recipientCircleDomainId",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "relayerRefundRoot",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "slowRelayRoot",
          "type": "bytes32"
        }
      ],
      "name": "relayRootBundle",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "remoteL1Tokens",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "depositor",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "exclusiveRelayer",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "inputToken",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "outputToken",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "inputAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "outputAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "originChainId",
              "type": "uint256"
            },
            {
              "internalType": "uint32",
              "name": "depositId",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "fillDeadline",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "exclusivityDeadline",
              "type": "uint32"
            },
            {
              "internalType": "bytes",
              "name": "message",
              "type": "bytes"
            }
          ],
          "internalType": "struct V3SpokePoolInterface.V3RelayData",
          "name": "relayData",
          "type": "tuple"
        }
      ],
      "name": "requestV3SlowFill",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "rootBundles",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "slowRelayRoot",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "relayerRefundRoot",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newCrossDomainAdmin",
          "type": "address"
        }
      ],
      "name": "setCrossDomainAdmin",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "originToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "destinationChainId",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "name": "setEnableRoute",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newHubPool",
          "type": "address"
        }
      ],
      "name": "setHubPool",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "newl1Gas",
          "type": "uint32"
        }
      ],
      "name": "setL1GasLimit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "l2Token",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "l1Token",
          "type": "address"
        }
      ],
      "name": "setRemoteL1Token",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "l2Token",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenBridge",
          "type": "address"
        }
      ],
      "name": "setTokenBridge",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "depositor",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "depositId",
          "type": "uint32"
        },
        {
          "internalType": "uint256",
          "name": "updatedOutputAmount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "updatedRecipient",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "updatedMessage",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "depositorSignature",
          "type": "bytes"
        }
      ],
      "name": "speedUpV3Deposit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "tokenBridges",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes[]",
          "name": "data",
          "type": "bytes[]"
        }
      ],
      "name": "tryMulticall",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "returnData",
              "type": "bytes"
            }
          ],
          "internalType": "struct MultiCallerUpgradeable.Result[]",
          "name": "results",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newImplementation",
          "type": "address"
        }
      ],
      "name": "upgradeTo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newImplementation",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "upgradeToAndCall",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "usdcToken",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "wrappedNativeToken",
      "outputs": [
        {
          "internalType": "contract WETH9Interface",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }

] as const
