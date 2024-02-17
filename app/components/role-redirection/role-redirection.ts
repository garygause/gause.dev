import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export const useRoleRedirection = () => {
  const router = useRouter();
  const [isLoadingRoute, setIsLoadingRoute] = useState(false);

  const session = useSession();

  useEffect(() => {
    if (session.data && !isLoadingRoute) {
      switch (session.data.role) {
        case 'CLIENT':
          router.push('/client');
          break;
        case 'USER':
          router.push('/user');
          break;
        case 'ADMIN':
          router.push('/admin');
          break;
        default:
      }
    }
    const handleRouteChange = () => {
      setIsLoadingRoute(true);
    };
    const handleRouteComplete = () => {
      setIsLoadingRoute(false);
    };

    //router.events.on('routeChangeStart', handleRouteChange);
    //router.events.on('routeChangeComplete', handleRouteComplete);

    // return () => {
    //   router.events.off('routeChangeStart', handleRouteChange);
    //   router.events.off('routeChangeComplete', handleRouteComplete);
    // };
    return;
  });
};
