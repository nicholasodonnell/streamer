include .env

SHELL := /bin/bash
PROJECT_DIRECTORY := $(shell pwd)
PROJECT_NAME := streamer

define DOCKER_COMPOSE_ARGS
	--log-level ERROR \
	--project-directory $(PROJECT_DIRECTORY) \
	--project-name $(PROJECT_NAME)
endef

help: ## usage
	@cat Makefile | grep -E '^[a-zA-Z_-]+:.*?## .*$$' | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

build: ## build docker images
	@docker-compose ${DOCKER_COMPOSE_ARGS} \
		build \
			--force-rm \
			--pull

clean: ## remove docker images
	@docker-compose ${DOCKER_COMPOSE_ARGS} \
		down \
			--remove-orphans \
			--rmi all \
			--volumes

dev: ## start collection in client development mode
	@docker-compose ${DOCKER_COMPOSE_ARGS} \
		up \
			--detach \
			--remove-orphans \
			client-development \
			restreamer;
	@docker-compose ${DOCKER_COMPOSE_ARGS} \
		up \
			--detach \
			--remove-orphans \
			gateway-development;

down: ## stop collection
	@docker-compose ${DOCKER_COMPOSE_ARGS} \
		down \
			--remove-orphans \
			--volumes

logs: ## view the logs of one or more running services
ifndef file
	@docker-compose ${DOCKER_COMPOSE_ARGS} \
		logs \
			--follow \
			$(service)
else
	@echo "logging output to $(file)";
	@docker-compose ${DOCKER_COMPOSE_ARGS} \
		logs \
			--follow \
			$(service) > $(file)
endif

up: ## start collection
	@docker-compose ${DOCKER_COMPOSE_ARGS} \
		up \
			--detach \
			--remove-orphans \
			client \
			restreamer;
	@docker-compose ${DOCKER_COMPOSE_ARGS} \
		up \
			--detach \
			--remove-orphans \
			gateway

.PHONY: \
	help \
	build \
	clean \
	dev \
	down \
	logs \
	up
