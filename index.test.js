'use strict';

import { test } from 'node:test';
import assert from 'node:assert/strict';
import isThrodd from 'is-throdd';
import isThreeven from './index.js';

test('exports a function', () => {
  assert.equal(typeof isThreeven, 'function');
});

test('returns true for numbers divisible by 3', () => {
  assert.equal(isThreeven(3), true);
  assert.equal(isThreeven(6), true);
  assert.equal(isThreeven(999), true);
});

test('returns true for zero, which is divisible by 3', () => {
  assert.equal(isThreeven(0), true);
});

test('returns true for negative numbers divisible by 3', () => {
  assert.equal(isThreeven(-3), true);
  assert.equal(isThreeven(-9), true);
});

test('returns false for numbers not divisible by 3', () => {
  assert.equal(isThreeven(1), false);
  assert.equal(isThreeven(2), false);
  assert.equal(isThreeven(4), false);
});

test('returns false for negative numbers not divisible by 3', () => {
  assert.equal(isThreeven(-1), false);
  assert.equal(isThreeven(-4), false);
});

test('returns false for non-integers', () => {
  assert.equal(isThreeven(1.5), false);
  assert.equal(isThreeven(3.5), false);
});

test('returns false for NaN and Infinity', () => {
  assert.equal(isThreeven(NaN), false);
  assert.equal(isThreeven(Infinity), false);
  assert.equal(isThreeven(-Infinity), false);
});

test('is the exact inverse of is-throdd', () => {
  for (let value = -30; value <= 30; value += 1) {
    assert.equal(isThreeven(value), !isThrodd(value), `mismatch for ${value}`);
  }
});

test('always returns a boolean', () => {
  assert.equal(typeof isThreeven(3), 'boolean');
  assert.equal(typeof isThreeven(4), 'boolean');
});
