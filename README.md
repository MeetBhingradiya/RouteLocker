# <img src="https://img.icons8.com/external-others-inmotus-design/40/null/external-Route-geo-others-inmotus-design.png"/> Route Locker

- Ultimate Route Authriozation System

<!-- + A Powerfull Client Side and Server Side Routing For React -->

### Install

```JS
npm install react-route-locker 
```

OR

```JS
yarn add react-route-locker 
```

### Versions for Open Source

<!-- JavaScript <img src="https://img.icons8.com/fluency/48/null/javascript.png"/> -->
<!-- TypeScript <img src="https://img.icons8.com/fluency/48/null/typescript--v2.png"/> -->
<!-- Source Code <img src="https://img.icons8.com/fluency/48/null/source-code.png"/> -->

<!-- Beta <img src="https://img.icons8.com/fluency/40/null/circular-arrows.png"/> -->
<!-- Avilable <img src="https://img.icons8.com/fluency/40/null/checkmark.png"/> -->
<!-- Not Avilable <img src="https://img.icons8.com/fluency/40/null/delete-sign.png"/> -->

+ Public
+ + This is avilable for all users of ```npm``` and ```yarn```.

| <img src="https://img.icons8.com/fluency/48/null/source-code.png"/> | V1 | V2 | V3 |
| - | -- | -- | -- |
| <img src="https://img.icons8.com/fluency/48/null/javascript.png"/> | <img src="https://img.icons8.com/fluency/40/null/delete-sign.png"/> | <img src="https://img.icons8.com/fluency/40/null/delete-sign.png"/> | <img src="https://img.icons8.com/fluency/40/null/delete-sign.png"/> |
| <img src="https://img.icons8.com/fluency/48/null/typescript--v1.png"/> | <img src="https://img.icons8.com/fluency/40/null/checkmark.png"/> | <img src="https://img.icons8.com/fluency/40/null/circular-arrows.png"/> | <img src="https://img.icons8.com/fluency/40/null/delete-sign.png"/> |

+ Private
+ + This is avilable only for ```Members of TeamSM```.
+ + Private Version Been Prmoted To Public Version After Testing.

| <img src="https://img.icons8.com/fluency/48/null/source-code.png"/> | V1 | V2 | V3 | V4 |
| - | -- | -- | -- | -- |
| <img src="https://img.icons8.com/fluency/48/null/javascript.png"/> | <img src="https://img.icons8.com/fluency/40/null/checkmark.png"/> | <img src="https://img.icons8.com/fluency/40/null/checkmark.png"/> | <img src="https://img.icons8.com/fluency/40/null/circular-arrows.png"/> | <img src="https://img.icons8.com/fluency/40/null/delete-sign.png"/> |
| <img src="https://img.icons8.com/fluency/48/null/typescript--v1.png"/> | <img src="https://img.icons8.com/fluency/40/null/checkmark.png"/> | <img src="https://img.icons8.com/fluency/40/null/checkmark.png"/> | <img src="https://img.icons8.com/fluency/40/null/circular-arrows.png"/> | <img src="https://img.icons8.com/fluency/40/null/delete-sign.png"/> |

### Futures : V2

- `react-router-dom` V6 Support.
- 5 Modes.
- 1 Redirect Mode.
- Role Based Public Routes and Role Redirect System.
- Unlimited Roles Support.
- 1 Custom Variable Support.
- 1 Authentication Variable Support.
- Browser's : Edge , Safari , Chrome , Operamini , FireFox , Internet Explorer , PolyPane , Postmen , other
- Modes : onlyAuth , onlyRole , onlyVariable , useBoth , useAll
- User_State : Auth , Role , Variable
- Multiple Role Support in Privet Routes.

### Future Updates : V3+

- 7 Modes. `in V3 Added`
- Auto Apply React Error Boundaries.`in V3 Added`
- Prevention From Unauthorised Browsers you need (Trusted and Recommendations Browsers : 8) `in V3 Added`
- Debug Mode For Developers... `in V4+ / Not Added`
- Unlimited Custom Variable Support. `in V4+ / Not Added`
- `react-router-dom` V5 Support. `Not Added`

### Disadvantages

- Complex Object : Fix -> You need to Use our [Snippets](#snippets) of Routers Like: Public/Private-Routers

### Documention

```JS
<Route element={<RouteLocker Properties={[PublicRouter]} />}>
  <Route path={`/auth/login`} element={<LOGIN />} />
  <Route path={`/auth/signup`} element={<SIGNUP />} />
</Route>
```

> ### About

- Made By Meet Bhingradiya
- License : `MIT`
- Version : `2.1`

### <img src="https://img.icons8.com/fluency/35/null/source-code.png"/> Snippets

#### <img src="https://img.icons8.com/fluency/25/null/globe.png"/> PublicRouter

```JS
const PublicRouter = {
  User_State: {
    Auth: Auth,
    Role: Role,
  },
  mode: "onlyAuth",
  Redirect: {
    mode: "RoleRedirect",
    useRoleRedirect: {
      Links: ["/admin/Dashboard", "/user/home", "/snippet/home", `/vip/home`],
      Roles: ["admin", "user", "dev", "vip"],
    },
  },
  useAuth: {
    enable: true,
    AntiAuth: true,
  },
};
```

#### <img src="https://img.icons8.com/ios-filled/25/null/keyhole-shield.png"/> PrivateRouter

```JS
const UserRouter = {
  User_State: {
    Auth: Auth,
    Role: Role,
  },
  mode: "useBoth",
  Redirect: {
    mode: "Normal",
    Link: `/auth/login`,
  },
  useBoth: ["onlyAuth", "onlyRole"],
  useAuth: {
    enable: true,
  },
  useRole: {
    enable: true,
    Expect_Role: "user",
  },
};
```
