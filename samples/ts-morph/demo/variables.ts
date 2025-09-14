/**
 * 示例: 变量声明
 */

export const a: number = 1;
export let b = "str";
export var c: boolean = true;

/** const assertion */
export const tuple = [1, "x"] as const;

/** object literal */
export const obj: { x: number; y?: string } = { x: 1 };
