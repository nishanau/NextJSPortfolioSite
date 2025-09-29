package main

deny[msg] {
  input.kind == "Deployment"
  some c
  container := input.spec.template.spec.containers[c]
  not container.livenessProbe
  msg := sprintf("Container %s in Deployment %s has no livenessProbe", [container.name, input.metadata.name])
}
