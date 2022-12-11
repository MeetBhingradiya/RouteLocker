import React from "react";
import { Navigate, Outlet } from 'react-router-dom';

interface RouteLockerV1_Type {
    mode: 'onlyAuth'| 'onlyRole'| 'onlyVariable'| 'useBoth'| 'useAll',
    User_State: {
        Auth?: Boolean | false,
        Role?: String | 'user',
        Variable?: any | undefined,
    },
    Redirect: {
        Link: String,
    },
    Hooks: {
        useAuth?: {
            enable: Boolean | false
            AntiAuth?: Boolean | false,
        },
        useRole?: {
            enable: Boolean | false,
            'Expect_Role': String,
            AntiRole?: Boolean | false,
        },
        useVariable?: {
            enable?: Boolean,
            'Expect_Variable'?: String,
            AntiVariable?: Boolean | false,
        },
        useBoth?: Array<String>,
        useAll?: Boolean | false,
    }
}

function RouteLockerV1({
    mode,
    User_State,
    Redirect: {
        Link
    },
    Hooks: {
        useAll,
        useAuth,
        useBoth,
        useRole,
        useVariable
    }
}: RouteLockerV1_Type) {
    const PackageName: String = 'RouteLocker';
    const Version: String = 'V1';
    const Package: String = `${PackageName}${Version}`

    function Validate_Props () {
        const only_Auth_Valid = () => {
            if (User_State.Auth === undefined) {
                if (useAuth?.AntiAuth === true && useAuth.enable === true) {
                    return true;
                } else if (useAuth?.enable === true) {
                    return true;
                } else {
                    return Error(`${Package} : useAuth.enable Undefined OR You Set To False :( `);
                }
            } else {
                return Error(`${Package} : User_State.Auth Undefined :( `);
            }
        }

        const only_Role_Valid = () => {
            if (User_State.Role === undefined) {
                if (useRole?.AntiRole === true && useRole.enable === true) {
                    return true
                } else if (useRole?.enable === true) {
                    return true
                } else {
                    return Error(`${Package} : useRole.enable Undefined OR You Set To False :( `)
                }
            } else {
                return Error(`${Package} : User_State.Role Undefined :( `)
            }
        }

        const only_Variable_Valid = () => {
            if (User_State.Variable === undefined) {
                if (useVariable?.AntiVariable === true && useVariable.enable === true) {
                    return true
                } else if (useVariable?.enable === true) {
                    return true
                } else {
                    return Error(`${Package} : useVariable.enable Undefined OR You Set To False :( `)
                }
            } else {
                return Error(`${Package} : User_State.Variable Undefined :( `)
            }
        }

        if (typeof mode !== 'undefined') {
            if (typeof Link !== 'undefined') {
                if (mode === 'onlyAuth') {
                    if (only_Auth_Valid() === true) {
                        return true
                    } else {
                        return false
                    }
                } else if (mode === 'onlyRole') {
                    if (only_Role_Valid() === true) {
                        return true
                    } else {
                        return false
                    }
                } else if (mode === 'onlyVariable') {
                    if (only_Variable_Valid() === true) {
                        return true
                    } else {
                        return false
                    }
                } else if (mode === 'useBoth') {
                    if (useBoth?.length === 2 && typeof useBoth !== 'undefined') {
                        const Both_1: String = useBoth[0]
                        const Both_2: String = useBoth[1]
                        if (Both_1 === 'onlyAuth' && Both_2 === 'onlyRole') {
                            if (only_Auth_Valid() === true && only_Role_Valid() === true) {
                                return true
                            } else {
                                return false
                            }
                        }
                    } else {
                        return Error(`${Package} : useBoth Undefined :( `)
                    }
                } else if (mode === 'useAll') {
                    if (useAll === true) {
                        if (only_Auth_Valid() === true && only_Role_Valid() === true && only_Variable_Valid() === true) {
                            return true
                        } else {
                            return false
                        }
                    } else {
                        return Error(`${Package} : useAll Undefined OR You Set To False :( `)
                    }
                } else {
                    return Error(`${Package} : mode Invalid :( `)
                }
            } else {
                return Error(`${Package} : Redirect Link Undefined :( `)
            }
        } else {
            return Error(`${Package} : Mode Undefined :( `)
        }
    }

    const Auth_Verify = () => {
        if (useAuth?.AntiAuth !== true) {
            if (User_State.Auth === true) {
                return true;
            } else {
                return false;
            }
        } else {
            if (User_State.Auth !== true) {
                return true;
            } else {
                return false;
            }
        }
    }

    const Role_Verify = () => {
        if (useRole?.AntiRole !== true) {
            if (User_State.Role === useRole?.Expect_Role) {
                return true;
            } else {
                return false;
            }
        } else {
            if (User_State.Role !== useRole.Expect_Role) {
                return true;
            } else {
                return false;
            }
        }
    }

    const Variable_Verify = () => {
        if (useVariable?.AntiVariable !== true) {
            if (User_State.Variable === useVariable?.Expect_Variable) {
                return true;
            } else {
                return false;
            }
        }
        else {
            if (User_State.Variable !== useVariable?.Expect_Variable) {
                return false;
            } else {
                return true;
            }
        }
    }

    const Both_Verify = () => {
        if (useBoth?.includes('onlyAuth') && useBoth?.includes('onlyRole')) {
            if (Auth_Verify() && Role_Verify()) {
                return true;
            } else {
                return false;
            }
        } else if (useBoth?.includes('onlyAuth') && useBoth?.includes('onlyVariable')) {
            if (Auth_Verify() && Variable_Verify()) {
                return true;
            } else {
                return false;
            }
        } else if (useBoth?.includes('onlyRole') && useBoth?.includes('onlyVariable')) {
            if (Role_Verify() && Variable_Verify()) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    const All_Verify = () => {
        if (Auth_Verify() && Role_Verify() && Variable_Verify()) {
            return true;
        } else {
            return false;
        }
    }


    const Route_ProcessorV1 = () => {
        if (Validate_Props() === true) {
            if (mode === "onlyAuth") {
                if (Auth_Verify() === true) {
                    return <Outlet />
                } else {
                    return <Navigate to={`${Link}`} />
                }
            } else if (mode === 'onlyRole') {
                if (Role_Verify() === true) {
                    return <Outlet />
                } else {
                    return <Navigate to={`${Link}`} />
                }
            } else if (mode === 'onlyVariable') {
                if (Variable_Verify() === true) {
                    return <Outlet />
                } else {
                    return <Navigate to={`${Link}`} />
                }
            } else if (mode === 'useBoth') {
                if (Both_Verify() === true) {
                    return <Outlet />
                } else {
                    return <Navigate to={`${Link}`} />
                }
            } else if (mode === 'useAll') {
                if (All_Verify() === true) {
                    return <Outlet />
                } else {
                    return <Navigate to={`${Link}`} />
                }
            } else {
                return Error('RouteLockerV1 Mode Type Invalid! : Plz Define Valid Mode of RouteLockerV1')
            }
        } else {
            return Error('Validating Error : RouteLockerV1')
        }
    }

    return Route_ProcessorV1()
}

export { RouteLockerV1 };
export type { RouteLockerV1_Type };