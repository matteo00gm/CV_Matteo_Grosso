/** @type {import('next').NextConfig} */

const isGithubPages = process.env.NODE_ENV === 'production' && process.env.DEPLOY_TARGET === 'github_pages';

const nextConfig = {
  output: isGithubPages ? 'export' : undefined,
  distDir: isGithubPages ? 'dist' : '.next', // Optional: specify a different output directory
  basePath: isGithubPages ? '/CV_Matteo_Grosso' : undefined, // Replace '/CV_Matteo_Grosso' with your repository name
  assetPrefix: isGithubPages ? '/CV_Matteo_Grosso/' : undefined, // Replace '/CV_Matteo_Grosso/' with your repository name and a trailing slash
};

module.exports = nextConfig;