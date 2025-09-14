/** Utility types and decorators used across demos */

/** JSDoc: simple utility constant */
export const VERSION = "1.0.0";

/** JSDoc: add metadata onto a class */
export function Meta(tag: string) {
  return function (target: Function) {
    // attach metadata
    Reflect.defineProperty(target, Symbol.for("meta:tag"), { value: tag });
  };
}

/** JSDoc: member decorator */
export function Log(): any {
  return function (...args: any[]) {
    // no-op for demo
  } as any;
}

/** JSDoc: generic identity */
export function identity<T>(v: T): T { return v; }

/** JSDoc: an exported interface */
export interface LibThing { id: string; }
