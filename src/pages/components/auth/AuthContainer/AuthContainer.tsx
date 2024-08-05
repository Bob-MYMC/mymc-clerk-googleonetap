/* eslint-disable tailwindcss/no-custom-classname */
import { useEffect, useMemo, useState } from 'react';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

export type AuthContainerProps = {
  navigatedFrom?: string;
  forceRedirectUrl?: string;
  tab?: 'login' | 'register';
  position?: 'page' | 'modal';
};

const AuthContainer = (props: AuthContainerProps) => {
  const [tab, setTab] = useState(props.tab || 'login');
  // const forceRedirectUrl = props.forceRedirectUrl ?? '/account';
  const forceRedirectUrl = useMemo(() => {
    const url = '/account';
    return url;
  }, []);

  return (
    <div>
      {tab === 'login' ? (
        <SignIn
          forceRedirectUrl={forceRedirectUrl}
          onSignUp={() => setTab('register')}
          position={props.position}
        />
      ) : (
        <SignUp
          forceRedirectUrl={forceRedirectUrl}
          onSignIn={() => setTab('login')}
          position={props.position}
        />
      )}
    </div>
  );
};

export default AuthContainer;
