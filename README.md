# VTuber Style Logo Collection

This project is a collection of cute VTuber style logos. The credits can be founded in `src/data/credits.ts`. Thanks to their great works!

- [SAWARATSUKI's ServiceLogos](https://github.com/SAWARATSUKI/ServiceLogos)
- [Aikoyori's ProgrammingVTuberLogos](https://github.com/Aikoyori/ProgrammingVTuberLogos)

Currently, all logos are shown on [https://vtuber-style-logos.vercel.app/](https://vtuber-style-logos.vercel.app/).

![picgo-2024-04-23-000992](https://github.com/Ender-Wiggin2019/VTuber-Logos-Collection/assets/49976407/c44dfe84-d9ce-415c-8349-3f886a1c5995)

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

## TODO

I have create a script `generate_brand_from_folder.js` to generate data from local directories. The next step will be some automation via GitHub Actions or Vercel. If someone is familiar with these processes, PR is absolutely welcome.

Cheers!
