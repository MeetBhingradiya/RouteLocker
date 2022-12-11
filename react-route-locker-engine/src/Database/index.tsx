import { RouteLockerV1_Type, RouteLockerV2_Type } from "react-route-locker";

const PrivateRouteV1:RouteLockerV1_Type  = {
    mode: "onlyAuth",
    User_State: {
        Auth: true,
    },
    Redirect: {
        Link: "login",
    },
    Hooks: {
        useAuth: {
            enable: true,
            AntiAuth: false
        }
    }
}

const PrivateRouteV2:RouteLockerV2_Type  = {
    mode: "onlyAuth",
    User_State: {
        Auth: true,
    },
    Redirect: {
        Link: "login",
        mode: "Normal",
        type: "Client"
    },
    useAuth: {
        enable: true,
        AntiAuth: false
    }
}

export const PrivateRoute = {
    V1: PrivateRouteV1,
    V2: PrivateRouteV2
}