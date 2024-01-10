---
title: Worlds
---

Worlds are 3D multiplayer environments.
They are the core building block of the platform.

## glTF

World scenes are stored internally as [glTF](https://github.com/KhronosGroup/glTF) models - an open file format supported by various engines and tools like Blender.
More advanced game functionalities like physics colliders or spawn locations are stored as [glTF extensions](https://github.com/KhronosGroup/glTF/blob/main/extensions/README.md).

:::note[Info]
Check out [this blog post](https://mirror.xyz/m3org.eth/00qAzFnCCmAHrqGAQiqObgAD2x6E8wxKtsTSFtorhf0) for more information on glTF, some of the extensions UNAVI uses, and the people behind them.
:::

## Hosting

Worlds need a server to host them.
The server adds **multiplayer functionality** to your world -
it has the job of connecting players together, and facilitating communication between them.

UNAVI runs a home server that is used by default for any worlds created at [unavi.xyz](https://unavi.xyz).
However, you have the option of running your own - giving you complete control and ownership of your creations.
