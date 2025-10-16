import { useEffect } from 'react';
import qs from 'query-string';
import config from '@plone/registry';

export const isNonContentRoute = (currentPathname: string) => {
  const { settings } = config;
  const fullPath = currentPathname.replace(/\?.*$/, '');
  return settings.nonContentRoutes.reduce(
    (acc, route) => acc || new RegExp(route).test(fullPath),
    false,
  );
};

export default function ViewRedirector({
  pathname,
  location,
}: {
  pathname: string;
  location: { search: string };
}) {
  const search = qs.parse(location.search);

  useEffect(() => {
    if (!isNonContentRoute(pathname) && !search.noRedirect) {
      window.location.href = `${config.settings.fortytwo.razzleSevenUrl}${pathname}${location.search}`;
    }
  }, [pathname, search.noRedirect, location.search]);

  return null;
}
