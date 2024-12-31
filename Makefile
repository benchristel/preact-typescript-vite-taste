.PHONY: build dev format setup smoke ts

build:
	node_modules/.bin/vite build

dev:
	node_modules/.bin/vite

lint:
	devtools/list-changed-files.sh | xargs devtools/lint.sh

format:
	devtools/list-changed-files.sh | xargs devtools/format.sh

lint-all:
	devtools/lint.sh .

format-all:
	devtools/format.sh .

setup:
	yarn install
	node_modules/.bin/husky install

smoke:
	node_modules/.bin/vite preview

ts:
	node_modules/.bin/tsc --watch --noEmit
