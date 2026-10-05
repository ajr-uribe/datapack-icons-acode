<div align="center">

![Datapack Icons](https://raw.githubusercontent.com/ajr-uribe/datapack-icons-acode/refs/heads/master/.github/assets/dp_title.png)

<p align="center">
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT">
  </a>
  &nbsp;&nbsp;
  <a href="https://acode.app">
    <img src="https://img.shields.io/badge/Acode-Plugin-blue?logo=android&logoColor=white" alt="Acode Plugin">
  </a>
  &nbsp;&nbsp;
  <img src="https://img.shields.io/badge/version-1.0.0-brightgreen.svg" alt="Version">
  &nbsp;&nbsp;
  <img src="https://img.shields.io/badge/Minecraft-Bedrock%20%26%20Java-green?logo=minecraft&logoColor=white" alt="Minecraft">
  &nbsp;&nbsp;
  <img src="https://img.shields.io/badge/icons-100%2B-orange" alt="Icons Count">
</p>

</div>

**Datapack Icons** is a file and folder icon theme built for Minecraft datapack and resource pack development, while also providing broad support for general programming and development workflows in [Acode](https://acode.app).

This plugin is an independent, non-official port of the popular VS Code extension **Datapack Icons**, adapted to bring its visual clarity and Minecraft-specific icon mappings to your mobile workflow on Android.

---

## Features

- **Minecraft-Centric Icons:** Dedicated icons for Minecraft datapacks and resource packs, including functions, loot tables, predicates, recipes, tags, structures, worldgen, dimensions, entities, blocks, items, models, particles, render controllers, and more.
- **Minecraft Bedrock Support:** Mappings for common Bedrock behavior pack and resource pack structures, including `bp`, `rp`, `behavior_packs`, `resource_packs`, block definitions, attachables, animation-related resources, UI, render controllers, spawn rules, trading, and other Bedrock-specific files.
- **Java Edition Support:** Coverage for common Java datapack structures such as `datapacks`, `functions`, `tags`, `advancements`, `predicates`, `recipes`, `loot_tables`, `structures`, `worldgen`, dimensions, and related resources.
- **Specialized JSON Icons:** Recognizes Minecraft-specific JSON files through dedicated filename and suffix mappings, allowing files such as `blocks.json`, `example.block.json`, and `example.render_controller.json` to receive specialized icons.
- **General Code and Tech Support:** Icons for common programming languages, frameworks, configuration files, development tools, version control systems, and other technologies.
- **Expanded Folder Mappings:** Recognizes common folder names, aliases, plural forms, hidden configuration directories, and technology-specific directories.
- **Dynamic Folder States:** Distinct icons for open and closed folders where supported.
- **Lightweight and Fast:** Uses optimized SVG icons designed for smooth performance inside Acode.

---

## Installation

1. Open **Acode**.
2. Go to **Settings** > **Plugins**.
3. Search for **Datapack Icons**.
4. Tap **Install**.
5. Enable the icon set in your Acode theme or icon settings.

---

## How File Icons Are Matched

Datapack Icons supports multiple types of file matching.

### Exact File Names

Specific files can receive a dedicated icon based on their complete filename.

For example:

```text
pack.mcmeta
blocks.json
blockstates.json
sounds.json
level.dat
README.md
tsconfig.json
```

The complete filename is checked before generic extension mappings.

### Extension and Suffix Matching

Files can also be matched using a specific suffix or compound extension.

For example:

```text
new_ore.block.json
ruby.item.json
creeper.geo.json
smoke.particle.json
```

This allows Minecraft files to keep descriptive names while still receiving their specialized icon.

The general matching priority is:

```text
Exact file name
      ↓
Specific suffix / compound extension
      ↓
Generic extension
      ↓
Default file icon
```

---

## Minecraft JSON Naming Convention

Due to limitations in Acode's icon system, some JSON files need an additional suffix in their filename to display a specialized icon.

For example:

```text
new_ore.block.json
```

will use the block icon instead of the generic JSON icon.

Common supported mappings include:

| Icon | Required suffix | Example |
| --- | --- | --- |
| Blocks | `.block.json` | `new_ore.block.json` |
| Items | `.item.json` | `ruby.item.json` |
| Attachables | `.attachable.json` | `sword.attachable.json` |
| Models | `.geo.json` | `creeper.geo.json` |
| Particles | `.particle.json` | `smoke.particle.json` |
| Recipes | `.recipe.json` | `sword.recipe.json` |
| Loot Tables | `.loot_table.json` | `zombie.loot_table.json` |
| Render Controllers | `.render_controller.json` / `.rc.json` | `arrow.render_controller.json` |
| Spawn Rules | `.spawn_rules.json` | `zombie.spawn_rules.json` |
| Trading | `.trading.json` | `farmer.trading.json` |
| UI | `.ui.json` | `hud.ui.json` |
| Test (JS) | `.test.js` / `.spec.js` | `utils.test.js` |
| Test (TS) | `.test.ts` / `.spec.ts` | `utils.test.ts` |

Without the required suffix, files that share the same generic extension may fall back to the generic file icon.

---

## Supported Minecraft File Types

### Java Edition / Datapacks

Examples include:

- `.mcfunction`
- `pack.mcmeta`
- `load.json`
- `tick.json`
- `.nbt`
- `.dat`
- Advancement files
- Predicate files
- Recipe files
- Loot tables
- Tags
- Structures
- Worldgen
- Dimension types
- Enchantments
- Jukebox songs
- Trim materials and patterns
- Waypoint styles
- And other datapack resources

### Bedrock Edition

Examples include:

- Behavior pack files
- Resource pack files
- `manifest.json`
- Block definitions
- Block states
- Items
- Entities
- Attachables
- Animation resources
- Render controllers
- Particles
- Fog definitions
- Spawn rules
- UI files
- Trading files
- Dialogue files
- Feature and feature-rule files
- Dimension definitions
- Biomes
- Fonts
- Materials
- Text and language files
- Texture and model resources
- And other Bedrock-specific resources

---

## Folder Mappings

Folder icons are matched by folder name rather than only by file extension.

Common Minecraft folders include:

```text
datapacks/
functions/
tags/
advancements/
recipes/
loot_tables/
predicates/
structures/
worldgen/
dimension/
dimension_type/
blocks/
blockstates/
entities/
items/
models/
textures/
particles/
render_controllers/
spawn_rules/
features/
fogs/
ui/
texts/
```

The plugin also recognizes common aliases and naming variations, such as singular/plural forms:

```text
function/     → functions/
recipe/       → recipes/
loot_table/   → loot_tables/
predicate/    → predicates/
particle/     → particles/
entity/       → entities/
item/         → items/
```

Additional mappings cover common development directories such as:

```text
.github/
.vscode/
.idea/
.git/
node_modules/
src/
scripts/
config/
assets/
images/
fonts/
shaders/
```

and technology-specific directories for languages, frameworks, build systems, and development tools.

### Folder States

Some folders have dedicated closed and expanded icons.

For example:

```text
assets/        → assets_folder_closed.svg
assets/ open   → assets_folder.svg
```

The same behavior is available for supported folder types such as namespaces, overlays, and source directories.

---

## Preview and Icon Coverage

Datapack Icons includes specialized icons for Minecraft resources as well as general development files and folders.

Supported categories include:

- Minecraft Java datapacks
- Minecraft Bedrock behavior packs
- Minecraft Bedrock resource packs
- Programming languages
- Web development
- Configuration files
- Build systems
- Version control
- Game development
- Databases
- Shell scripts
- IDEs and editors
- Archives and executables
- Images, audio, video, and other media
- Development-specific folders

The icon set is continuously expanded as additional file and folder mappings are added.

---

## Christmas Folder Theme (Separate Plugin)

A **Christmas folder theme** is currently in development as a **separate paid plugin** for Acode. It is a folder retexture originally created by the **FuncFusion** team, the same authors behind the Datapack Icons extension, and will be adapted and distributed independently from this base plugin.

This theme focuses exclusively on festive folder icons and does not include additional icon packs or color palettes.

### Support the Development

Purchasing the Christmas plugin is also a way to support the continued development of more Acode plugins by **ajr-uribe**. If you find this project useful and want to contribute, you can:

- Buy the Christmas folder theme plugin once it is released.
- Support directly on Ko-fi: [ko-fi.com/ajr_uribe](https://ko-fi.com/ajr_uribe)
- Support via PayPal: [paypal.me/ajrurib3](https://paypal.me/ajrurib3)

Every contribution helps support future plugins and updates.

---

## Acknowledgments and Credits

- Original **Datapack Icons** extension concept and base icon set by the **FuncFusion** team.
- Christmas folder retexture also created by the **FuncFusion** team.
- This Acode plugin is an independent port based on their open-source work.
- Ported and maintained for Acode by **ajr-uribe**.

---

## License

This project is licensed under the [MIT License](LICENSE). The original icon set is also distributed under the MIT License by FuncFusion.
