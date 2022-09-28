import React from "react";
import { Navigate, Outlet } from 'react-router-dom';

export const Modes: Array<String> = ['onlyAuth', 'onlyRole', 'onlyVariable', 'useBoth', 'useAll'];

interface RouteLokerProps {
    mode: String,
    User_State: {
        Auth?: Boolean | false,
        Role?: String | 'user',
        Variable?: any | undefined,
    },
    Redirect: {
        RoleRedirect?: {
            enable: Boolean | false,
            Links: Array<String> | ['/admin/home', '/user/home'],
            Roles: Array<String> | ['admin', 'user'],
        },
        Link: String,
    },
    Hooks: {
        useAuth?: {
            enable: Boolean | false
            AntiAuth?: Boolean | false,
        },
        useRole?: {
            enable: Boolean | false,
            Expect_Role: String,
            AntiRole?: Boolean | false,
        },
        useVariable?: {
            enable?: Boolean,
            Expect_Variable?: String,
            AntiVariable?: Boolean | false,
        },
        useBoth?: Array<String>,
        useAll?: Boolean | false,
    }
}

function RouteLocker({
    mode,
    User_State,
    Redirect: {
        Link,
        RoleRedirect
    },
    Hooks: {
        useAll,
        useAuth,
        useBoth,
        useRole,
        useVariable
    }
}: RouteLokerProps) {
    const PackageName: String = 'RouteLocker';
    const Version: String = 'V3';
    const Package: String = `${PackageName}${Version}`

    const Validate_Props = () => {
        const only_Auth_Valid = () => {
            if (User_State.Auth === undefined) {
                if (useAuth?.AntiAuth === true && useAuth.enable === true) {
                    return true
                } else if (useAuth?.enable === true) {
                    return true
                } else {
                    throw new Error(`${Package} : useAuth.enable Undefined OR You Set To False :( `)
                }
            } else {
                throw new Error(`${Package} : User_State.Auth Undefined :( `)
            }
        }

        const only_Role_Valid = () => {
            if (User_State.Role === undefined) {
                if (useRole?.AntiRole === true && useRole.enable === true) {
                    return true
                } else if (useRole?.enable === true) {
                    return true
                } else {
                    throw new Error(`${Package} : useRole.enable Undefined OR You Set To False :( `)
                }
            } else {
                throw new Error(`${Package} : User_State.Role Undefined :( `)
            }
        }

        const only_Variable_Valid = () => {
            if (User_State.Variable === undefined) {
                if (useVariable?.AntiVariable === true && useVariable.enable === true) {
                    return true
                } else if (useVariable?.enable === true) {
                    return true
                } else {
                    throw new Error(`${Package} : useVariable.enable Undefined OR You Set To False :( `)
                }
            } else {
                throw new Error(`${Package} : User_State.Variable Undefined :( `)
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
                        throw new Error(`${Package} : useBoth Undefined :( `)
                    }
                } else if (mode === 'useAll') {
                    if (useAll === true) {
                        if (only_Auth_Valid() === true && only_Role_Valid() === true && only_Variable_Valid() === true) {
                            return true
                        } else {
                            return false
                        }
                    } else {
                        throw new Error(`${Package} : useAll Undefined OR You Set To False :( `)
                    }
                } else {
                    throw new Error(`${Package} : mode Invalid :( `)
                }
            } else {
                throw new Error(`${Package} : Redirect Link Undefined :( `)
            }
        } else {
            throw new Error(`${Package} : Mode Undefined :( `)
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

    const Role_Redirect = () => {
        if (RoleRedirect?.enable === true && Role_Verify() === false) {
            const Data = RoleRedirect?.Roles.map((Role, Index) => {
                if (User_State.Role === Role) {
                    if (Role === 'guest') {
                        return <Outlet />
                    }
                    else {
                        return RoleRedirect?.Links[Index]
                    }
                }
                return null
            })
            return Data
        } else {
            return <Navigate to={`${Link}`} />
        }
    }

    const Route_ProcessorV3 = () => {
        if (Validate_Props() === true) {
            if (mode === "onlyAuth") {
                if (Auth_Verify() === true) {
                    return <Outlet />
                } else {
                    return Role_Redirect()
                }
            } else if (mode === 'onlyRole') {
                if (Role_Verify() === true) {
                    return <Outlet />
                } else {
                    return Role_Redirect()
                }
            } else if (mode === 'onlyVariable') {
                if (Variable_Verify() === true) {
                    return <Outlet />
                } else {
                    return Role_Redirect()
                }
            } else if (mode === 'useBoth') {
                if (Both_Verify() === true) {
                    return <Outlet />
                } else {
                    return Role_Redirect()
                }
            } else if (mode === 'useAll') {
                if (All_Verify() === true) {
                    return <Outlet />
                } else {
                    return Role_Redirect()
                }
            } else {
                throw new Error('RouteLockerV2 Mode Type Invalid! : Plz Define Valid Mode of RouteLockerV2.')
            }
        } else {
            throw new Error('Validating Error : RouteLockerV2.')
        }
    }

    return Route_ProcessorV3()
}

export { RouteLocker };