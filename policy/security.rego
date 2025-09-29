package main

deny[msg] {
  input.kind == "Deployment"
  some c
  container := input.spec.template.spec.containers[c]
  container.securityContext.privileged == true
  msg := sprintf("Privileged mode not allowed: container %s in Deployment %s", [container.name, input.metadata.name])
}

deny[msg] {
  input.kind == "Deployment"
  not input.spec.template.spec.securityContext.runAsNonRoot
  msg := sprintf("Deployment %s does not enforce runAsNonRoot", [input.metadata.name])
}
