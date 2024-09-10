import { test } from 'vitest';
import { clns } from './index';

test('clns', ({ expect }) => {
  expect(clns('foo')).toBe('foo');
  expect(clns('foo', true && 'bar', false && 'baz')).toBe('foo bar');
});
