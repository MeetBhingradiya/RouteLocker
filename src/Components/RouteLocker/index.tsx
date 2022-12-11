// ! Version 1

import { RouteLockerV1 } from './V1';
import type { RouteLockerV1_Type } from './V1';

// ! Version 2

import { RouteLockerV2 } from './V2';
import type { RouteLockerV2_Type } from './V2';

// ! Version 3

import { RouteLockerV3 } from './V3';
import type { RouteLockerV3_Type } from './V3';

// ! Version 4

import { RouteLockerV4 } from './V4';
import type { RouteLockerV4_Type } from './V4';


// ? Rename Functions and Export

export const RouteLocker_Export_Version = {
    V1: RouteLockerV1,
    V2: RouteLockerV2,
    V3: RouteLockerV3,
    V4: RouteLockerV4
}

export type {
    RouteLockerV1_Type,
    RouteLockerV2_Type,
    RouteLockerV3_Type,
    RouteLockerV4_Type,
}