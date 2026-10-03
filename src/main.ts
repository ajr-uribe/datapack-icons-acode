import plugin from '../plugin/plugin.json';
import DatapackIcons from './iconPack';

class AcodePlugin {
  baseUrl: string = '';
  iconPack: DatapackIcons;

  init(): void {
    this.iconPack = new DatapackIcons(this.baseUrl);

    this.iconPack.register();
  }

  destroy(): void {
    this.iconPack.dispose();
  }
}

if (window.acode) {
  const acodePlugin = new AcodePlugin();

  acode.setPluginInit(plugin.id, (baseUrl: string) => {
    acodePlugin.baseUrl = baseUrl.endsWith('/')
      ? baseUrl
      : `${baseUrl}/`;
    acodePlugin.init();
  });

  acode.setPluginUnmount(plugin.id, () => {
    void acodePlugin.destroy();
  });
}
