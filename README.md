# <img src="https://img.icons8.com/external-others-inmotus-design/40/null/external-Route-geo-others-inmotus-design.png"/> Route Locker

-   Ultimate React Route Authriozation System

### Installation

Yarn Package Manager (Recommended)

```Bash
yarn add react-route-locker
```

NPM Package Manager

```Bash
npm intall react-route-locker
```

### Features

-   7 Modes.
-   5 Core Modes and 2 Universal Modes.
-   Role Based Public Routes and Role Redirect System.
-   Unlimited Roles Support.
-   Block Unauthorised Browsers. (Trusted and Recommendations Browsers : 8)
-   `react-router-dom` V6 Support.

### Coming Soon !

-   Unlimited Custom Variable Support.
-   Cutom Component Support in `react-router-dom` V6.
-   Debug Mode For Developers...
-   Auto Apply React Error Boundaries.
-   `react-router-dom` V5 Support.
-   init() Function to less object code.

### Usage

#### V6 React Router Dom

```JS
import { RouteLocker } from "react-route-locker";

<Route element={<RouteLocker Properties={[PublicRouter]} />}>
  <Route path={`path`} element={<Component />} />
</Route>
```

##### OR [Coming Soon !]

```JS
import { RouteLocker } from "react-route-locker";

<RouteLocker Properties={[PublicRouter]} path={`path`} element={<Component />} />
```

V5 React Router Dom [Coming Soon !]

```JS
import { RouteLocker } from "react-route-locker";

<RouteLocker Properties={[PublicRouter]} component={<Login />} path="*" />
```

### Versions

-   **Public Latest Version** : `1.0.0`

-   **Private Latest Version** : `1.0.0`
    > Note : Private Versions are been promoted to Public Versions after testing and fixing bugs.
-   **Dev Latest Version** : `1.0.0`
    > Note : Dev Versions is only for live testing version it may be contain bugs and errors.
    <p align="center">

| <img src="https://img.icons8.com/fluency/48/null/source-code.png"/> | Public                                                              | Private                                                             | Dev                                                               |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------- |
| V1                                                                  | <img src="https://img.icons8.com/fluency/40/null/checkmark.png"/>   | <img src="https://img.icons8.com/fluency/40/null/checkmark.png"/>   | <img src="https://img.icons8.com/fluency/40/null/checkmark.png"/> |
| V2                                                                  | <img src="https://img.icons8.com/fluency/40/null/delete-sign.png"/> | <img src="https://img.icons8.com/fluency/40/null/delete-sign.png"/> | <img src="https://img.icons8.com/fluency/40/null/checkmark.png"/> |

</p>

<!-- JavaScript <img src="https://img.icons8.com/fluency/48/null/javascript.png"/> -->
<!-- TypeScript <img src="https://img.icons8.com/fluency/48/null/typescript--v2.png"/> -->
<!-- Source Code <img src="https://img.icons8.com/fluency/48/null/source-code.png"/> -->

<!-- Beta <img src="https://img.icons8.com/fluency/40/null/circular-arrows.png"/> -->
<!-- Avilable <img src="https://img.icons8.com/fluency/40/null/checkmark.png"/> -->
<!-- Not Avilable <img src="https://img.icons8.com/fluency/40/null/delete-sign.png"/> -->

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

> ### About

-   Made By Meet Bhingradiya
-   License : `MIT`
-   Version : `2.1`
