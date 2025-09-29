package main

required_labels := {"app", "env"}

deny[msg] {
  input.kind == "Deployment"
  some label
  required_labels[label]
  not input.metadata.labels[label]
  msg := sprintf("Deployment %s is missing required label: %s", [input.metadata.name, label])
}
