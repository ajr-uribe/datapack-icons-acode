import folders from './mappings/folders.json'
import files from './mappings/files.json'

const fileIcons = acode.require('fileIcons');

export default class DatapackIcons {
  registration = null;
  baseUrl: string = '';

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  register() {
    // @ts-ignore
    this.registration = fileIcons.register({
      id: 'ajr.datapack_icons.default',
      name: 'Datapack Icons',
      icons: `${this.baseUrl}icons`,
      fileExtensions: files.fileExtensions,
      fileNames: files.fileNames,
      file: 'file',
      folderNames: folders.folderNames,
      folderNamesExpanded: folders.folderNamesExpanded,
      folder: 'folder_closed',
      folderExpanded: 'folder',
      rootFolder: 'root_folder_closed',
      rootFolderExpanded: 'root_folder'
    });
  }

  dispose() {
    this.registration?.dispose();
  }
}
