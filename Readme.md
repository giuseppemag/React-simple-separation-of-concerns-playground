# Introduction
This small repository contains a simple client/server React sample that showcases a way to organize small type-safe, indexable abstractions.

## Domain and motivation
In particular, the domain of application is that of including icons from a specific library (FontAwesome).

We want to do so without making the host application aware of it, and without a direct dependency. This way, changes in icons, a switch to another library than FontAwesome, or any other refactoring along the way will be easy to apply without having to change the rest of the application.

Moreover, it is _possible_ to adopt a more neutral naming strategy in order to avoid referring to the specific taxonomy of FontAwesome but rather to stick to the naming conventions of the host application.

## Setup and running
Run the file `./src/startup` and both the client and the server applications will run.

## Implementation
In order to inspect the implementation, head over to `index.tsx` and check out the four different methods of using icons.
