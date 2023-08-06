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

Just like websites, worlds need servers to host them.

The host server adds **multiplayer functionality** to your world.
Technically speaking it acts as an [SFU](https://bloggeek.me/webrtcglossary/sfu/) for communication between clients, and is responsible for managing the state of your world.

UNAVI runs a host server that is used by default for any worlds created at [unavi.xyz](https://unavi.xyz).
However, you have the option of runnning your own host server, giving you complete control and ownership of your creations.
Check out the [deployment guide (WIP)](/deployment/host) for more information on how to self-host.

Travel between worlds is not limited to a single host server.
You can travel between worlds hosted on different servers, just like you can visit websites from different servers on the web.
The ability to self-host worlds is a critical aspect of keeping The Wired an open network.
