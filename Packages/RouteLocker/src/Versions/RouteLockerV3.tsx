import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface Route_Locker_Debug_Props {
    // Modes OF RouteLoker System
    mode: 'onlyAuth' | 'onlyRole' | 'onlyVariable' | 'onlyRedirect' | 'useBoth' | 'useAll';
    // Authetication And User States
    User_State: {
        Auth?: Boolean | false
        Role?: String | 'user'
        Variable?: any | undefined
    }
    // Normal Redirect UseOnly
    Redirect?: {
        // ? Default Redirect Mode is 'Normal' Always ON
        mode: 'Normal' | 'RoleRedirect' | 'API'
        // ? Auto Detect ON  Normal => Client , RoleRedirect => Client , API => Server
        type: 'Client' | 'Server'
        // ? RoleRedirect Mode Data Must Be Provided otherwise it will be throw Error
        /**
         * Advanced Role Redirect System
         * @param {Array<String>} Roles
         * @param {Array<String>} Links
         * 
         * Note : 
         * + Roles and Links must be same length
         * + Role1 To Be Redirected At Link1
         * + if first Role is admin so you need to pass first Link Admin Dashbord Like : ```/admin/home```
         */
        useRoleRedirect?: {
            Links: Array<String> | ['/admin/home', '/user/home']
            Roles: Array<String> | ['admin', 'user']
        }
        // ? Link Must Be Provided otherwise it will be throw Error
        Link?: String
    }
    // User Authetication Mode Data
    useAuth?: {
        enable: Boolean | false
        AntiAuth?: Boolean | false
    }
    // User Role Mode Data
    useRole?: {
        enable: Boolean | false
        Expect_Role: String
        AntiRole: Boolean | false
    }
    // User Variable Mode Data
    useVariable?: {
        enable: Boolean | false
        Expect_Variable?: String
        AntiVariable: Boolean | false
    }
    /**
     * You Put modes in Array that you need
     * + onlyAuth
     * + onlyRole
     * + onlyVariable
     * + onlyRedirect
     */
    useBoth?: Array<String>
    /**
     * You enable this mode to You use all modes in RouteLoker Listed Down Below
     * + onlyAuth
     * + onlyRole
     * + onlyRedirect
     */
    useAll?: Boolean | false
    /**  
     * You can use Any of this Modes.
     * + onlyAuth
     * + onlyRole
     * + onlyVariable
     * + onlyRedirect
     * + onlyDebug
     */
    useAny?: Array<String>
}

const Debug = (String?: 'testing') => {
    if (typeof String === 'undefined') {
        var Debug_Test_Data: Array<Object> = []

        Debug_Test_Data.push({ name: 'Test 1', status: true, desc: 'Test Sucsessfully Passed 1' })
        Debug_Test_Data.push({ name: 'Test 1', status: true, desc: 'Test Sucsessfully Passed 2' })
        Debug_Test_Data.push({ name: 'Test 1', status: false, desc: 'Test  Fail 3'  , errorCode : 404})

        return Debug_Test_Data
    } else {
        return true
    }
}

interface RouteLokerProps {
    // Modes OF RouteLoker System
    mode: 'onlyAuth' | 'onlyRole' | 'onlyVariable' | 'onlyRedirect' | 'onlyDebug' | 'useBoth' | 'useAll';
    // Authetication And User States
    User_State: {
        Auth?: Boolean | false
        Role?: String | 'user'
        Variable?: any | undefined
    }
    Redirect?: {
        // ? Default Redirect Mode is 'Normal' Always ON
        mode: 'Normal' | 'RoleRedirect' | 'API'
        // ? Auto Detect ON  Normal => Client , RoleRedirect => Client , API => Server
        type: 'Client' | 'Server'
        // ? RoleRedirect Mode Data Must Be Provided otherwise it will be throw Error
        /**
         * Advanced Role Redirect System
         * @param {Array<String>} Roles
         * @param {Array<String>} Links
         * 
         * Note : 
         * + Roles and Links must be same length
         * + Role1 To Be Redirected At Link1
         * + if first Role is admin so you need to pass first Link Admin Dashbord Like : ```/admin/home```
         */
        useRoleRedirect?: {
            Links: Array<String> | ['/admin/home', '/user/home']
            Roles: Array<String> | ['admin', 'user']
        }
        // ? Link Must Be Provided otherwise it will be throw Error
        Link?: String
    }
    // User Authetication Mode Data
    useAuth?: {
        enable: Boolean | false
        AntiAuth?: Boolean | false
    }
    // User Role Mode Data
    useRole?: {
        enable: Boolean | false
        Expect_Role: String
        AntiRole: Boolean | false
    }
    // User Variable Mode Data
    useVariable?: {
        enable: Boolean | false
        Expect_Variable?: String
        AntiVariable: Boolean | false
    }
    /**
     * You Put modes in Array that you need
     * + onlyAuth
     * + onlyRole
     * + onlyVariable
     * + onlyRedirect
     */
    useBoth?: Array<String>
    /**
     * You enable this mode to You use all modes in RouteLoker Listed Down Below
     * + onlyAuth
     * + onlyRole
     * + onlyRedirect
     */
    useAll?: Boolean | false
    /** 
     * Debug Mode
     * 
     * + Debug Mode is Only For Developer
     * + Debug Mode Not Throw any Type of Error so Developer can Understand How RouteLoker Works!
     * + Setup of Debug Mode Is Hard. So Developer Must Know How to Use it! From Documentation
    */
    useDebug?: {
        enable: Boolean | false
        type: 'Console' | 'UI' | 'Console & UI'
        test_data?: any
    }
    /**  
     * You can use Any of this Modes.
     * + onlyAuth
     * + onlyRole
     * + onlyVariable
     * + onlyRedirect
     * + onlyDebug
     */
    useAny?: Array<String>
}

/**
 * ### RouteLocker V3
 * + Most Advanced RouteLocker System
 * + Use This System For Protecting Your Routes With Authetication , Role , Variable , API Redirect , Role Redirect
 * + Most Advanced Role Rediect System , API Redirection
 * +
 * + Easy To Use
 * + Easy To Understand
 * + Easy To Customize
 * + Easy To Debug
 * + Friendly With Devlopers with Debugging Mode
 * +
 * + ```Notice``` : Debug Mode Not Friendly With Production Mode 
 * + ```Snippets``` : @see https://github.com/MeetBhingradiya/RouteLocker/blob/main/Snippets.md
 * + 
 * + Coming Soon : Multi Version Support [ React-Router-DOM V5 , React-Router-DOM V6 ]
 * + Coming Soon : Multi Language Support [ Typescript , Javascript ]
 * + Coming Soon : Debug Mode
 * + Coming Soon : Server Side Redirect
 * 
 * #### Usage
 * + React Router DOM V6
 * ```
 * <Route element={<RouteLocker Properties={[Props]} />}>
 * {... Your Routes}
 * </Route>
 * ```
 * 
 * + + With ```OnlyDebug``` Mode :
 * ```
 * <RouteLocker Properties={[Props]} />
 * ```
 * 
 *  ```CopyRight teamsm(c)2022``` ```license : Apache-2.0``` ```Author : Meet Bhingradiya```
 */
// ! Any
function RouteLocker({ Properties }: any): Array<String> | any {

    const {
        mode,
        User_State,
        Redirect,
        useAuth,
        useRole,
        useBoth,
        useAll,
        useVariable,
        useDebug
    }: RouteLokerProps = Properties[0]

    const PackageName: String = 'RouteLocker'
    const Version: String = 'V3'
    const Package: String = `${PackageName}${Version}`

    function Validate_Props() {
        // ! Functions

        // # 1
        const only_Auth_Valid = () => {
            if (User_State.Auth !== undefined) {
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

        // # 2
        const only_Role_Valid = () => {
            if (User_State.Role !== undefined) {
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

        // # 3
        const only_Variable_Valid = () => {
            if (User_State.Variable !== undefined) {
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

        // # 4
        // const Redirect_Valid = () => {
        //     if (typeof Redirect?.mode !== 'undefined') {
        //         if (Redirect?.mode === 'Normal') {
        //             if (typeof Redirect?.Link !== 'undefined' || typeof Redirect?.Link === 'string') {
        //                 return true
        //             } else {
        //                 throw new Error(`${Package} : Redirect.Link Undefined :( `)
        //             }
        //         } else if (Redirect?.mode === 'RoleRedirect') {
        //             if (typeof Redirect?.useRoleRedirect !== 'undefined') {
        //                 if (typeof Redirect?.useRoleRedirect.Links !== 'undefined' && typeof Redirect?.useRoleRedirect.Roles !== 'undefined') {
        //                     return true
        //                 } else {
        //                     throw new Error(`${Package} : Redirect.useRoleRedirect.Links OR Redirect.useRoleRedirect.Roles Undefined :( `)
        //                 }
        //             } else {
        //                 throw new Error(`${Package} : Redirect.useRoleRedirect Undefined :( `)
        //             }
        //         } else if (Redirect?.mode === 'API') {
        //             if (typeof Redirect?.Link !== 'undefined') {
        //                 return true
        //             } else {
        //                 throw new Error(`${Package} : Redirect.Link Undefined :( `)
        //             }
        //         }
        //     } else {
        //         throw new Error(`${Package} : Redirect.mode Undefined :( `)
        //     }
        // }

        // # 5
        const only_Debug_Valid = () => {
            if (useDebug?.enable === true) {
                if (typeof useDebug?.type !== 'undefined') {
                    return true
                } else {
                    throw new Error(`${Package} : useDebug.type Undefined :( `)
                }
            } else {
                throw new Error(`${Package} : useDebug.enable Undefined OR You Set To False :( `)
            }
        }


        if (typeof mode !== 'undefined') {
            if (typeof Redirect !== 'undefined') {
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
                        if ((Both_1 === 'onlyAuth' && Both_2 === 'onlyRole') || (Both_1 === 'onlyRole' && Both_2 === 'onlyAuth')) {
                            if (only_Auth_Valid() === true && only_Role_Valid() === true) {
                                return true
                            } else {
                                return false
                            }
                        } else if ((Both_1 === 'onlyAuth' && Both_2 === 'onlyVariable') || (Both_1 === 'onlyVariable' && Both_2 === 'onlyAuth')) {
                            if (only_Auth_Valid() === true && only_Variable_Valid() === true) {
                                return true
                            } else {
                                return false
                            }
                        } else if ((Both_1 === 'onlyRole' && Both_2 === 'onlyVariable') || (Both_1 === 'onlyVariable' && Both_2 === 'onlyRole')) {
                            if (only_Role_Valid() === true && only_Variable_Valid() === true) {
                                return true
                            } else {
                                return false
                            }
                        } else {
                            throw new Error(`${Package} : useBoth has undefined Mode Type :( `)
                        }
                    } else {
                        throw new Error(`${Package} : useBoth Undefined OR [Note] : We Created useAll hook for use All 3 Recomended items :( `)
                    }
                } else if (mode === 'onlyDebug') {
                    if (only_Debug_Valid() === true) {
                        return true
                    } else {
                        throw new Error(`${Package} : useDebug Undefined OR You Set To False :( `)
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
                return true
            } else {
                return false
            }
        } else {
            if (User_State.Auth !== true) {
                return true
            } else {
                return false
            }
        }
    }

    const Role_Verify = () => {
        if (useRole?.AntiRole !== true) {
            if (User_State.Role === useRole?.Expect_Role) {
                return true
            } else {
                return false
            }
        } else {
            if (User_State.Role !== useRole.Expect_Role) {
                return true
            } else {
                return false
            }
        }
    }

    const Variable_Verify = () => {
        if (useVariable?.AntiVariable !== true) {
            if (User_State.Variable === useVariable?.Expect_Variable) {
                return true
            } else {
                return false
            }
        } else {
            if (User_State.Variable !== useVariable?.Expect_Variable) {
                return false
            } else {
                return true
            }
        }
    }

    const Both_Verify = () => {
        if (useBoth?.includes('onlyAuth') && useBoth?.includes('onlyRole')) {
            if (Auth_Verify() && Role_Verify()) {
                return true
            } else {
                return false
            }
        } else if (useBoth?.includes('onlyAuth') && useBoth?.includes('onlyVariable')) {
            if (Auth_Verify() && Variable_Verify()) {
                return true
            } else {
                return false
            }
        } else if (useBoth?.includes('onlyRole') && useBoth?.includes('onlyVariable')) {
            if (Role_Verify() && Variable_Verify()) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    const All_Verify = () => {
        if (Auth_Verify() && Role_Verify() && Variable_Verify()) {
            return true
        } else {
            return false
        }
    }

    const Role_Redirect = () => {
        if (Redirect?.mode === 'RoleRedirect' && Role_Verify() === false) {
            return Redirect?.useRoleRedirect?.Roles.map((Role: String, Index: any ) => {
                if (User_State.Role === Role) {
                    if (Role === 'guest') {
                        return <Outlet key={Index} />
                    }
                    else {
                        return <Navigate to={`${Redirect?.useRoleRedirect?.Links[Index]}`} key={Index} />
                    }
                }
                return <div key={Index} style={{ display: "none" }} />
            })
        } else {
            return <Navigate to={`${Redirect?.Link}`} />
        }
    }

    const Route_Processor = () => {
        if (Validate_Props() === true) {
            if (mode === 'onlyAuth') {
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
            } else if (mode === 'onlyDebug') {
                if (Debug('testing') === true) {
                    return Debug()
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
                throw new Error(`${Package} Mode Type Invalid! : Please Define Valid Mode of ${Package}`)
            }
        } else {
            throw new Error(`Validating Error : ${Package}`)
        }
    }

    return Route_Processor()
}

export default RouteLocker;
export type { RouteLokerProps };