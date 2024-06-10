export const newsLink = (path: string) => `/news/${path}/`;
export const projectLink = (path: string) => `/projects/${path}/`;
export const leaderLink = (path: string) => `/team/${path}/`;
export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date
        .toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        })
        .toUpperCase();
};
export function truncateExcerpt(str: string) {
    const lastIndex = str.lastIndexOf(" ");
    let returnString;
    if (lastIndex === -1) {
        returnString = str;
    } else {
        returnString = str.substring(0, lastIndex);
    }
    return returnString + "... ";
}
