# Dockerfile for setting up this workspace in gitpod
FROM gitpod/workspace-full

RUN sudo apt-get update && \
    sudo apt-get install -y imagemagick && \
    sudo apt-get install -y sass