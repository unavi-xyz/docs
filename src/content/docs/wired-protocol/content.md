---
title: Content
---

In general, The Wired tries to address all content using URIs.
This is a similar approach to the 2D web, where HTML documents are linked together using URLs.

## Worlds

In its most basic form, a world is simply a set of JSON metadata.

For example, a world may look like:

```json
{
  "title": "My Awesome World",
  "description": "It is very fun!",
  "image": "./image.jpg",
  "host": "host.unavi.xyz",
  "model": "./model.glb"
}
```

To join a world, all you need is a URI pointing to this metadata.
The client can then read this metadata and load the world.

## Profiles

A profile is a set of JSON metadata describing a user.

A profile may look like:

```json
{
    name: "Kayh",
    bio: "I like cats! :3",
    image: "./image.jpg",
    background: "./background.jpg",
    links = [
        {
            title: "My Website",
            url: "https://kayh.dev"
        }
    ]
}
```