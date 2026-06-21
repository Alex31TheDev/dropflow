import {wasm} from './wasm.ts';
import UnicodeTrie from './text-unicode-trie.ts';

export let trie: UnicodeTrie;

export function initTrie() {
  trie = new UnicodeTrie(wasm.instance.exports.script_trie.value);
}
