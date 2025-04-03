import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.exemplo.meuapp',
  appName: 'Dresden-Altez',
  webDir: 'out',
  plugins: {
    Updater: {
      autoUpdate: true,
      updateUrl: 'hhttps://github.com/SkylineIP/empreendimentos/tree/dresden-altez',
    },
  },
};

export default config;