package main

deny contains msg if {
  input.kind == "Deployment"
  some c
  container := input.spec.template.spec.containers[c]
  endswith(container.image, ":latest")
  msg := sprintf("Deployment %s uses ':latest' tag in container %s", [input.metadata.name, container.name])
}
