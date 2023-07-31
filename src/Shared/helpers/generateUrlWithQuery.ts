function generateUrlWithQuery(
  baseUrl: string,
  params: Record<string, string | number | undefined>
): string {
  const urlParts = Object.entries(params)
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => `${key}=${value}`);

  return `${baseUrl}/?${urlParts.join("&")}`;
}

export default generateUrlWithQuery;
