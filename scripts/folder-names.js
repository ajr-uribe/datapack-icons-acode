import fs from 'fs';
import path from 'path';

const folderNamesPath = path.resolve(
  'src',
  'mappings',
  'folders.json'
);

const data = fs.readFileSync(folderNamesPath, 'utf8');
const json = JSON.parse(data);

json.folderNames = Object.fromEntries(
  Object.entries(json.folderNamesExpanded).map(
    ([key, value]) => [key, `${value}_closed`]
  )
);

fs.writeFileSync(
  folderNamesPath,
  JSON.stringify(json, null, 2) + '\n'
);

console.log('folderNames generado correctamente');
