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
  </a>
  &nbsp;&nbsp;
  <img src="https://img.shields.io/badge/Minecraft-Bedrock%20%26%20Java-green?logo=minecraft&logoColor=white" alt="Minecraft">
  &nbsp;&nbsp;
  <img src="https://img.shields.io/badge/icons-100%2B-orange" alt="Icons Count">
</p>

</div>

**Datapack Icons** is a file and folder icon theme built specifically for Minecraft datapack and resource pack development, while also covering general programming work in [Acode](https://acode.app).

This plugin is an independent, non-official port of the popular VS Code extension **Datapack Icons**, adapted to bring the same visual clarity to your mobile workflow on Android.

---

## Features

- **Minecraft-Centric Icons:** Full coverage of the Minecraft datapack structure, including functions, loot tables, predicates, recipes, tags, worldgen, dimension types, and more.
- **Resource Pack Support:** Dedicated icons for models, textures, sounds, particles, and blockstates.
- **General Code and Tech Support:** Icons for common web and software technologies such as JavaScript, TypeScript, Python, JSON, Rust, and Git.
- **Dynamic Folder States:** Distinct icons for open and closed folders, keeping your directory tree readable and intuitive.
- **Lightweight and Fast:** Optimized SVG icons designed for smooth performance inside Acode.

---

## Installation

1. Open **Acode**.
2. Go to **Settings** > **Plugins**.
3. Search for **Datapack Icons**.
4. Tap **Install**.
5. Enable the icon set in your Acode theme or icon settings (restart Acode if required).

---

## Important: Naming Convention for JSON Icons

Due to certain limitations in Acode's icon system, JSON files that should display a specific icon (such as blocks, items, render controllers, models, and others) need an **extra extension** in their filename.

For example, a file named `new_ore.block.json` will display the block icon instead of the default JSON icon.

The full list of JSON files that require this convention is included below:

| Icon               | Required suffix                         | Example                        |
| ------------------ | --------------------------------------- | ------------------------------ |
| Blocks             | `.block.json`                           | `new_ore.block.json`           |
| Items              | `.item.json`                            | `ruby.item.json`               |
| Attachables        | `.attachable.json`                      | `sword.attachable.json`        |
| Models             | `.geo.json`                             | `creeper.geo.json`             |
| Particles          | `.particle.json`                        | `smoke.particle.json`          |
| Recipes            | `.recipe.json`                          | `sword.recipe.json`            |
| Loot Tables        | `.loot_table.json`                      | `zombie.loot_table.json`       |
| Render Controllers | `.render_controller.json` or `.rc.json` | `arrow.render_controller.json` |
| Spawn Rules        | `.spawn_rules.json`                     | `zombie.spawn_rules.json`      |
| Trading            | `.trading.json`                         | `farmer.trading.json`          |
| UI                 | `.ui.json`                              | `hud.ui.json`                  |
| Test (JS)          | `.test.js` / `.spec.js`                 | `utils.test.js`                |
| Test (TS)          | `.test.ts` / `.spec.ts`                 | `utils.test.ts`                |

Without the extra suffix, these files will fall back to the default JSON icon.

---

## Preview and Supported File Types

### Minecraft / Datapack Extensions and Files

- `.mcfunction`
- `pack.mcmeta`
- `load.json` / `tick.json`
- `sounds.json` / `splashes.json` / `blocks.json`
- `.nbt` / `.dat` (level.dat)

### Folder Mappings

- `datapacks`, `functions`, `tags`, `recipes`, `loot_tables`, `predicates`, `structures`, `worldgen`, `dimension`, and many more.

---

## Christmas Folder Theme (Separate Plugin)

A **Christmas folder theme** is currently in development as a **separate paid plugin** for Acode. It is a folder retexture originally created by the **FuncFusion** team, the same authors behind the Datapack Icons extension, and will be adapted and distributed independently from this base plugin.

This theme focuses exclusively on festive folder icons and does not include additional icon packs or color palettes.

### Support the Development

Purchasing the Christmas plugin is also a way to support the continued development of more Acode plugins by **ajr-uribe**. If you find this project useful and want to contribute, you can:

- Buy the Christmas folder theme plugin once it is released.
- Support directly on Ko-fi: [ko-fi.com/ajr_uribe](https://ko-fi.com/ajr_uribe)
- Support via paypal: [paypal.me/ajrurib3](https://paypal.me/ajrurib3)

Every contribution helps make future plugins and updates possible.

---

## Acknowledgments and Credits

- Original Datapack Icons extension concept and base icon set by the **FuncFusion** team.
- Christmas folder retexture also created by the **FuncFusion** team.
- This Acode plugin is an independent port based on their open-source work.
- Ported and maintained for Acode by **ajr-uribe**.

---

## License

This project is licensed under the [MIT License](LICENSE). The original icon set is also distributed under the MIT License by FuncFusion.