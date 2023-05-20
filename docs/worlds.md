---
sidebar_position: 10
sidebar_label: 🌏 Worlds
title: Worlds
---

Worlds are 3D multiplayer environments. They are the core building block of the platform.

## 🏗️ Creation

### Studio

<div class="right-img">
  <img src="/img/Studio.png" />
</div>

Worlds can be created using the [Studio](https://www.unavi.xyz/studio), a web-based editor built into the client. The studio workflow is currently being expiremented with and may change in the future, but for now it is similar to tools like Unity or Unreal Engine.

### Scenes

World scenes are stored internally as [glTF](https://github.com/KhronosGroup/glTF) files - an open file format supported by various engines and tools like Blender. Within the studio, you can import glTF models and edit them to add game logic such as physics colliders or spawn locations (stored internally as [glTF extensions](https://github.com/KhronosGroup/glTF/blob/main/extensions/README.md)). A node-based scripting system can also be used to add dynamic and interactive behaviors to your scene.

## 🏝️ Publishing

Once your world is ready, you can publish it from the studio to make it available to the public. You can continue to push updates to the world after you publish it. The studio also provides a preview mode that allows you to test your world before publishing it.

### World.json

When you publish a world, a `world.json` file is generated. This file contains metadata about your world, such as its name, description, and thumbnail. It also contains a link to the glTF file that represents your world's scene. To learn more about the `world.json` file, check out [The Wired Protocol](https://github.com/wired-protocol/spec).

All you need to join a space is a link to its `world.json` file - just copy the link and paste it into the client. The client will automatically download the world and connect you to it.

## 🌐 Discovery

In addition to manually entering links, there are two ways to discover worlds:

### Local Discovery

The easiest way to share your world is to publish it locally to your client. This is what happens when you publish a world from the studio - the world is made available to anyone using the same client as you. For example, when you publish a world from [unavi.xyz](https://unavi.xyz), anyone else using [unavi.xyz](https://unavi.xyz) will be able to find your world in their discovery page.

However, if someone is using a different client than you, they will not be able to discover your world.

### NFTs

After you publish a world, you have the option of minting it as an NFT. Minting a world is beneficial for discovery, as the blockchain can be used as a public index of all worlds that can easily be searched and browsed by others. Minting a world gives people on other clients the ability to discover your world.

In the future, we plan to add additional functionality to worlds that are minted as NFTs, such as the ability to monetize your worlds.

:::info

UNAVI is currently in beta, and is live on the [Ethereum Sepolia Testnet](https://www.alchemy.com/overviews/sepolia-testnet). You can visit the [Alchemy Sepolia Faucet](https://sepoliafaucet.com/) to get some free testnet ETH.

:::

## ☁️ Hosting

Just like websites, worlds need servers to host them.

The host server adds **multiplayer functionality** to your world. Technically speaking it acts as an [SFU](https://bloggeek.me/webrtcglossary/sfu/) for communication between clients, and is responsible for managing the state of your world.

The team runs a free host server that is used by default for any worlds created at [unavi.xyz](https://unavi.xyz). However, you also have the option to run your own host server, giving you complete control and ownership of your creations. Check out the [deployment guide](/deployment/host) for more information on how to self-host.

Travel between worlds is not limited to a single host server. You can travel between worlds hosted on different servers, just like you can visit websites from different servers on the web. The ability to self-host worlds is a critical aspect of keeping UNAVI an open network.
