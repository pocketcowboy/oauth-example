import qs from "query-string";

export const extractQueryParams = (location) => qs.parse(location.search);
