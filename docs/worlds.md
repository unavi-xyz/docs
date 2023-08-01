---
sidebar_position: 10
sidebar_label: 🌏 Worlds
title: Worlds
---

Worlds are 3D multiplayer environments. They are the core building block of the platform.

## 🏗️ Creation

### Build Mode

<div class="right-img">
  <img src="/img/Editor.png" alt="Build mode UI" />
</div>

Worlds can be edited in real time with other players via build mode. Build mode can be toggled on or off with a button in the bottom right corner (only accessible when you own the world).

When in build mode you will be able to spawn in objects, move them around, edit physics colliders, change the world name, and more. Other players will see any changes you make in real time, and when you are done you can save your changes and make them permanent.

### Scene Format

World scenes are stored internally as [glTF](https://github.com/KhronosGroup/glTF) files - an open file format supported by various engines and tools like Blender. Within the studio, you can import glTF models and edit them to add game logic such as physics colliders or spawn locations (stored internally as [glTF extensions](https://github.com/KhronosGroup/glTF/blob/main/extensions/README.md)). A node-based scripting system can also be used to add dynamic and interactive behaviors to your scene.

## 🏝️ Publishing

Once your world is ready, you can publish it from the studio to make it available to the public. You can continue to push updates to the world after you publish it. The studio also provides a preview mode that allows you to test your world before publishing it.

## ☁️ Hosting

Just like websites, worlds need servers to host them.

The host server adds **multiplayer functionality** to your world. Technically speaking it acts as an [SFU](https://bloggeek.me/webrtcglossary/sfu/) for communication between clients, and is responsible for managing the state of your world.

The team runs a free host server that is used by default for any worlds created at [unavi.xyz](https://unavi.xyz). However, you also have the option to run your own host server, giving you complete control and ownership of your creations. Check out the [deployment guide](/deployment/host) for more information on how to self-host.

Travel between worlds is not limited to a single host server. You can travel between worlds hosted on different servers, just like you can visit websites from different servers on the web. The ability to self-host worlds is a critical aspect of keeping UNAVI an open network.
