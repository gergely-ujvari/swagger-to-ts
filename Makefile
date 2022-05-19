
.PHONY: clean
clean:
	@$(RM) -rf ./node_modules

.PHONY: _install-deps
_install-deps:
	@npm install

.PHONY: build
build: _install-deps
	@npm run build

.PHONY: dev
dev:
	@node dist/index.js
