import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'compound' : () => Promise<undefined>,
  'currentAmount' : () => Promise<number>,
  'topUp' : (arg_0: number) => Promise<undefined>,
  'withdrawl' : (arg_0: number) => Promise<undefined>,
}
