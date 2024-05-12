# VTuber Style Logo Collection

This project is a collection of cute VTuber style logos. All credits can be founded in [`src/data/credits.ts`](https://github.com/Ender-Wiggin2019/VTuber-Logos-Collection/blob/main/src/data/credits.ts). Thanks to their great works!

- [SAWARATSUKI's KawaiiLogos](https://github.com/SAWARATSUKI/KawaiiLogos)
- [Aikoyori's ProgrammingVTuberLogos](https://github.com/Aikoyori/ProgrammingVTuberLogos)

Currently, all logos are shown on [https://vtuber-style-logos.vercel.app/](https://vtuber-style-logos.vercel.app/).

![picgo-2024-05-12-001063](https://github.com/Ender-Wiggin2019/VTuber-Logos-Collection/assets/49976407/ce7afc00-c040-4dde-b766-37e04bb7577b)


## Feature

1. filter by alias (k8s, vscode, etc.)
2. filter by author (`/author/:author`)
3. filter by autors and categories in home page

## How to Add Logos?

Currently I create 2 scripts for generating sources from [Aikoyori](https://github.com/Aikoyori) and [Sawaratsuki](https://twitter.com/sawaratsuki1004). When the storage structure becoming stable, I will use GitHub Action for automation.

If there're more logos on Internet that this project haven't collected yet, you can make a pull request to add them manually.

## Development

```bash
pnpm i
```

First, run the development server:

```bash
pnpm dev
```

P.S. Ensure your Node.js version is > v18.17.0. Consider using NVM for easy version management.

## TODO

- [ ] GitHub Actions for automation (currently I use `pnpm generate` to generate data)
- [X] Alias filter such as k8s -> Kubernetes
- [X] Author filter (can filter by prams, but not shown on UI)
- [X] Category filter (programming languages, tools, etc.)
- [X] License declaration on each logo
- [X] Better UI for the whole page
- [ ] Better logo register process (for a new user to upload a logo)

Any PR is welcome!
