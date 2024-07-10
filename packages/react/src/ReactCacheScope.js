/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

// TODO: the testing setup in setupHostConfigs makes this return a *function*.
// that's BAD, because it doesn't have any exports that we can use.
// i guess we can't import 'react-server/flight' from this module here?
import {cacheStorage} from 'react-server/src/ReactFlightServer';

export type CacheScope = {
  run: <T>(callback: () => T) => T,
};

export function createCacheScope(): CacheScope {
  const map: Map<Function, mixed> = new Map();
  return {
    run<T>(callback: () => T): T {
      return cacheStorage.run(map, callback);
    },
  };
}
