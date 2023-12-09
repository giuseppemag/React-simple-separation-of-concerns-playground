#!/bin/bash

(cd ./client; yarn; yarn fe) & (cd ./server; yarn; yarn be)
