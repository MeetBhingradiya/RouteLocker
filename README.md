# <img src="https://img.icons8.com/external-others-inmotus-design/30/000000/external-Route-geo-others-inmotus-design.png"/> RouteLocker

## Futures: Release V2
+ Most Powerfull Route Processor for React Router DOM V6
+ 3 Variable Validator.
+ 1 Auth Variable , Unlimited Role Variable  , 1 Custom Variable Support.
+ Unlimited Role Validator For Bigger Sites.
+ Authentication Validator With Context Only.
+ Anti Variable Validator.

## Future Updates : Release V3
+ Permission Validator. ```Beta```
+ Multi-Version Support. [React Router DOM V5] ```Soon!```
+ Public And Privet Route Snippets ```Soon!```

## Languages
| Languages | V1 | V2 | V3 |
| :---: | :---: | :---: | :---: |
| <img src="https://img.icons8.com/fluency/35/000000/javascript.png"/> | <img src="https://img.icons8.com/fluency/20/000000/checkmark.png"/> | <img src="https://img.icons8.com/fluency/20/000000/checkmark.png"/>  | <img src="https://img.icons8.com/fluency/20/000000/delete-sign.png"/>  |
| <img src="https://img.icons8.com/fluency/35/000000/typescript.png"/> | <img src="https://img.icons8.com/fluency/20/000000/checkmark.png"/>  | <img src="https://img.icons8.com/fluency/20/000000/checkmark.png"/> | <img src="https://img.icons8.com/fluency/20/000000/delete-sign.png"/>  |

 ## <img src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/25/000000/external-install-basic-ui-elements-2.3-sbts2018-outline-color-sbts2018.png"/> Install
+ Step 1 : Make Context With Create Context and **Export It Not Default**.
```
export const MySite = createContext(null);
```
+ Step 2 : Make RouteLocker To Look Like This...
```
<Your Context.Provider value={{ Auth, Role }}>
    <RouteLocker {...props} />
</Your Context.Provider>
```
+ Step 2 : Got to RouteLoker File and Edit Context Name and Import your Context.
```
import { <Your Context> } from './Your Context File';
const Context: any = useContext(Your Context);
```
+ Step 3 : Pass Props to RouteLocker. [Properties](#-properties)
+ Step 4 : Enjoy RouteLocker!
## <img src="https://img.icons8.com/external-anggara-flat-anggara-putra/25/000000/external-pie-chart-user-interface-anggara-flat-anggara-putra.png"/> Usage
### <img src="https://img.icons8.com/ultraviolet/25/000000/react--v1.png"/> React Router DOM V6
```
<Route element={<RouteLocker {...props}/>}>
{... Your Routes}
</Route>
```

### <img src="https://img.icons8.com/ultraviolet/25/000000/react--v1.png"/> React Router DOM V5 [Not Added]
```
<RouteLocker useVerison5={true} {...props} />
```

## <img src="https://img.icons8.com/fluency/25/000000/property-script.png"/> Properties:
```
{
    //  Mode : OnlyAuth is for Authentication Chaker
    //  Mode : OnlyRole is for Role Chaker
    //  Mode : OnlyVariable is for Variable Chaker
    //  Mode : useBoth for You can use any 2 type from upper types
    //  Mode : useAll for You can use all 3 types
    mode: "String", // "onlyAuth" | "onlyRole" | "onlyVariable" | "useBoth" | "useAll"
    Redirect?: {
       //  useRoleRedirect : If you want to redirect user to their home page if user have role
        useRoleRedirect: Boolean | false,
       //  RolesRedirect : Roles that you want to redirect user to their home page
       //  Note : RolesRedirect is Connected with useRole.Roles 
        RolesRedirect: Array<any> | ['Admin', 'User'],
        Link: String // "/login" , "/dashboard" , "/home" , "/profile" , "/admin" etc.
    }
    Hooks: {
        // useAuth : Authentication Chaker
        useAuth?: {
            // enable Authenticaion
            enable?: Boolean | false
            // AntiAuth : Revert Authenticaion Chaker
            AntiAuth?: Boolean | false,
        },
        // useRole : Role Chaker
        useRole?: {
            // Roles : Roles that you want to check
            Roles: Array<any>,
            // enable Role Chaker
            enable?: Boolean,
            // Expect_Role : If you want to check user have that role or not
            Expect_Role?: String,
            // AntiRole : Revert Role Chaker
            AntiRole?: Boolean | false
        },
        // useVariable : Variable Chaker
        useVariable?: {
            // enable Variable Chaker
            enable?: Boolean,
            // User_Variable : Variable that you want to check
            User_Variable?: String,
            // Expect_Variable : If you want to check user have that variable or not
            Expect_Variable?: String
            // AntiVariable : Revert Variable Chaker
            AntiVariable?: Boolean | false
        },
        // useBoth : You can use any 2 type from upper types
        useBoth?: Array<String>,
        // useAll : You can use all 3 types
        useAll?: Boolean
    }
}
```
>## <img src="https://img.icons8.com/fluency/25/000000/rotate-right.png"/> Change Logs
>
> ### Release V2 
> + TypeScript With V1 and Release V2 Added
> + Added New Proparites Object
> + Unlimited Role Validator and Redirects.
> + Anti Variable Validator.
> + 1 Auth Variable , Unlimited Role Variable  , 1 Custom Variable Support.
>
> ### V1
> + JavaSript Only V1.
> + 3 Variable Validator.
> + 4 Role Redirects
> + 1 Auth Variable , 4 Role Variable , 1 Custom Variable Support.
