'use client'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
  RainbowKitAuthenticationProvider,
  createAuthenticationAdapter
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
import { SiweMessage } from 'siwe';

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


const authenticationAdapter = createAuthenticationAdapter({
    getNonce: async () => {
      const response = await fetch('/api/nonce');
      const nonce= await response.json()
      return nonce;
    },
  
    createMessage: ({ nonce, address, chainId }) => {
      return new SiweMessage({
        domain: window.location.host,
        address,
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        version: '1',
        chainId,
        nonce,
      });
    },
  
    getMessageBody: ({ message }) => {
      return message.prepareMessage();
    },
  
    verify: async ({ message, signature }) => {
      const verifyRes = await fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, signature }),
      });
  
      return Boolean(verifyRes.ok);
    },
  
    signOut: async () => {
      await fetch('/api/logout');
    },
  });

const Providers =({children})=>{
    return(
        <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
           <RainbowKitAuthenticationProvider
          adapter={authenticationAdapter}
          status='unauthenticated'
        >
        <RainbowKitProvider>
        {children}
        </RainbowKitProvider>
        </RainbowKitAuthenticationProvider>
      </QueryClientProvider>
    </WagmiProvider>
    )
}

export default Providers