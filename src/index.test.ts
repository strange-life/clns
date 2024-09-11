import { describe, test } from 'vitest';
import { clns } from './index';

describe.concurrent('clns', () => {
  test('non object', ({ expect }) => {
    expect(clns('foo')).toBe('foo');
    expect(clns('foo', true && 'bar', false && 'baz')).toBe('foo bar');
  });

  test('object', ({ expect }) => {
    expect(clns({ foo: true, bar: false, baz: true })).toBe('foo baz');
  });
});
