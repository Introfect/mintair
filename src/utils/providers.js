'use client'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { RainbowKitSiweNextAuthProvider,GetSiweMessageOptions, } from '@rainbow-me/rainbowkit-siwe-next-auth';


const config = getDefaultConfig({
  appName: 'mintair',
  projectId: '995ec4a46918a4edfc235b087296b53f',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true,
});

const getSiweMessageOptions= () => ({
    statement: 'Do you want to sign in to Mintair application',
  });

const queryClient = new QueryClient();

const Providers =({children})=>{
    return(
        <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitSiweNextAuthProvider getSiweMessageOptions={getSiweMessageOptions}>
        <RainbowKitProvider>
        {children}
        </RainbowKitProvider>
        </RainbowKitSiweNextAuthProvider>
      </QueryClientProvider>
    </WagmiProvider>
    )
}

export default Providers