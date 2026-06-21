import {wasm} from './wasm.ts';
import UnicodeTrie from './text-unicode-trie.ts';

export const InCB_Consonant = 1;
export const InCB_Extend = 2;
export const InCB_Linker = 3;

export let trie: UnicodeTrie;

export function initTrie() {
  trie = new UnicodeTrie(wasm.instance.exports.derived_core_properties_trie.value);
}


