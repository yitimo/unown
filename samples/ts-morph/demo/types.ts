/**
 * 示例: 类型定义(interface, type) + 组合
 */

export interface User { id: string; name: string; tags?: string[]; }

export interface Admin extends User { role: "admin"; }

export type Id = string | number;

export type Result<T> = { ok: true; value: T } | { ok: false; error: string };

export type ReadonlyRecord<K extends string, V> = { readonly [P in K]: V };

export type Func<TArgs extends any[] = any[], TRet = void> = (...args: TArgs) => TRet;
