# RouteLocker

## Futures:
+ Most Powerfull Route Processor for React Router DOM V6
+ 3 Variable Chaker.
+ Unlimited Role Chaker For Bigger Sites.
+ Authentication Chaker With Context Only.
+ Anti Variable Chaker. ```Beta```

## Future Updates
+ Permission Chaker. ```Beta```
+ Multi-Version Support. [React Router DOM V5] ```Soon!```

## Languages
| Languages | V1 | V2 |
| :---: | :---: | :---: |
| JavaScript | true | true|
| TypeScript | true | true |

 ## Install
 ```
<MyContext.Provider value={{ Auth, Role }}>
    <RouteLocker {...props} />
</MyContext.Provider>
```
## Usage
### React Router DOM V6
```
<Route element={<RouteLocker {...props}/>}>
{... Your Routes}
</Route>
```

### React Router DOM V5 [Not Added]
```
<RouteLocker useVerison5={true} {...props} />
```

### Properties:
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
>## <img src="https://img.icons8.com/fluency/18/000000/rotate-right.png"/> Change Logs
>
> #### V1
> + JavaScript Only V1
>
> #### V2
> + TypeScript With V1 and V2 Added

### License
```CopyRight teamsm(c)2022``` ```license : Apache-2.0``` ```Author : Meet Bhingradiya```