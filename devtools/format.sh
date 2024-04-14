#!/bin/sh

cd "$(dirname "$0")/.."

# Format .ts and .tsx files with tsfmt (ignores non-TS files).
node_modules/.bin/tsfmt -r
# Format all other files with Prettier
# (configured to ignore TS via .prettierignore).
if [ $# -eq 0 ]; then
  node_modules/.bin/prettier --ignore-unknown --write .
else
  node_modules/.bin/prettier --ignore-unknown --write "$@"
fi
