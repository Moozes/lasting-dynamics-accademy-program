**Note: The architecture described in this file is applied 100% in wergonic-admin, on the other hand, client-panel is partially (~80%) adapted to this architecture as it is being refactored step by step.**

---

# General Rules and Concepts

- Always use styled components
- Always use `r.gar` and `r.grr` for routes
- Always import from index files
- Folder name should be same as component name
- Dont use `*.d.ts` file extensions unless needed
- Define schemas with initial values, no need to separate them
- Component files should not pass a certain threshold (200 lines for example)
- Pages and features are entry points for the app and help new developers understand the codebase quickly.
- You can nest sub components as much as needed, (_we used to follow a flat folder structure, but our folders got bloated really quickly_).
- Define the API endpoint URL generation logic separately in a unified place, like `src/api/apiRoutes`, and check below for naming conventions.
- Features only import shared stuff, never import from another feature, if any piece of code is needed in 2 features or more, it should be lifted to shared folders `src/components`, `src/hooks`...etc.
- Always use `index.ts` barrel file to expose public API (and it makes refactoring and changing folder structure easy, check [this section](#index-barrel-files) down below).
- complexe state should not pollute the component code, it should be extracted to a custom hook, The same can be said for helper functions they should be defined in `ComponentName.helper.ts` file
- Always use named exports except for pages or code that needs lazy loading, to prevent renaming functions or components when using them, because default exports can be easily renamed by mistake, unlike named exports which need explicit syntax for renaming.
- Whenever a piece of code is needed in two places, it should be lifted up to the nearest shared folder
    - For example, if a type is needed in 2 components it should be lifted to the nearest parent `types/` folder.
    - The reason for this is to avoid tight coupling of unrelated code.
- Always use import aliases, and always import from index files
    - import something from `@feature/auth`.
    - import something from `@components`.
    - ...etc

---

# Folder structure ([feature driven/screaming architecture](https://profy.dev/article/react-folder-structure))

## Structure

Here is a depiction of the actual folder structure
_Note: do not focus on the naming of folders because it is a matter of personal preference._

```
src/
    assets/
        icons/
        illustrations/
        locals/
        index.ts
    atoms or contexts (global state)
        theme.ts
        auth.ts
        index.ts
    components/
        Header/
            Header.styles.ts (for component styles)
            Header.hooks.ts (for hooks needed only by this component)
            Header.helpers.ts (for utilities needed only by this component)
            Header.tsx
            index.ts
            Banner.styles.ts
            Banner.tsx (a sub component used only by Header)
            SearchField/ (You can define sub components in folders if there are multiple)
                SearchField.styles.ts
                SearchField.tsx
                index.ts
        Footer/
        ...
        index.ts

    hooks/
        auth.ts
        mediaQueries.ts
        index.ts
    api (All our backend interaction/end-points should be defined here)
        user.ts
        product.ts
        index.ts
    types/
        product.ts
        user.ts
        index.ts
    utils/ (Utilities are either functions or global constants)
        functions.ts
        constants.ts
        index.ts
    providers/
        Global.tsx
        ErrorBoundry.tsx
        index.ts
    features/
        auth/ (Each feature is gonna repeat the structure, but should not contain pages/api folders)
            atoms or contexts
            components/
            hooks/
            types/
            utils/
            index
        product/
        ...
    pages/
        Login.tsx
        Singnup.tsx
        Home.tsx
        UserDashboard.tsx

    routes/ (Here we define the routing structure)
        AuthSubRoutes.tsx
        DashboardSubRoutes.tsx
        routes.ts --> This has the route object and route generation functions
        index.tsx --> AppRoutes component
```

## Import order

Here we are going to talk about some **import** conventions.

```
 components-
 atoms     -
 utils     - ------>  features ---> pages
 hooks     -
 ...etc    -
```

There are 3 types of folders, **shared** folders, **feature** folders and **pages** folder

- Page files can import anything.
- Features can import from global folders (`src/components`, `src/hooks`, ...etc), but cannot import from pages.
- Features can not import from each other.
- Shared folders cannot import from features or pages.

The reason for this convention is to have a clear idea of the **relationship** between the different parts of our codebase,

- Changes made to **shared** code is probably gonna affect multiple `features/pages`
- Changes made to **a feature** is probably gonna affect multiple **pages**
- Changes made to **a feature** should not affect any other feature (ie: features are **decoupled/isolated** from each other)
- Changes made to a **a page** should be local and not affect any other code

## Index barrel files

As you may have noticed from the folder structure above there are a lot of files called `index.ts`, this is the section that is going to explain their purpose.

Always use index.ts barrel file to expose public API. Most people think that index files are only good for exposing a public API of the folder and reorganizing exports, but they miss out on a very important benefit which is **decoupling/isolation**, and **refactoring**.

The rule goes like this:

> Whenever we want to import something from a folder it should be imported from the index file of that folder, we should not import something that is not exported from there, that is why it is described as the public API of the folder because it tells you what can be used outside of that folder, and anything that should not be used outside of that folder should not be exported from the index file. This convention creates complete **isolation** of the structure of that folder from the outside world.

**Meaning of decoupling/isolation and refactoring**
there is no better way to explain this than a practical example, let's say we have a utils folder and multiple features `features/auth` and `features/blog`...etc that use our utilities

```
src/
    features/
        auth/
        blog/
        ...etc
    utils/
        parse-email.ts (function)
        parse-markdown.ts (function)
        parse-table.ts (only used within parse-markdown.ts)
        random.ts (function)
        PDF-PRINT-MARGIN.ts (constants for pdf rendering)
        APP-BAR-DIMENSIONS.ts (constants  for top navigation dimensions)
        ...etc
        index.ts

```

Let's say with time our codebase starts to get bigger and the utils folder starts getting bloated with files at one point we want to refactor and reorganize the utils folder to something like this

```
utils/
    functions/
        parse-email.ts
        parse-markdown.ts
        parse-table.ts
        random.ts
        ...etc
    constants/
        PDF-PRINT-MARGIN.ts
        APP-BAR-DIMENSIONS.ts
        ...etc
    index.ts
```

This would be a nightmare of a task without the index file, because our utilities are used all around the codebase, and we have to change our imports wherever utilities are used. But if we use the index file we only need to change the index file and that is it. This task would be like 4 line changes because all of the other code imports our utilities like this `import { ParseEmail } from @/utils;`

```js
// utils/index.ts
- export { ParseEmail } from "./parse-email";
- export { ParseMarkdown } from "./parse-markdown";
- export { generateRandomWord } from "./random";
- export { PDF-PRINT-MARGIN, SECTION-SPACING } from "./PDF-PRINT-MARGIN";
- export { APP-BAR-HEIGHT, APP-BAR-MOBILE-HEIGHT } from "./APP-BAR-DIMENSIONS";
...etc

+ export { ParseEmail } from "./functions/parse-email";
+ export { ParseMarkdown } from "./functions/parse-markdown";
+ export { generateRandomWord } from "./functions/random";
+ export { PDF-PRINT-MARGIN, SECTION-SPACING } from "./constants/PDF-PRINT-MARGIN";
+ export { APP-BAR-HEIGHT, APP-BAR-MOBILE-HEIGHT } from "./constants/APP-BAR-DIMENSIONS";
...etc
```

Think of this at scale, each folder (`hooks`, `contexts`, `api`, `features/auth`...etc) is its own world, any changes made to a folder should not affect another part of the application as long as the public API exposed by `index.ts` stays the same.

Another added benefit of this approach is that the code becomes easy to understand and follow, especially for new developers. You may have noticed the file above `parse-table.ts` which is only used within `parse-markdown.ts` is not mentioned in the re-exports in `index.ts` that is because it is an internal utility used only by other utilities.

## Naming conventions

- Components should be named like this `ComponentName.tsx` any other related code should be named like this `ComponentName.helpers.ts` or `ComponentName.hooks.ts`.
- Components styles should be named `ComponentName.styles.ts` since we are using emotion-styled components.
- Sometimes we have to use inline styles, and for that, it should be named `inlineStyles.ts` to avoid clashes with `ComponentName.styles.ts`
- Types naming
    - Always start with T for types, TUser, TSession, TInputProps, TTask, ...etc
    - Always start with I for interfaces, IUser, ISession, IInputProps, ...etc
- Api naming
    - For this, I like the naming pattern used by Django
    - create, update, list (for collections), and retrieve (for single item)
```js
export const listUsers = (params?: {
 search?: string;
    ordering?: string;
    page?: string;
    page_size?: string;
    organization_names?: string;
    role_in?: string;
}) => axios.get<IPaginatedServerResponse<TOrganizationUser>>(apiRoutes.users.users(params));
```
- Api routes naming
    - Routes should named following their structure in the backend
    - Name resources and not actions unless you have to, for example `/users/current-user` should be named currentUser not getCurrentUser because that same route could be used in a post or patch request
```js
    users: {
        currentUser: "/users/current",
        passwordReset: "/users/password/reset/",
        users: (params?: {
            search?: string;
            ordering?: string;
            page?: string;
            page_size?: string;
            organization_names?: string;
            role_in?: string;
        }) => {
            const queryParams = [
                params?.search !== undefined ? `search=${params.search}` : "",
                params?.ordering !== undefined ? `ordering=${params.ordering}` : "",
                params?.page !== undefined ? `page=${params.page}` : "",
                params?.page_size !== undefined ? `page_size=${params.page_size}` : "",
                params?.organization_names !== undefined ? `organization_names=${params.organization_names}` : "",
                params?.role_in !== undefined ? `role_in=${params.role_in}` : "",
            ]
                .filter(Boolean)
                .join("&");
            return `/users/user-organizations/?${queryParams}`;
        },
    },
    organizations: {},
    ...
```

## Routing configuration

In this section, we are going to talk about the routes object used to define our application routes. As you can see in `apps/wergonic-admin/src/routes/routes.ts` we have a routes object and 2 associated utility functions `gar`, and `grr`. The routes object is defined using arrays for simple manipulation and the utility functions provide a way to generate routes from the routes object (`gar`: generate absolute route, `grr`: generate relative route), the reason for this structure and functions is to have a single source of truth of our routing config, so whenever we want to do anything related to routes (define a route using `react-router`, or navigating to a certain route using the `Link` component, or redirection using `useNavigate` hook)it needs to be done using `gar`, or `grr` exclusively, never write a path as a raw string.

The benefit of this approach is to have a clear and centralized way to manage routes, and to always use the routes object as the single source of truth for our routes, and it is also easier to refactor routes, just by following the use of those utility functions. as apposed to `client-panel` app where we have a routes object but it is not used 100% and you will find a lot of paths defined using raw strings.

Note: this approach is only applied in `apps/wergonic-admin` for now because it is very difficult to refactor all the routes of `apps/client-panel` to follow a similar approach
```js
const routes = {
    root: [""],
    error: ["error"],

    auth: {
        login: ["login"],
 },

    organizations: {
        index: ["organizations"],
 },

    users: {
        index: ["users"],
 },

    devices: {
        index: ["devices"],
 },

    firmwares: {
        index: ["firmwares"],
 },
};

// generate absolute route
function gar(route: string[], options?: { replace: Record<string, string> }) {
    let routeCopy = [...route];
    if (options) {
        Object.keys(options.replace).forEach((key) => {
            if (!key.includes(":")) {
                throw new Error(
                    `You can only replace dynamic parts, starting with ":", but you are trying to replace "${key}"`
 );
 }
            if (!routeCopy.includes(key)) {
                throw new Error(
                    `The dynamic route part that you are trying to replace doesn't exist in array, you are trying to replace "${key}"`
 );
 }
            routeCopy = routeCopy.map((str) => {
                if (str === key) return options.replace[key];
                return str;
 });
 });
 }
    const absoluteRoute = `/${routeCopy.join("/")}`;
    return absoluteRoute;
}
// generate relative route
function grr(
    route: string[],
    options?: {
        replace?: Record<string, string>;
        start?: number;
        end?: number;
 }
) {
    let routeCopy = [...route];
    if (options) {
        routeCopy = routeCopy.slice(options.start, options.end);
        if (options.replace) {
            Object.keys(options.replace).forEach((key) => {
                if (!key.includes(":")) {
                    throw new Error(
                        `You can only replace dynamic route parts, starting with ":", but you are trying to replace "${key}"`
 );
 }
                if (!routeCopy.includes(key)) {
                    throw new Error(
                        `The dynamic route part that you are trying to replace doesn't exist in sliced array, you are trying to replace "${key}"`
 );
 }
                routeCopy = routeCopy.map((str) => {
                    if (str === key) return options.replace![key];
                    return str;
 });
 });
 }
 }
    const relativeRoute = routeCopy.join("/");
    return relativeRoute;
}

export const r = {
    routes,
    gar,
    grr,
};

// usage examples
gar(["dashboard", "users"]) --> "/dashboard/users"
gar(["dashboard", "users", ":userId"]) --> "/dashboard/users/:userId"
gar(["dashboard", "users", ":userId"], { replace: { ":userId": "1" } }) --> "/dashboard/users/1"
gar(["dashboard", "users", ":userId"], { replace: { ":userId2": "1" } }) --> throws error because ":userId2" doesnt exist in array
gar(["dashboard", "users", ":userId"], { replace: { "users": "1" } }) --> throws error because you cant replace non dynamic route parts

grr(["dashboard", "users"]) --> "dashboard/users"
grr(["dashboard", "users", ":userId"]) --> "dashboard/users/:userId"
grr(["dashboard", "users", ":userId"], { replace: { ":userId": "1" } }) --> "dashboard/users/1"
grr(["dashboard", "users", ":userId"], { replace: { ":userId2": "1" } }) --> throws error because ":userId2" doesnt exist in array
grr(["dashboard", "users", ":userId"], { replace: { "users": "1" } }) --> throws error because you cant replace non dynamic route parts
grr(["dashboard", "users", "settings"], { start: 1 }) --> "users/settings"
grr(["dashboard", "users", "settings"], { start: 0, end: 2}) --> "dashboard/users"
```