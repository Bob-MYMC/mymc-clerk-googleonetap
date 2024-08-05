/* eslint-disable tailwindcss/no-custom-classname */

import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { SignIn as ClerkSignIn } from '@clerk/nextjs';

type SignInProps = {};

const SignIn: NextPage<SignInProps> = ({}: SignInProps) => {
  return <ClerkSignIn />;
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

export default dynamic(() => Promise.resolve(SignIn), { ssr: false });
