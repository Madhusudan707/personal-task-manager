declare module "uuid" {
  export function v1(
    options?: {
      node?: number[];
      clockseq?: number;
      msecs?: number;
      nsecs?: number;
    },
    buf?: Buffer,
    offset?: number
  ): string;
  export function v3(name: string | Buffer, namespace: string | Buffer): string;
  export function v4(options?: {
    random?: number[];
    rng?: () => number[];
  }): string;
  export function v5(name: string | Buffer, namespace: string | Buffer): string;
}

declare module "lodash.debounce" {
  import { DebounceSettings } from "lodash";

  function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait?: number,
    options?: DebounceSettings
  ): T;

  export default debounce;
}
