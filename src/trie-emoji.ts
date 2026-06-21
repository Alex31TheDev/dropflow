import {wasm} from './wasm.ts';
import UnicodeTrie from './text-unicode-trie.ts';

export const Emoji                 = 1 << 0
export const Emoji_Presentation    = 1 << 1;
export const Emoji_Modifier        = 1 << 2;
export const Emoji_Modifier_Base   = 1 << 3;
export const Extended_Pictographic = 1 << 4;

export let trie: UnicodeTrie;

export function initTrie() {
  trie = new UnicodeTrie(wasm.instance.exports.emoji_trie.value);
}
