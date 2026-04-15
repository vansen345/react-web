#!/bin/sh

REF="$VERCEL_GIT_COMMIT_REF"

if [ "$REF" = "master" ] || [ "$REF" = "dev" ]; then
  exit 1
fi

exit 0