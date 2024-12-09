.PHONY: build dev format setup smoke ts

build:
	node_modules/.bin/vite build

dev:
	node_modules/.bin/vite

format:
	devtools/format.sh

setup:
	yarn install
	node_modules/.bin/husky install

smoke:
	node_modules/.bin/vite preview

ts:
	node_modules/.bin/tsc --watch --noEmit