import React from "react";
import { useContext } from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { MySite } from './Router';

interface RouteLokerProps {
    mode: String,
    Redirect?: {
        useRoleRedirect: Boolean | false,
        RolesRedirect: Array<any> | ['Admin', 'User'],
        Link: String
    },
    Hooks: {
        useAuth?: {
            enable?: Boolean | false
            AntiAuth?: Boolean | false,
        },
        useRole?: {
            Roles: Array<any>,
            enable?: Boolean,
            Expect_Role?: String,
            AntiRole?: Boolean | false
        },
        useVariable?: {
            enable?: Boolean,
            User_Variable?: String,
            Expect_Variable?: String
            AntiVariable?: Boolean | false
        },
        useBoth?: Array<String>,
        useAll?: Boolean
    }
}

/**
 * ### RouteLocker
 * #### Futures:
 * + Most Powerfull Route Processor for React Router DOM V6
 * + 3 Variable Chaker.
 * + Unlimited Role Chaker For Bigger Sites.
 * + Authentication Chaker With Context Only.
 * + Anti Variable Chaker.
 * 
 * #### Future Updates
 * + Permission Chaker.
 * + React Router DOM V5 Support.
 * 
 * #### Install
 * ```
 *  <MyContext.Provider value={{ Auth, Role }}>
 *      <RouteLocker {...props} />
 *  </MyContext.Provider>
 * ```
 * 
 * ##### Properties:
 * ```
 *  {
 *      //  Mode : OnlyAuth is for Authentication Chaker
 *      //  Mode : OnlyRole is for Role Chaker
 *      //  Mode : OnlyVariable is for Variable Chaker
 *      //  Mode : useBoth for You can use any 2 type from upper types
 *      //  Mode : useAll for You can use all 3 types
 *      mode: "String", // "onlyAuth" | "onlyRole" | "onlyVariable" | "useBoth" | "useAll"
 *      Redirect?: {
 *         //  useRoleRedirect : If you want to redirect user to their home page if user have role
 *          useRoleRedirect: Boolean | false,
 *         //  RolesRedirect : Roles that you want to redirect user to their home page
 *         //  Note : RolesRedirect is Connected with useRole.Roles 
 *          RolesRedirect: Array<any> | ['Admin', 'User'],
 *          Link: String // "/login" , "/dashboard" , "/home" , "/profile" , "/admin" etc.
 *      }
 *      Hooks: {
 *          // useAuth : Authentication Chaker
 *          useAuth?: {
 *              // enable Authenticaion
 *              enable?: Boolean | false
 *              // AntiAuth : Revert Authenticaion Chaker
 *              AntiAuth?: Boolean | false,
 *          },
 *          // useRole : Role Chaker
 *          useRole?: {
 *              // Roles : Roles that you want to check
 *              Roles: Array<any>,
 *              // enable Role Chaker
 *              enable?: Boolean,
 *              // Expect_Role : If you want to check user have that role or not
 *              Expect_Role?: String,
 *              // AntiRole : Revert Role Chaker
 *              AntiRole?: Boolean | false
 *          },
 *          // useVariable : Variable Chaker
 *          useVariable?: {
 *              // enable Variable Chaker
 *              enable?: Boolean,
 *              // User_Variable : Variable that you want to check
 *              User_Variable?: String,
 *              // Expect_Variable : If you want to check user have that variable or not
 *              Expect_Variable?: String
 *              // AntiVariable : Revert Variable Chaker
 *              AntiVariable?: Boolean | false
 *          },
 *          // useBoth : You can use any 2 type from upper types
 *          useBoth?: Array<String>,
 *          // useAll : You can use all 3 types
 *          useAll?: Boolean
 *      }
 *  }
 * ```
 * 
 * #### Usage
 * ##### React Router DOM V6
 * ```
 * <Route element={<RouteLocker {...props}/>}>
 * {... Your Routes}
 * </Route>
 * ```
 * 
 * ##### React Router DOM V5 [Not Added]
 * ```
 * <RouteLocker useVerison5={true} {...props} />
 * ```
 * 
 * ```Author : Meet Bhingradiya```
 */
function RouteLockerV2({
    mode,
    Redirect,
    Hooks
}: RouteLokerProps) {
    const Context: any = useContext(MySite);

    const Validate_Props = () => {
        if (typeof mode !== 'undefined') {
            if (typeof Redirect !== 'undefined' && typeof Redirect?.Link !== 'undefined') {
                if (mode === 'onlyAuth' && Hooks?.useAuth?.enable === true) {
                    return true
                } else if (mode === 'onlyRole' && Hooks?.useRole?.enable === true && typeof Hooks.useRole.Expect_Role === 'string') {
                    return true
                } else if (mode === 'onlyVariable' && Hooks?.useVariable?.enable === true && typeof Hooks.useVariable.User_Variable === 'string' && typeof Hooks.useVariable.Expect_Variable === 'string') {
                    return true
                } else if (mode === 'useBoth' && Hooks?.useBoth?.length === 2) {
                    const use1: any = Hooks.useBoth[0];
                    const use2: any = Hooks.useBoth[1];
                    if ((use1 === 'onlyAuth' || use1 === 'onlyRole' || use1 === 'onlyVariable') && (use2 === 'onlyAuth' || use2 === 'onlyRole' || use2 === 'onlyVariable')) {
                        return true
                    } else {
                        return false
                    }
                } else if (mode === 'useAll' && Hooks?.useAuth === true && Hooks?.useRole?.enable === true && typeof Hooks.useRole.Expect_Role === 'string' && Hooks?.useVariable?.enable === true && typeof Hooks.useVariable.User_Variable === 'string' && typeof Hooks.useVariable.Expect_Variable === 'string') {
                    return true
                } else {
                    throw new Error('RouteLockerV2 Mode Type Invalid! : Plz Define Valid Mode of RouteLockerV2.')
                }
            } else {
                throw new Error('RouteLockerV2 Redirect Is Undefined! : Plz Define Redirect of RouteLockerV2.')
            }
        }
        else {
            throw new Error('RouteLockerV2 Mode Is Undefined! : Plz Define Mode of RouteLockerV2.')
        }
    }

    const Auth_Verify = () => {
        if (Hooks.useAuth?.AntiAuth !== true) {
            if (Context.Auth === true) {
                return true;
            } else {
                return false;
            }
        } else {
            if (Context.Auth !== true) {
                return true;
            } else {
                return false;
            }
        }
    }

    const Role_Verify = () => {
        if (Context.Role === Hooks?.useRole?.Expect_Role) {
            return true;
        } else {
            return false;
        }
    }

    const Variable_Verify = () => {
        if (Hooks?.useVariable?.User_Variable === Hooks?.useVariable?.Expect_Variable) {
            return true;
        } else {
            return false;
        }
    }

    const Both_Verify = () => {
        if (Hooks?.useBoth?.includes('onlyAuth') && Hooks?.useBoth?.includes('onlyRole')) {
            if (Auth_Verify() && Role_Verify()) {
                return true;
            } else {
                return false;
            }
        } else if (Hooks?.useBoth?.includes('onlyAuth') && Hooks?.useBoth?.includes('onlyVariable')) {
            if (Auth_Verify() && Variable_Verify()) {
                return true;
            } else {
                return false;
            }
        } else if (Hooks?.useBoth?.includes('onlyRole') && Hooks?.useBoth?.includes('onlyVariable')) {
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
        if (Redirect?.useRoleRedirect === true && Role_Verify() === false) {
            const Data = Hooks?.useRole?.Roles?.map((Role, Index) => {
                if (Context.Role === Role) {
                    if (Role === 'guest') {
                        return <Outlet />
                    }
                    else {
                        return Redirect.RolesRedirect[Index]
                    }
                }
                return null
            })
            return Data
        } else {
            return <Navigate to={`${Redirect?.Link}`} />
        }
    }

    const Route_ProcessorV6 = () => {
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

    return Route_ProcessorV6()
}

export { RouteLockerV2 };