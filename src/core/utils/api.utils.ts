export const stringifyQueryParams = (params: Record<string, any>) => {
  const query = Object.entries(params)
    .filter(([key, val]) => Boolean(key) && Boolean(val))
    .map(
      ([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
    )
    .join("&");

  return query ? `?${query}` : "";
};
