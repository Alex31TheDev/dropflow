import env from './wasm-env.ts';

declare const WebAssembly: any;

const wasi_snapshot_preview1 = {
  proc_exit() {},
  fd_close() {},
  fd_write() {},
  fd_seek() {}
};

export let wasm: any = null;

export function initWasm(buffer: ArrayBuffer | Uint8Array): Promise<any> {
  return WebAssembly.instantiate(buffer, {env, wasi_snapshot_preview1}).then((res: any) => {
    wasm = res;
    wasm.instance.exports.lang_script_database_init();
    return wasm;
  });
}
