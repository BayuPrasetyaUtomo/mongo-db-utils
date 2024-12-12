# A collection of useful mongodb functions for development written in Typescript

## How to use

- Using this repository as a whole
  - Clone or fork this repository or fork it
  - Install dependencies `bun install | deno install | npm install | pnpm install`
  - Run the following command depending on your JS or TS runtime
  - **Using Deno**
    - `deno task deno:purge`
  - **Using Bun**
    - `bun run bun:purge`
  - **Using NPM**
    - `bun run npm:purge`
  - **Using PNPM**
    - `bun run PNPM:purge`
- Copy the code
  - [MongoDB Config](./config.ts)
  - [Purge database](./utils/purge-database.ts)
- Add it to your project and run it