import { SignUp as ClerkSignUp } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export type SignUpProps = {
  forceRedirectUrl: string;
  onSignIn?: () => void;
  position?: 'page' | 'modal';
};

const SignUp: React.FC<SignUpProps> = ({
  forceRedirectUrl,
  onSignIn,
  position = 'page',
}: SignUpProps) => {
  return (
    <div className="flex flex-col items-center max-w-89vw">
      <ClerkSignUp
        routing={'hash'}
        forceRedirectUrl={forceRedirectUrl}
        signInForceRedirectUrl={forceRedirectUrl}
        appearance={{
          layout: {
            showOptionalFields: false,
          },
          elements: {
            headerTitle: 'text-lg',
            headerSubtitle: 'text-sm',
            cardBox: 'shadow-none',
            card: 'shadow-none py-6',
            footer: 'hidden',
            logoBox: 'hidden',
          },
        }}
      />
      <>
        <hr />
        <div
          className={`py-5 w-full ${
            position === 'modal' ? 'bg-off-white' : ''
          }`}
        >
          <p className="text-center text-grey-midnight text-sm font-medium">
            Already have an account?{' '}
            <span
              className="font-bold text-black cursor-pointer"
              onClick={onSignIn}
            >
              Sign In
            </span>
          </p>
        </div>
      </>
    </div>
  );
};

export default SignUp;
