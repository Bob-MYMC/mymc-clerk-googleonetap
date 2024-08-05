/* eslint-disable tailwindcss/no-custom-classname */

import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { SignUp as ClerkSignUp } from '@clerk/nextjs';

type SignUpProps = {};

const SignUp: NextPage<SignUpProps> = ({}: SignUpProps) => {
  return <ClerkSignUp />;
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

export default dynamic(() => Promise.resolve(SignUp), { ssr: false });
