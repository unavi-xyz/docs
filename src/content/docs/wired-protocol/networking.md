---
title: Networking
---

## Host

Host servers handle multiplayer functionality for worlds in The Wired.
Worlds should define a host server to use in their metadata, or if none is provided the client may choose a default server to use.


Anyone can run their own host server, just like anyone can host their own website.

### WebSockets

The client and host servers primarily communicate over WebSockets, using [Protobufs](https://protobuf.dev/).
The full protobuf spec is available on [GitHub](https://github.com/unavi-xyz/wired-protocol), as well as provided packages for using it.

### WebRTC

WebRTC is used for voice communication between players, and for sending high-frequency data (such as player positions) over UDP.

WebRTC connections are only ever opened between the client and server - not P2P between players.
This is because the host acts as an [SFU](https://bloggeek.me/webrtcglossary/sfu/), relaying communication between players connected to the same world.
This protects user privacy by avoiding direct P2P connections, and is easier on the clients, allowing for higher player counts.
