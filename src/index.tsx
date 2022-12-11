// ! Import Modules
import { RouteLocker_Export_Version } from './Components';
import type {
    RouteLockerV1_Type,
    RouteLockerV2_Type,
} from './Components';

// ? Rename Functions
const RouteLocker = RouteLocker_Export_Version.V2;

const RouteLockerV1 = RouteLocker_Export_Version.V1;
const RouteLockerV2 = RouteLocker_Export_Version.V2;

// ? Export Functions
export type {
    RouteLockerV1_Type,
    RouteLockerV2_Type,
}
export {
    RouteLocker,
    RouteLockerV1,
    RouteLockerV2,
}