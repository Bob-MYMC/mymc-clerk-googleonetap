import { SignIn as ClerkSignIn } from '@clerk/nextjs';
import { useEffect } from 'react';

export type SignInProps = {
  forceRedirectUrl: string;
  onSignUp?: () => void;
  position?: 'page' | 'modal';
};

const SignIn: React.FC<SignInProps> = ({
  forceRedirectUrl,
  onSignUp,
  position = 'page',
}: SignInProps) => {


  return (
    <div className="flex flex-col items-center max-w-89vw">
      <ClerkSignIn
        routing={'hash'}
        forceRedirectUrl={forceRedirectUrl}
        signUpForceRedirectUrl={forceRedirectUrl}
        appearance={{
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
            className={`w-full py-5 ${
              position === 'modal' ? 'bg-off-white' : ''
            }`}
          >
            <p className="text-center text-grey-midnight text-sm font-medium">
              {"Don't have an account? "}
              <span
                className="font-bold text-black cursor-pointer"
                onClick={onSignUp}
              >
                Sign up
              </span>
            </p>
          </div>
          <hr />
          <div
            className={`w-full py-5 ${
              position === 'modal' ? 'bg-off-white' : ''
            }`}
          >
            <p className="text-center text-grey-midnight text-sm font-medium">
              {'Trouble signing in? '}
              <a
                href={process.env.NEXT_PUBLIC_CLERK_HELP_URL || ''}
                className="font-bold text-black cursor-pointer"
              >
                Read our FAQs.
              </a>
            </p>
          </div>
        </>
    </div>
  );
};

export default SignIn;
