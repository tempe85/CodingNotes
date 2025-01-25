<small>[Return Home](./../../README.md)</small>

- Container management (orchestration) system

What does it offer?

- Helps maintain high availablity of an app
- Scale up/scale down app based on load
- Disaster recovery

### Architecture

- 1 Master node, multiple worker nodes
  - Worker nodes is where the application is run
  - Master node is where the cluster management is happening
    - UI, API, and CLI for the cluster
    - Api server -> Entrypoint to cluster
    - Controller manager -> Keeps track of whats happening in the cluster
    - Scheduler -> Ensures pods placement

## Helm Charts

- Kubernetes Package manager

Udemy courses:
[Kubernetes for Absolute Beginners](../Kubernetes/KubernetesForAbsoluteBeginners/index.md)
