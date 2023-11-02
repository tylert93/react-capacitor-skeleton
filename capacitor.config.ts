import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.wrippa.app',
  appName: 'myApp',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
