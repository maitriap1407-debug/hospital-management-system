FROM python:3.12-slim

# Install system dependencies
RUN apt-get update && apt-get install -y \
    ansible \
    curl \
    docker.io \
    && rm -rf /var/lib/apt/lists/*

# Install Kubernetes collection for Ansible
RUN ansible-galaxy collection install community.kubernetes

WORKDIR /ansible

# Keep container running for interaction or execution
ENTRYPOINT ["ansible-playbook"]
CMD ["playbook.yml"]
