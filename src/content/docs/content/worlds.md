---
title: Worlds
---

Worlds are 3D multiplayer environments.
They are the core building block of the platform.

## glXF

World scenes are stored internally as [glXF](https://github.com/KhronosGroup/glXF) files -
a variation of the popular [glTF](https://github.com/KhronosGroup/glTF) model format.
The addition of asset composability that glXF allows makes it a great fit for scene composition,
while still letting us make use of the existing glTF tooling in software like Blender.

Additional features like physics colliders or spawn locations can be stored as glTF [extensions](https://github.com/KhronosGroup/glTF/blob/main/extensions/README.md).

:::note[Info]
Check out [this blog post](https://mirror.xyz/m3org.eth/00qAzFnCCmAHrqGAQiqObgAD2x6E8wxKtsTSFtorhf0) for more information on glTF, some of the extensions UNAVI uses, and the people behind them.
:::

## Hosting

Worlds need a server to host them.
The server adds **multiplayer functionality** to your world -
it has the job of connecting players together and facilitating communication between them.
Optionally, a world server may enforce anti-cheat measures.

UNAVI runs a server that is used by default for any worlds created at [unavi.xyz](https://unavi.xyz).
However, you have the option of running your own - giving you complete control and ownership of your creations.

Check out the [self-hosting guide](/guides/self-hosting) to learn how to run your own server.
