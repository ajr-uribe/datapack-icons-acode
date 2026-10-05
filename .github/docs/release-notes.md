# Datapack Icons v1.0.1

## What's New

- Expanded Minecraft icon coverage for both **Java Edition** and **Bedrock Edition**.
- Added new specialized file mappings for Minecraft resources, including:
  - Blocks
  - Items
  - Attachables
  - Models
  - Particles
  - Recipes
  - Loot tables
  - Render controllers
  - Spawn rules
  - Trading
  - UI
  - Features
  - Fogs
  - Dimensions
  - Entities
  - And more.
- Expanded folder mappings with additional Minecraft resource directories and common aliases.
- Added support for singular and plural folder names, such as `function` / `functions`, `recipe` / `recipes`, and `entity` / `entities`.
- Added mappings for common development directories such as `.github`, `.vscode`, `.git`, `node_modules`, `src`, `assets`, `config`, and others.
- Added support for additional programming languages, development tools, build systems, and configuration directories.
- Expanded support for open and closed folder states.
- Improved specialized JSON file matching using exact filenames and compound suffixes.

## Compatibility

- **Acode**
- **Minecraft Java Edition**
- **Minecraft Bedrock Edition**

## Notes

Some Minecraft JSON resources require a specialized suffix to display their corresponding icon in Acode.

For example:

```text
example.block.json
example.item.json
example.geo.json
example.particle.json
example.render_controller.json
```

Generic JSON files continue to use the default JSON icon when no specialized mapping applies.