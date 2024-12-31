#!/bin/sh

cd "$(dirname "$0")/.."

git diff --name-only --diff-filter=ACMR
git diff --name-only --diff-filter=ACMR --cached
