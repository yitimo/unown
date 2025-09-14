/**
 * 示例: JSDoc 注释
 * @packageDocumentation
 */

/** 用户实体 */
export interface DocUser {
  /** 用户 id */
  id: string;
  /** 用户名 */
  name: string;
}

/**
 * 计算加和
 * @param a 第一个数
 * @param b 第二个数
 * @returns 和
 */
export function add(a: number, b: number): number { return a + b; }
