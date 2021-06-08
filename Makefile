include .env

SHELL := /bin/bash
PROJECT_DIRECTORY := $(shell pwd)
PROJECT_NAME := restreamer

define DOCKER_COMPOSE_ARGS
	--log-level ERROR \
	--project-directory $(PROJECT_DIRECTORY) \
	--project-name $(PROJECT_NAME)
endef

help: ## usage
	@cat Makefile | grep -E '^[a-zA-Z_-]+:.*?## .*$$' | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

build: pull ## build docker images
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

pull: ## pull docker images
	@docker-compose ${DOCKER_COMPOSE_ARGS} \
		pull \
			--ignore-pull-failures

up: ## start collection
	@docker-compose ${DOCKER_COMPOSE_ARGS} \
		up \
			--detach \
			--remove-orphans

.PHONY: \
	help \
	build \
	clean \
	down \
	logs \
	pull \
	up
