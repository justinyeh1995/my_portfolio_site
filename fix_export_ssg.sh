#!/bin/bash
# ls -l
if [[ "$RUNNER_OS" == "macOS" ]]; then
    LC_ALL=C find "out" -type f -exec sed -i '' 's/\/_next/\.\/_next/g' {} +
else
    find "out" -type f -exec sed -i 's/\/_next/\.\/_next/g' {} +
fi