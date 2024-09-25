import { createConfig } from "@ponder/core";
import { http } from "viem";
import { Abi} from "./abis/BridgingProtocol";


export default createConfig({
  networks:{
    arbitrum: {
      chainId: 421614,
      transport: http(process.env.ARBITRUM_SEPOLIA_RPC_URL),
    },
    base: {
      chainId: 84532 ,
      transport: http(process.env.BASE_SEPOLIA_RPC_URL),
    }
  },
  contracts: {
    Abi: {
      abi: Abi,
      address: "0x7E63A5f1a8F0B4d0934B2f2327DAED3F6bb2ee75",
      network:{
        arbitrum: {
        startBlock: 	53739951,
        endBlock: 82626394,
        },
        base: {
          address: "0x82B564983aE7274c86695917BBf8C99ECb6F0F8F",
          startBlock: 13946994,
        },
      },
    },
  },
})
