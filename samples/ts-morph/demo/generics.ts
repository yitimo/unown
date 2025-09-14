/**
 * 示例: 泛型定义
 */

export class Box<T> { constructor(public value: T) {} }
export function mapBox<T, R>(b: Box<T>, f: (t: T) => R): Box<R> { return new Box(f(b.value)); }

export type Maybe<T> = T | undefined | null;
