/* eslint-disable tailwindcss/no-custom-classname */

import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { SignIn } from '@clerk/nextjs';

type SignInProps = {};

const SignInPage: NextPage<SignInProps> = ({}: SignInProps) => {
  const router = useRouter();

  return (
    <div className="mt-[26px] mb-[72px] flex flex-col items-center justify-center lg:mb-[112px] lg:mt-[76px] lg:flex-row lg:items-start">
      <div className="flex lg:pr-[72px]">
        <SignIn
          path="/signin"
          signUpUrl="/signup"
          forceRedirectUrl="/account"
        />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false,
  };
}

export default dynamic(() => Promise.resolve(SignInPage), { ssr: false });
