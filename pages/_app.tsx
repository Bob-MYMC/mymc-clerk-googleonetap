import '@/styles/globals.css';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  GoogleOneTap,
} from '@clerk/nextjs';
import type { AppProps } from 'next/app';
import { CustomGoogleOneTap } from '@/app/components/CustomGoogleOneTap';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </header>
      <CustomGoogleOneTap>
        <h1>Google One Tap</h1>
      </CustomGoogleOneTap>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
