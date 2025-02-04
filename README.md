# Expo AsyncStorage: Handling Large Data Limits

This repository demonstrates a common, yet subtle, issue when using AsyncStorage in Expo applications: exceeding storage limits for large data sets.  The problem manifests as unexpected behavior, crashes, or silent failures without a clear error message. This example highlights the issue and provides a potential solution using alternative storage methods.

## Problem

AsyncStorage, while convenient for simple key-value storage, is not designed to handle extensive data.  Attempting to store a large amount of data can lead to performance issues and instability.  The error is often masked, making it difficult to debug.

## Solution

For managing large data sets within an Expo application, AsyncStorage is unsuitable.  Consider migrating to a more robust solution like SQLite or a cloud-based storage solution (e.g., Firebase, AWS).  This repository demonstrates using SQLite as an alternative.