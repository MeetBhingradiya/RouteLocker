import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import type { RouteProps } from "react-router-dom";

type RouteLockerV4_Type = RouteProps & {
    mode: 'onlyAuth' | 'onlyRole' | 'onlyVariable' | 'onlyBrowser' | 'onlyRouter' | 'useAny' | 'useAll';
    Redirect: {
        Link: String | string | '*'
    }
    Auth?: {
        State: Boolean | boolean | false,
        Anti?: Boolean | boolean | false,
    },
    Role?: {
        State: String | string | 'user',
        Required: String | string | 'user',
        Anti?: Boolean | boolean | false
    },
    Variable?: {
        State: any | undefined,
        Required: any | undefined,
        Anti?: Boolean | boolean | false
    },
    Browser?: {
        Anti?: Boolean | boolean | false,
        Browsers?: {
            Chrome?: Boolean | boolean | true,
            Firefox?: Boolean | boolean | true,
            Safari?: Boolean | boolean | true,
            Opera?: Boolean | boolean | true,
            Edge?: Boolean | boolean | true,
            IE?: Boolean | boolean | false,
            TeamSM?: Boolean | boolean | false,
            Other?: Boolean | boolean | true
        }
    },
    useAny?: Array<'onlyAuth' | 'onlyRole' | 'onlyVariable' | 'onlyBrowser'> | undefined,
    useAll?: Boolean | boolean | false,
}

function RouteLockerV4({ Auth, Role, Variable, Browser, mode, Redirect, useAll, useAny, ...RouteLockerV4_Type }: RouteLockerV4_Type) {

    const PackageName: String | string = 'React-Route-Locker';
    const Version: String | string = 'V4.0.0';
    const Package: String | string = `${PackageName} ${Version}`;
    const Processor_Version: String | string = 'V2.0.0';

    const Route_Processor = () => {
        /**
         * Validator Function For
         * ```JS
         * Route_Processor()
         * ``` 
         */
        const Validate = () => {
            if (typeof mode !== 'undefined') {
                if (mode === 'onlyAuth') {
                    if (typeof Auth?.State !== 'undefined') {
                        return true
                    } else {
                        return false
                    }
                } else if (mode === 'onlyRole') {
                    if (typeof Role?.State !== 'undefined' && typeof Role.Required !== 'undefined') {
                        return true
                    } else {
                        return false
                    }
                } else if (mode === 'onlyVariable') {
                    if (typeof Variable?.State !== 'undefined' && typeof Variable.Required !== 'undefined') {
                        return true
                    } else {
                        return false
                    }
                } else if (mode === 'onlyBrowser') {
                    return true
                } else if (mode === 'onlyRouter') {
                    return true
                } else if (mode === 'useAny') {
                    if (useAny?.includes('onlyAuth')) {
                        if (typeof Auth?.State !== 'undefined') {
                            return true
                        } else {
                            return false
                        }
                    }
                    if (useAny?.includes('onlyRole')) {
                        if (typeof Role?.State !== 'undefined' && typeof Role.Required !== 'undefined') {
                            return true
                        } else {
                            return false
                        }
                    }
                    if (useAny?.includes('onlyVariable')) {
                        if (typeof Variable?.State !== 'undefined' && typeof Variable.Required !== 'undefined') {
                            return true
                        } else {
                            return false
                        }
                    }
                    if (useAny?.includes('onlyBrowser')) {
                        return true
                    }
                    return false
                } else if (mode === 'useAll') {
                    if (useAny?.includes('onlyAuth')) {
                        if (typeof Auth?.State !== 'undefined') {
                            return true
                        } else {
                            return false
                        }
                    }
                    if (useAny?.includes('onlyRole')) {
                        if (typeof Role?.State !== 'undefined' && typeof Role.Required !== 'undefined') {
                            return true
                        } else {
                            return false
                        }
                    }
                    if (useAny?.includes('onlyVariable')) {
                        if (typeof Variable?.State !== 'undefined' && typeof Variable.Required !== 'undefined') {
                            return true
                        } else {
                            return false
                        }
                    }
                }
            } else {
                return false
            }
        }

        const utils = {
            IF: (Condition: any, TrueState: any, FalseState: any): any => {
                if (Condition) {
                    return TrueState
                } else {
                    return FalseState
                }
            },
            IFFunction: (Condition: any, TrueState: Function, FalseState: Function): Function => {
                if (Condition) {
                    return TrueState()
                } else {
                    return FalseState()
                }
            },
        }

        const Auth_Valid = (): Boolean | boolean => {
            if (Auth?.Anti) {
                return utils.IF(Auth, false, true);
            } else {
                return utils.IF(Auth, true, false)
            }
        }

        const Role_Valid = (): Boolean | boolean => {
            if (Role?.Anti) {
                return utils.IF(Role?.State === Role?.Required, false, true);
            } else {
                return utils.IF(Role?.State === Role?.Required, true, false)
            }
        }

        const Variable_Valid = (): Boolean | boolean => {
            if (Variable?.Anti) {
                return utils.IF(Variable?.State === Variable?.Required, false, true);
            } else {
                return utils.IF(Variable?.State === Variable?.Required, true, false)
            }
        }

        const Browser_Valid = () => {
            console.log(`${Package} - Browser Validation Not Available In ${Processor_Version} use Version 4.0.0 OR more`)
            return false
        }

        if (Validate() === true) {
            if (mode === 'onlyAuth') {
                if (Auth_Valid() === true) {
                    return <Route {...RouteLockerV4_Type} />
                } else {
                    return <Navigate to={`${Redirect.Link}`} />
                }
            } else if (mode === 'onlyRole') {
                if (Role_Valid() === true) {
                    return <Route {...RouteLockerV4_Type} />
                } else {
                    return <Navigate to={`${Redirect.Link}`} />
                }
            }
        } if (mode === 'onlyRole') {
            if (Role_Valid() === true) {
                return <Route {...RouteLockerV4_Type} />
            } else {
                return <Navigate to={`${Redirect.Link}`} />
            }
        } else if (mode === 'onlyVariable') {
            if (Variable_Valid() === true) {
                return <Route {...RouteLockerV4_Type} />
            } else {
                return <Navigate to={`${Redirect.Link}`} />
            }
        } else if (mode === 'onlyBrowser') {
            if (Browser_Valid() === true) {
                return <Route {...RouteLockerV4_Type} />
            } else {
                return <Navigate to={`${Redirect.Link}`} />
            }
        } else if (mode === 'onlyRouter') {
            return <Route {...RouteLockerV4_Type} />
        } else {
            console.log(`${Package}  Something Went Wrong`)
        }
    }

    return (<Routes>
        {Route_Processor()}
    </Routes>)
}

export { RouteLockerV4 };
export type { RouteLockerV4_Type };
