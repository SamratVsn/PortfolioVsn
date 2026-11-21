// Generated responsive-image data. Do not edit by hand: run `npm run images`
// (scripts/optimize-images.mjs) after changing anything in src/assets.
//
// Each entry holds the largest WebP variant, its intrinsic dimensions, and the
// full srcset list. Components render these through <ResponsiveImage>.
import manifest from "./image-manifest.json";

export const images = manifest;

export function image(key) {
  return manifest[key] || null;
}

export default image;
