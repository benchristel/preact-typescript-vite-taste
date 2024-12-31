#!/bin/sh

cd "$(dirname "$0")/.."

echo "Fixing files:" "$@"

# Autofix .js, .jsx, .ts, and .tsx files with eslint
node_modules/.bin/eslint --fix --no-warn-ignored "$@"
# Format all other files with Prettier
# (configured to ignore TS via .prettierignore).
node_modules/.bin/prettier --ignore-unknown --write "$@"
