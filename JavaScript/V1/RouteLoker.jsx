import { useContext } from 'react'
import { Navigate, Outlet, Route } from 'react-router-dom'
// import { toast, ToastContainer } from 'react-toastify'
import { MySite } from './Router'

function RouteLocker({ type, useRole, Expect_Role, useAuth, useVariable, Variable, Expect_Variable, Redirect, useRoleRedirect , useVerison5 , path , element , caseSensitive ,  children , index , key  }) {
    
    const Context = useContext(MySite)

    function Props_Validator() {
        if (type === 'onlyAuth') {
            if (typeof useAuth === 'undefined') {
                throw new Error('Invalid Props in RouteLocker !')
            }
            else {
                return true
            }
        } else if (type === 'onlyRole') {
            if (typeof useRole === 'undefined' && typeof Expect_Role === 'undefined') {
                throw new Error('Invalid Props in RouteLocker !')
            }
            else {
                return true;
            }
        } else if (type === 'onlyVariable') {
            if (typeof useVariable === 'undefined' && typeof Variable === 'undefined' && typeof Expect_Variable === 'undefined') {
                throw new Error('Invalid Props in RouteLocker !')
            }
            else {
                return true
            }
        } else if (type === 'setAuth&Role') {
            if (typeof useAuth === 'undefined' && typeof useRole === 'undefined' && typeof Expect_Role === 'undefined') {
                throw new Error('Invalid Props in RouteLocker !')
            }
            else {
                return true
            }
        } else if (type === 'setAuth&Variable') {
            if (typeof useAuth === 'undefined' && typeof useVariable === 'undefined' && typeof Variable === 'undefined' && typeof Expect_Variable === 'undefined') {
                throw new Error('Invalid Props in RouteLocker !')
            }
            else {
                return true
            }
        } else if (type === 'setRole&Variable') {
            if (typeof useRole === 'undefined' && typeof Expect_Role === 'undefined' && typeof useVariable === 'undefined' && typeof Variable === 'undefined' && typeof Expect_Variable === 'undefined') {
                throw new Error('Invalid Props in RouteLocker !')
            }
            else {
                return true
            }
        } else if (type === 'ALL') {
            if (typeof useAuth === 'undefined' && typeof useRole === 'undefined' && typeof Expect_Role === 'undefined' && typeof useVariable === 'undefined' && typeof Variable === 'undefined' && typeof Expect_Variable === 'undefined') {
                throw new Error('Invalid Props in RouteLocker !')
            }
            else {
                return true
            }
        } else {
            throw new Error('Invalid Props in RouteLocker !')
        }
    }

    function Auth_Verifier() {
        if (typeof useAuth !== 'undefined') {
            if (useAuth.type === true) {
                if (Context.Auth === true) {
                    return true
                }
                else {
                    return false
                }
            } else {
                if (!Context.Auth === true) {
                    return true
                }
                else {
                    return false
                }
            }
        }
    }

    function Role_Verifier() {
        if (Context.Role === Expect_Role) {
            return true
        }
        else {
            return false
        }
    }

    function Variable_Verifier() {
        if (Variable === Expect_Variable) {
            return true
        }
        else {
            return false
        }
    }

    function Role_Redirect_Verifier() {
        if (useRoleRedirect === true) {
            if (Role_Verifier() === false) {
                if (Context.Role === 'admin') {
                    return <Navigate to={Context.Role_Redirects.admin} replace />
                } else if (Context.Role === 'dev') {
                    return <Navigate to={Context.Role_Redirects.dev} replace />
                } else if (Context.Role === 'vip') {
                    return <Navigate to={Context.Role_Redirects.vip} replace />
                } else if (Context.Role === 'user') {
                    return <Navigate to={Context.Role_Redirects.user} replace />
                } else {
                    return <Navigate to={Context.Role_Redirects.guest} replace />
                }
            }
        } else {
            return <Navigate to={Redirect} />
        }
    }

    const Route_Processor = () => {
        if (Props_Validator() === true) {
            if (type === 'onlyAuth') {
                if (useAuth.value === true) {
                    if (Auth_Verifier() === true) {
                        return useVerison5 ? <Route path={path} element={element} caseSensitive={caseSensitive} key={key} index={index} children={children} /> : <Outlet /> 
                    } else {
                        return Role_Redirect_Verifier()
                    }
                }
            } else if (type === 'onlyRole') {
                if (useRole === true) {
                    if (Role_Verifier() === true) {
                        return useVerison5 ? <Route path={path} element={element} caseSensitive={caseSensitive} key={key} index={index} children={children} /> : <Outlet /> 
                    } else {
                        return Role_Redirect_Verifier()
                    }
                }
            } else if (type === 'onlyVariable') {
                if (useVariable === true) {
                    if (Variable_Verifier() === true) {
                        return useVerison5 ? <Route path={path} element={element} caseSensitive={caseSensitive} key={key} index={index} children={children} /> : <Outlet /> 
                    } else {
                        return Role_Redirect_Verifier()
                    }
                }
            } else if (type === 'setAuth&Role') {
                if (useAuth.value === true && useRole === true) {
                    if (Auth_Verifier() === true && Role_Verifier() === true) {
                        return useVerison5 ? <Route path={path} element={element} caseSensitive={caseSensitive} key={key} index={index} children={children} /> : <Outlet /> 
                    } else {
                        return Role_Redirect_Verifier()
                    }
                }
            } else if (type === 'setAuth&Variable') {
                if (useAuth.value === true && useVariable === true) {
                    if (Auth_Verifier() === true && Variable_Verifier() === true) {
                        return useVerison5 ? <Route path={path} element={element} caseSensitive={caseSensitive} key={key} index={index} children={children} /> : <Outlet /> 
                    } else {
                        return Role_Redirect_Verifier()
                    }
                }
            } else if (type === 'setRole&Variable') {
                if (useRole === true && useVariable === true) {
                    if (Role_Verifier() === true && Variable_Verifier() === true) {
                        return useVerison5 ? <Route path={path} element={element} caseSensitive={caseSensitive} key={key} index={index} children={children} /> : <Outlet /> 
                    } else {
                        return Role_Redirect_Verifier()
                    }
                }
            } else if (type === 'All') {
                if (useAuth.value === true && useRole === true && useVariable === true) {
                    if (Auth_Verifier() === true && Role_Verifier() === true && Variable_Verifier() === true) {
                        return  useVerison5 ? <Route path={path} element={element} caseSensitive={caseSensitive} key={key} index={index} children={children} /> : <Outlet /> 
                    } else {
                        return Role_Redirect_Verifier()
                    }
                }
            } else {
                throw new Error('Invalid RouteLocker Type!')
            }
        }
        else {
            throw new Error('Sothing Went Wrong in Props_Validator() Validation in RouteLocker !')
        }
    }

    return (<>{Route_Processor()}</>)

}

export default RouteLocker;