// Patient momentum scalp for the pump.fun replay (agent-fun/replay/v2).
//
// The grader runs `node /bot/main.ts`; the strategy lives in strategy.ts and the
// protocol in the vendored SDK shim (vendor/makefun-bot.ts, a byte-identical copy
// of the kit's sdk/ts/makefun-bot.ts). Pure function of the batches it is fed:
// no clock, no randomness, no I/O, no environment reads — so the two graded
// executions produce byte-identical action logs.

import { runBot } from './vendor/makefun-bot.ts';
import { createStrategy, DEFAULT_PARAMS } from './strategy.ts';

const strategy = createStrategy(DEFAULT_PARAMS);

await runBot({
  onBatch: (state, batch) => strategy.onBatch(state, batch),
});
