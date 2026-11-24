# Patient Momentum Scalp — Pump.fun Replay Sprint

![make.fun](https://make.fun/badge/u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122.svg)
![rank](https://make.fun/badge/u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122/jajanb923-netizen/u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122/rank.svg)
![reward](https://make.fun/badge/u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122/jajanb923-netizen/u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122/reward.svg)

A paper-trading bot for the [Pump.fun Replay Sprint — Paper Bot, Real Ranking](https://make.fun/bounty/u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122) bounty on make.fun. It trades 10 SOL of paper money on a 24h replay of pump.fun bonding-curve events. Nothing is traded for real.

## Strategy

Do NOT snipe a launch in its first slots (that is where bundled creator clusters dump). Wait until a curve has shown organic buy pressure — several distinct buyers, net SOL flowing in, price rising and holding near its recent high, creator not sold — then buy a small fixed stake (0.05 SOL) and exit fast on a take-profit (+25%), a tight stop (−10%), a trailing stop, fading flow, a big dump, the creator selling, or a time limit. One buy per coin, no pyramiding.

Tuned on the kit's dev window with the local sim port: **−0.049 SOL net PnL across all 5 fail-key draws, 40 coins, 10 wins, max drawdown 0.0072** — versus −9.38 SOL for the house momentum pilot, −1.78 SOL for the reversion pilot, and −0.135 SOL for the sniper pilot on the same window. See `strategy.ts` for the sweep history.

## Layout

- `main.ts` — entrypoint; the grader runs `node /bot/main.ts` (Node 22+).
- `strategy.ts` — the strategy (pure function of the batches; no clock, no randomness, no I/O, so the two graded runs produce byte-identical action logs).
- `vendor/makefun-bot.ts` — byte-identical copy of the kit's `sdk/ts/makefun-bot.ts` protocol shim.

## Local check

```sh
node /tmp/runner.ts strategy.ts   # via the kit's sim port (see run log)
node <kit>/cli/makefun.mjs grade-local --kit <kit> --bot . --driver process --worktree
```

## License

MIT — see `LICENSE`.
