import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.skylinedresden.app',
  appName: 'Dresden Altez',
  webDir: 'out',
  plugins: {
    Updater: {
      autoUpdate: true,
      url: 'https://github.com/SkylineIP/empreendimentos/tree/dresden-altez',
      channel: 'stable',
      checkFrequency: 'onAppStart',
    },
    SplashScreen: {
      launchShowDuration: 2000,  // Tempo da splash (em ms)
      launchAutoHide: true,
      backgroundColor: "#ffffff",  // Cor de fundo
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false
    }
  },
};

export default config;