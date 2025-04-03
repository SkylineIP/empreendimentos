import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.exemplo.meuapp',
  appName: 'Dresden-Altez',
  webDir: 'out',
  plugins: {
    Updater: {
      autoUpdate: true,
      url: 'https://github.com/SkylineIP/empreendimentos/tree/dresden-altez',
      channel: 'stable',
      checkFrequency: 'onAppStart',
    },
  },
};

export default config;