---
title: Networking
---

## Host Server

Host servers handle multiplayer functionality for worlds in The Wired.
Worlds should define a host server to use in their metadata, but if none is provided the client will choose a default server to connect to.

Travel between worlds is not limited to a single host server.
You can travel between worlds hosted on different servers, just like you can visit websites from different servers on the web.
The ability to self-host worlds is a critical aspect of keeping The Wired an open network.

UNAVI provides an [open source dockerized host server](https://github.com/unavi-xyz/unavi/pkgs/container/host) that anyone can use to run their own host.

### WebSockets

The client and host primarily communicate over WebSockets, using [Protobufs](https://protobuf.dev/).
The full protobuf spec is available on [GitHub](https://github.com/unavi-xyz/the-wired), as well as provided packages for using it.

### WebRTC

WebRTC is used for voice communication between players, as well as for sending high-frequency data (such as player transforms) over UDP.

WebRTC connections are only ever opened between the client and host - not P2P between players.
This is because the host acts as an [SFU](https://bloggeek.me/webrtcglossary/sfu/), relaying communication between players connected to the same world.
This protects user privacy by avoiding direct P2P connections, and is lighter for the clients, improving performance and allowing for higher player counts.
