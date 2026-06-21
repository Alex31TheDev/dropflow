// All code based on foliojs/grapheme-breaker at time of writing
import UnicodeTrie from './text-unicode-trie.ts';
import {wasm} from './wasm.ts';

export let trie: UnicodeTrie;

export function initTrie() {
  trie = new UnicodeTrie(wasm.instance.exports.grapheme_break_trie.value);
}

export const CR = 1;
export const LF = 2;
export const Control = 3;
export const Extend = 4;
export const Regional_Indicator = 5;
export const SpacingMark = 6;
export const L = 7;
export const V = 8;
export const T = 9;
export const LV = 10;
export const LVT = 11;
export const Prepend = 12;
export const ZWJ = 13;
