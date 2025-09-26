// usage examples
// gar(["dashboard", "users"]) --> "/dashboard/users"
// gar(["dashboard", "users", ":userId"]) --> "/dashboard/users/:userId"
// gar(["dashboard", "users", ":userId"], { replace: { ":userId": "1" } }) --> "/dashboard/users/1"
// gar(["dashboard", "users", ":userId"], { replace: { ":userId2": "1" } }) --> throws error because ":userId2" doesnt exist in array
// gar(["dashboard", "users", ":userId"], { replace: { "users": "1" } }) --> throws error because you cant replace non dynamic route parts

// grr(["dashboard", "users"]) --> "dashboard/users"
// grr(["dashboard", "users", ":userId"]) --> "dashboard/users/:userId"
// grr(["dashboard", "users", ":userId"], { replace: { ":userId": "1" } }) --> "dashboard/users/1"
// grr(["dashboard", "users", ":userId"], { replace: { ":userId2": "1" } }) --> throws error because ":userId2" doesnt exist in array
// grr(["dashboard", "users", ":userId"], { replace: { "users": "1" } }) --> throws error because you cant replace non dynamic route parts
// grr(["dashboard", "users", "settings"], { start: 1 }) --> "users/settings"
// grr(["dashboard", "users", "settings"], { start: 0, end: 2}) --> "dashboard/users"

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
