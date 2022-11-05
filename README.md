# Route Locker

- Ultimate Route Locking System for `react-router-dom`
<!-- + A Powerfull Client Side and Server Side Routing For React -->

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

- Debug Mode For Developers... `in V4+ / Not Added`
- Auto Apply React Error Boundaries With Dedicated Fully Detailed Error Pages.`in V3 Added`
- `react-router-dom` V5 Support. `Not Added`
- Prevention From Unauthorised Browsers you need (Registerd and Recommendations Browsers : 8) `in V3 Added`
- Unlimited Custom Variable Support. `in V4+ / Not Added`
- 7 Modes. `in V3 Added`

### Disadvantages

- Complex Object : Fix -> You need to Use our [Snippets](#snippets) of Routers Like: Public/Private-Routers

### Documention

`npm install react-route-locker`

```js
<Route element={<RouteLocker Properties={[Routers.PublicRouter]} />}>
  <Route path={`/auth/login`} element={<LOGIN />} />
  <Route path={`/auth/signup`} element={<SIGNUP />} />
</Route>
```

### About

- Made By Meet Bhingradiya
- License : `MIT`
- Available on npm with `npm i react-route-locker`

### Snippets

#### 1) PublicRouter

```js
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

#### 1) PrivateRouter

```js
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
