package main

required_labels := {"app"}

deny contains msg if {
  input.kind == "Deployment"
  some label
  label in required_labels
  not input.metadata.labels[label]
  msg := sprintf("Deployment %s is missing required label: %s", [input.metadata.name, label])
}
