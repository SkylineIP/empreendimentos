import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.exemplo.meuapp',
  appName: 'Dresden-Altez',
  webDir: 'out',
  plugins: {
    Updater: {
      autoUpdate: true,
      updateUrl: 'https://skyline-dresdez.vercel.app/',
    },
  },
};

export default config;