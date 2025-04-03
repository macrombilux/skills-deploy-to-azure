#-------------------------------------------------------------------------------#
#               Qodana analysis is configured by qodana.yaml file               #
#             https://www.jetbrains.com/help/qodana/qodana-yaml.html            #
#-------------------------------------------------------------------------------#
version: "1.0"
#Specify inspection profile for code analysis
profile:
  name: qodana.starter
#Enable inspections
#include:
#  - name: <SomeEnabledInspectionId>
#Disable inspections
#exclude:
#  - name: <SomeDisabledInspectionId>
#    paths:
#      - <path/where/not/run/inspection>
#Execute shell command before Qodana execution (Applied in CI/CD pipeline)
#bootstrap: sh ./prepare-qodana.sh
#Install IDE plugins before Qodana execution (Applied in CI/CD pipeline)
#plugins:
#  - id: <plugin.id> #(plugin id can be found at https://plugins.jetbrains.com)
#Specify Qodana linter for analysis (Applied in CI/CD pipeline)
linter: jetbrains/qodana-js:2025.1

# The following exclude section was removed as it was preventing Qodana
# from analyzing the main source code files by excluding 'All' inspections
# for the src directory and handler.js.
# exclude:
#   - name: All
#     paths:
#       - src
#       - src/index.js
#       - handler.js
