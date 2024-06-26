---
title: Scripts
---

UNAVI provides a rich [WebAssembly](https://webassembly.org/) scripting environment, and it is the core feature that makes UNAVI so powerful.

Check out the [scripting guide](/guides/writing-scripts) to learn how to write your own scripts.

## WASM

WebAssembly (WASM) scripts can be written in many different languages,
and the [component model](https://component-model.bytecodealliance.org/) facilitates complex interactions between these scripts.

Scripts interact with the outside world through a set of permissioned [host APIs](https://github.com/unavi-xyz/wired-protocol/tree/main/spatial/wit).
These APIs give a script the functionality to load 3D models, receive input from the player, sync network variables, and more.
Fine-grained access to these APIs can be set for each script and, combined with the strict sandboxing enforced by
the WebAssembly runtime, allows for the safe running of arbitrary user scripts within the app.

## Nodes

A node-based solution for programming behaviors within worlds is planned.
This will have a much lower barrier to entry compared to writing code, and will work much better within VR.

The node system will actually be built within the scripting environment itself (!), so in the eyes of the app it will
be no different than a typical hand-coded WASM script.
This should be a great case study showing just how powerful the scripting environment is.
