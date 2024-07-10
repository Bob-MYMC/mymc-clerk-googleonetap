import { UserProfile } from '@clerk/nextjs';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Account() {
  return <UserProfile />;
}
