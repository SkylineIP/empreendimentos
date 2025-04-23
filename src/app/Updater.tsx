'use client';

import { useEffect } from 'react';
import { Filesystem, Directory } from '@capacitor/filesystem';
import JSZip from 'jszip';

export const Updater = () => {
  const downloadAndReplaceWebApp = async (version: string) => {
    const response = await fetch(`https://meusite.com/app/build-${version}.zip`);
    const blob = await response.blob();
    const zip = await JSZip.loadAsync(blob);

    for (const fileName of Object.keys(zip.files)) {
      const file = zip.files[fileName];
      if (!file.dir) {
        const content = await file.async('text');
        await Filesystem.writeFile({
          path: fileName,
          data: content,
          directory: Directory.Data,
          recursive: true,
        });
      }
    }

    await Filesystem.writeFile({
      path: 'version.json',
      data: JSON.stringify({ version }),
      directory: Directory.Data,
    });

    window.location.reload();
  };

  const checkForUpdates = async () => {
    try {
      const response = await fetch('https://meusite.com/app/version.json');
      const remoteVersion = await response.json();

      const localVersionRes = await Filesystem.readFile({
        path: 'version.json',
        directory: Directory.Data,
      });
      const localVersion = JSON.parse(typeof localVersionRes.data === 'string' ? localVersionRes.data : '');

      if (remoteVersion.version !== localVersion.version) {
        await downloadAndReplaceWebApp(remoteVersion.version);
      }
      console.log('Versão atualizada com sucesso!');
    } catch (error) {
      console.log("Erro ao verificar atualizações:", error);
    }
  };

  useEffect(() => {
    checkForUpdates();
  }, []);

  return null;
};
