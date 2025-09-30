package main

deny contains msg if {
  input.metadata.namespace == "default"
  msg := sprintf("%s %s should not be deployed to 'default' namespace", [input.kind, input.metadata.name])
}
