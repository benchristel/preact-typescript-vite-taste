#!/bin/sh

cd "$(dirname "$0")/.."

echo "Linting files:" "$@"

FAIL=false

# Autofix .js, .jsx, .ts, and .tsx files with eslint.
# Format all other files with Prettier (configured to ignore TS via
# .prettierignore).
if ! node_modules/.bin/eslint --no-warn-ignored "$@"; then
    FAIL=true
fi

if ! node_modules/.bin/prettier --ignore-unknown --check "$@"; then
    FAIL=true
fi

if [ "$FAIL" = true ]; then
    exit 1
fi
