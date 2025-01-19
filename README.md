# React useEffect Cleanup Issue

This repository demonstrates a common issue in React's `useEffect` hook:  incorrectly handling cleanup in interval-based effects.  The provided `bug.js` shows the flawed implementation, where `setInterval` isn't properly canceled, causing memory leaks and unexpected behavior. The solution (`bugSolution.js`) provides a corrected version.

## Bug

The bug lies in the `useEffect` hook within `MyComponent`.  The `setInterval` is started, but the `return` statement doesn't provide a function to clear the interval, causing the counter to infinitely increment, even after the component is unmounted.  This leads to a memory leak.

## Solution

The solution uses `clearInterval` within the `useEffect` cleanup function to properly stop the interval when the component unmounts or when the dependencies change.