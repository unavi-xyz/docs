---
sidebar_position: 40
sidebar_label: ⚒️ Running Locally
title: Running Locally
---

This page will walk you through the steps to run a UNAVI client locally on your own machine.

## 🏔️ Environment Setup

### Requirements

Before starting, ensure that you have the following tools:

- [Node.js](https://nodejs.org/) v18 or higher
- [pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/)
- Ethereum RPC provider (such as [Alchemy](https://www.alchemy.com/) or [Infura](https://infura.io/))

### Clone the Repository

```bash
git clone https://github.com/unavi-xyz/unavi.git
cd unavi
```

### Install Dependencies

```bash
pnpm install
```

### Update environment variables

:::warning

Keep your secrets safe, do not commit them to the repository. You can add your environment variables to `.env.local` and they will be automatically loaded when running the app.

```bash
# Create .env.local
touch apps/client/.env.local
```

:::

The only environment variable you need to set before running the app is `ETH_PROVIDER`. This is the Ethereum HTTP RPC provider that will be used by the server to connect to the blockchain. You can get one from [Alchemy](https://www.alchemy.com/) or [Infura](https://infura.io/) for free.

```env title=".env.local"
ETH_PROVIDER="..." # Your Ethereum RPC provider
```

## 🐋 Running the App

Run one of the following commands to start the app. This will make the client available at [http://localhost:3000](http://localhost:3000).

### Production

Use this if you want to run your own local instance of the client.

```bash
pnpm docker:prod
```

### Development

Use this if you are actively developing the client and want to see any changes you make immediately.

```bash
pnpm docker:dev
```

### Stopping

To stop the app, press `Ctrl+C` in the terminal where you ran the command. Additionally, you can run the following command to shut down the docker containers:

```bash
pnpm docker:stop
```
