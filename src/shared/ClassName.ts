export function className(...classNames: any[]): { className: string } {
    const classes = [];

    for (const cssName of classNames) {
        if (typeof cssName === "object") {
            for (const key in cssName) {
                if (cssName.hasOwnProperty(key) && cssName[key]) {
                    classes.push(key);
                }
            }
        } else {
            classes.push(cssName);
        }
    }

    return { className: classes.join(" ") };
}
