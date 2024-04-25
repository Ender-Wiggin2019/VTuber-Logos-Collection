#!/bin/bash

# 进入 ProgrammingVTuberLogos 目录并执行 git pull
cd public/ProgrammingVTuberLogos
git pull

# 回到上一级目录，进入 ServiceLogos 目录并执行 git pull
cd ../ServiceLogos
git pull

# 回到初始目录并执行 pnpm generate
cd ../..
pnpm generate
