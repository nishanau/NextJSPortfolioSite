package main

deny contains msg if {
  input.kind == "Deployment"
  some c
  container := input.spec.template.spec.containers[c]
  not container.resources.limits.cpu
  msg := sprintf("Container %s in Deployment %s has no CPU limit", [container.name, input.metadata.name])
}

deny contains msg if {
  input.kind == "Deployment"
  some c
  container := input.spec.template.spec.containers[c]
  not container.resources.limits.memory
  msg := sprintf("Container %s in Deployment %s has no memory limit", [container.name, input.metadata.name])
}
