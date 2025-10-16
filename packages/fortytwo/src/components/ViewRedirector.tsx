import { Redirect } from 'react-router-dom';
import { isCmsUi } from '@plone/volto/helpers/Url/Url';
import config from '@plone/registry';

export default function ViewRedirector({ pathname }: { pathname: string }) {
  if (!isCmsUi(pathname)) {
    if (__SERVER__) {
      return <Redirect to={config.settings.fortytwo.razzleSevenUrl} />;
    } else {
      window.location.href = config.settings.fortytwo.razzleSevenUrl;
    }
  }

  return null;
}
