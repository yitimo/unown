/**
 * 示例: 函数定义
 */

/** function 声明 */
export function sum(a: number, b: number): number { return a + b; }

/** const function */
export const mul = function (a: number, b: number): number { return a * b; };

/** 箭头函数 */
export const div = (a: number, b: number): number => a / b;

/** 带默认值与可选参数 */
export function greet(name = "world", title?: string) { return `Hello ${title ?? ''}${name}`; }
