const normalizedBasePath = (() => {
  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(
    /\/+$/,
    ''
  );
  return basePath === '/' ? '' : basePath;
})();

export const basePath = (path: string) => {
  if (!path) return path;

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  if (!normalizedBasePath) return normalizedPath;
  if (normalizedPath.startsWith(`${normalizedBasePath}/`)) {
    return normalizedPath;
  }

  return `${normalizedBasePath}${normalizedPath}`;
};
