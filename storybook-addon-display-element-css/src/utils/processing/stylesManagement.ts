import { addNewLines } from '../formatting/addNewLines';

// Global space to track found styles
export let styles = {};

// Add style to list
export function addStyle(id, style) {
  // Ignore duplicate styles
  if (styles[id]) return null;

  // Save formatted CSS
  styles[id] = addNewLines(style);
}

// Clear all styles
export function clearStyles() {
  styles = {};
}

// Convert styles object to an array of strings
export function stylesToArray() {
  return Object.keys(styles)
    .sort()
    .map(key => styles[key]);
}

// Debug utility to see what styles have been tracked
export function logStyles() {
  console.log('Styles: ', styles);
}
