#!/bin/bash

# Update submodules
git submodule init
git submodule update
pnpm generate
