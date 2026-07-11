HOST ?= 0.0.0.0
SITE_HOST ?= 192.168.1.102
PORT ?= 4325

.PHONY: install dev dev-stop build preview serve pre check cv-export cv-check test-lighthouse

install:
	pnpm install

dev:
	$(MAKE) dev-stop
	pnpm exec astro dev --host $(HOST) --allowed-hosts --port $(PORT)

dev-stop:
	-pnpm exec astro dev stop
	@pids=$$(lsof -tiTCP:$(PORT) -sTCP:LISTEN 2>/dev/null); \
	if [ -n "$$pids" ]; then \
		echo "Stopping process(es) on port $(PORT): $$pids"; \
		kill $$pids; \
	fi

build:
	pnpm run build

preview: build
	$(MAKE) dev-stop
	pnpm exec astro preview --host $(HOST) --allowed-hosts --port $(PORT)

serve: build
	$(MAKE) dev-stop
	pnpm exec papyrus-serve-static dist $(PORT) $(SITE_HOST)

pre:
	pnpm run precommit

check:
	pnpm run check

cv-export:
	pnpm run cv:export

cv-check:
	pnpm run cv:check

test-lighthouse:
	pnpm run test:lighthouse
