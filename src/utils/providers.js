'use client'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
  RainbowKitAuthenticationProvider,
  createAuthenticationAdapter,
  darkTheme
} from '@rainbow-me/rainbowkit';
import { WagmiProvider, useAccount } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import { SessionProvider } from 'next-auth/react';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { SiweMessage } from 'siwe';
import { useCallback,useState } from 'react';
import { useRouter } from 'next/navigation';
import merge from 'lodash.merge';

const myTheme = merge(darkTheme(), {
  colors: {
    accentColor: '#000000',
  },
} );


const config = getDefaultConfig({
  appName: 'mintair',
  projectId: '995ec4a46918a4edfc235b087296b53f',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true,
});

const queryClient = new QueryClient();


const createAuthenticationAdapterWithStatus=(setStatus,router)=> createAuthenticationAdapter({
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
      },
    );

    if (verifyRes.ok) {
      setStatus('authenticated');
      router.push('/dashboard');
      return true;
    } else {
      setStatus('unauthenticated')
      return false;
    }
    },
  
    signOut: async () => {
      await fetch('/api/logout');
      setStatus('unauthenticated');
    
    },
  });

const Providers =({children})=>{
  const router=useRouter()
    const [status,setStatus] = useState("unauthenticated")
    const authenticationAdapter = useCallback(createAuthenticationAdapterWithStatus(setStatus,router), [setStatus,router]);

    return(
        <WagmiProvider config={config}>
          <SessionProvider refetchInterval={0}>
      <QueryClientProvider client={queryClient}>
           <RainbowKitAuthenticationProvider
          adapter={authenticationAdapter}
          status={status}
        >
        <RainbowKitProvider theme={myTheme}>
        {children}
        </RainbowKitProvider>
        </RainbowKitAuthenticationProvider>
      </QueryClientProvider>
      </SessionProvider>
    </WagmiProvider>
    )
}

export default Providers