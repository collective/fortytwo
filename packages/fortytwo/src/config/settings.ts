import type { ConfigType } from '@plone/registry';
import HeaderTools from '../components/Tools';
import ViewRedirector from '../components/ViewRedirector';

export default function install(config: ConfigType) {
  const RAZZLE_SEVEN_URL =
    (__CLIENT__ && window?.env?.RAZZLE_SEVEN_URL) ||
    process.env.RAZZLE_SEVEN_URL ||
    'http://localhost:3000';

  const VOLTO_URL = process.env.VOLTO_URL || 'http://localhost:4000';

  config.settings.fortytwo = {
    razzleSevenUrl: RAZZLE_SEVEN_URL,
    voltoUrl: VOLTO_URL,
  };

  config.settings.appExtras = [
    ...(config.settings.appExtras || []),
    {
      match: '/',
      component: ViewRedirector,
      props: {},
    },
  ];

  config.registerSlotComponent({
    slot: 'headertools',
    name: 'Tools',
    component: HeaderTools,
  });

  return config;
}

declare global {
  interface Window {
    env?: {
      RAZZLE_SEVEN_URL?: string;
    };
  }
  const __CLIENT__: boolean;
  const __SERVER__: boolean;
}

declare module '@plone/types' {
  interface SettingsConfig {
    fortytwo: {
      razzleSevenUrl: string;
      voltoUrl: string;
    };
  }
}
