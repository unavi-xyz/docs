---
title: Identity
---

Identity within The Wired is heavily WIP.

## Handles

The Wired currently defines a simple system of usernames and home servers for user identity.
A user handle is in the format of `@username:homeserver`, for example - `@alice:unavi.xyz`.

### Profile 

A user's profile can be accessed from an API at their homeserver,

`GET /.wired-protocol/v1/users/:username`

## TODO

- Authentication (verify another player's identity within a world)
- More portable handle system (likely using DIDs)
- Social features (friends list, following, blocking, etc)
