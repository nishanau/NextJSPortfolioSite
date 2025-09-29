package main

deny[msg] {
  input.metadata.namespace == "default"
  msg := sprintf("%s %s should not be deployed to 'default' namespace", [input.kind, input.metadata.name])
}
