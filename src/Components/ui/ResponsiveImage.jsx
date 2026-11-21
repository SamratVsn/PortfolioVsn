// Responsive <img> bound to a generated manifest entry (src/content/images.js).
//
// Every image carries intrinsic width/height, so the browser reserves space
// before the bytes arrive (CLS) and can pick a variant from the srcset. `sizes`
// must describe the rendered width, otherwise the browser downloads a larger
// variant than it needs.
export default function ResponsiveImage({
  image,
  alt = "",
  sizes = "100vw",
  className,
  loading,
  decoding = "async",
  fetchPriority,
  ...rest
}) {
  if (!image) return null;

  const srcSet = image.variants
    .map((variant) => `${variant.src} ${variant.width}w`)
    .join(", ");

  return (
    <img
      src={image.src}
      srcSet={srcSet}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={alt}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      className={className}
      {...rest}
    />
  );
}
