.PHONY: build dev format setup smoke ts

build:
	@node_modules/.bin/vite build

deps:
	@yarn install

dev:
	@node_modules/.bin/vite

lint:
	@devtools/list-changed-files.sh | xargs devtools/lint.sh

fix:
	@devtools/list-changed-files.sh | xargs devtools/fix.sh

lint-all:
	@devtools/lint.sh .

fix-all:
	@devtools/fix.sh .

setup:
	@yarn install
	@node_modules/.bin/husky install

smoke:
	@node_modules/.bin/vite preview

ts:
	@node_modules/.bin/tsc --watch --noEmit
