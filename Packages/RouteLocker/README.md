# <img src="https://img.icons8.com/external-others-inmotus-design/40/000000/external-Route-geo-others-inmotus-design.png" style="position: relative; top: 10px"/> RouteLocker

## Futures: Release V2.1
+ Most Powerfull Route Processor for React Router DOM V6
+ 1 Auth Variable , Unlimited Role Variable  , 1 Custom Variable Support.
+ 3 Variable Validator in One Time.
+ Unlimited Role Validator For Bigger Sites.
+ Anti Variable Validator.

## Add With Manual
| Languages | V1 | V2 | V2.1 | V3 |
| ----- | ----- | ----- | ----- | ----- |
| <img src="https://img.icons8.com/fluency/35/000000/javascript.png"/> | <img src="https://img.icons8.com/fluency/20/000000/checkmark.png"/> | <img src="https://img.icons8.com/fluency/20/000000/checkmark.png"/> | <img src="https://img.icons8.com/fluency/20/000000/delete-sign.png"/>  | <img src="https://img.icons8.com/fluency/20/000000/delete-sign.png"/> |
| <img src="https://img.icons8.com/fluency/35/000000/typescript.png"/> | <img src="https://img.icons8.com/fluency/20/000000/checkmark.png"/>  | <img src="https://img.icons8.com/fluency/20/000000/checkmark.png"/> | <img src="https://img.icons8.com/fluency/20/000000/checkmark.png"/>  | <img src="https://img.icons8.com/fluency/20/000000/delete-sign.png"/> |

 ## <img src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/25/000000/external-install-basic-ui-elements-2.3-sbts2018-outline-color-sbts2018.png"/> Install
+ Step 1 :  ```npm i route-locker```
+ Step 2 : Make RouteLocker To Look Like This...
```
<Route element={<RouteLocker {...props}/>}>
    {... Your Routes}
</Route>
```
+ Step 3 : Pass Props to RouteLocker. [Properties](#-properties)
+ Step 4 : Enjoy RouteLocker!
## <img src="https://img.icons8.com/external-anggara-flat-anggara-putra/25/000000/external-pie-chart-user-interface-anggara-flat-anggara-putra.png"/> Usage
### <img src="https://img.icons8.com/ultraviolet/25/000000/react--v1.png"/> React Router DOM V6
```
import { RouteLocker } from 'route-locker'
<Route element={<RouteLocker {...props}/>}>
{... Your Routes}
</Route>
```

### <img src="https://img.icons8.com/ultraviolet/25/000000/react--v1.png"/> React Router DOM V5 [Coming Soon!]
```
<RouteLocker useVerison5={true} {...props} />
```

## <img src="https://img.icons8.com/fluency/25/000000/property-script.png"/> Properties:
```
{
    mode: String,
    // Selected Mode User Data Pass Heare
    User_State: {
        Auth?: Boolean | false,
        Role?: String | 'user',
        Variable?: any | undefined,
    },
    // You Need To Pass Links To Redirect User To This Link
    Redirect: {
        RoleRedirect?: {
            enable: Boolean | false,
            Links: Array<String> | ['/admin/home', '/user/home'],
            Roles: Array<String> | ['admin', 'user'],
        },
        Link: String,
    },
    // Selected mode Needs Some Data So You Can Pass With this Hooks.
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
```

>## <img src="https://img.icons8.com/fluency/25/000000/rotate-right.png"/> Change Logs
> ### Release V3
> + Release on axproximate 10th November 2022
> + Snippets and FAQS.
> + V5 React-Router-DOM Support. [Limited Futures of Route-Locker V2.1]
>
> ### Release V2.1
> + Props Validator Object BugFixed.
> + ```useBoth``` BugFixed.
> + New Props Added ```User_State```.
> + Route_ProcessorV2.1 Updated.
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

> # FAQ
> ## 1. How Many Modes Avilable in Route-Locker ?
> + ```onlyAuth```
> + ```onlyRole```
> + ```onlyVariable```
> + ```useBoth```
> + ```useAll```
> 
> ### Need More ?
> + Coming Soon !
<!-- > ## 1. What is RoleRedirect ? 
> + This is User Redirect To that role Home Page.
> + if User Has Some Role this Field **Navigate to That Link that you passed** in ```Links``` field.
> ## 2. How To Use RoleRedirect ? 
> You Get In Our Sniippets. ```Soon!```
> ## 3. How To Use RouteLocker as Privet-Route ? 
> ## 4. How To Use RouteLocker as Public-Route ?
> ## 5. How To Use Role-Router as Privet-Route ?
> ## 6. How To Use Role-Router as Public-Route ? -->