import { GridType } from './types';

// A simple solved Sudoku grid for validation reference
export const SOLVED_GRID = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

// An easy puzzle derived from the solved grid (0 represents empty)
// Pattern follows: 2 empty, 1 empty, 2 empty (repeated for rows)
// The hidden values are specifically chosen to be 1s and 2s to match the "2 1 2" guessed pattern.
export const INITIAL_PUZZLE_NUMBERS = [
  [5, 3, 4, 6, 7, 8, 9, 0, 0], // Hidden: 1, 2
  [6, 7, 0, 1, 9, 5, 3, 4, 8], // Hidden: 2
  [0, 9, 8, 3, 4, 0, 5, 6, 7], // Hidden: 1, 2
  
  [8, 5, 9, 7, 6, 0, 4, 0, 3], // Hidden: 1, 2
  [4, 0, 6, 8, 5, 3, 7, 9, 1], // Hidden: 2
  [7, 0, 3, 9, 0, 4, 8, 5, 6], // Hidden: 1, 2
  
  [9, 6, 0, 5, 3, 7, 0, 8, 4], // Hidden: 1, 2
  [0, 8, 7, 4, 1, 9, 6, 3, 5], // Hidden: 2
  [3, 4, 5, 0, 8, 6, 0, 7, 9]  // Hidden: 2, 1
];

// Helper to generate the typed grid object
export const getInitialGrid = (): GridType => {
  return INITIAL_PUZZLE_NUMBERS.map((row) =>
    row.map((val) => ({
      value: val,
      isInitial: val !== 0,
      isValid: true,
      notes: []
    }))
  );
};