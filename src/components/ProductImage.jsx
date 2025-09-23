export default function ProductImage({ src, alt, className = "", eager }) {
  return (
    <img
      src={`${src}?w=300`} // default small
      srcSet={`
        ${src}?w=300 300w,
        ${src}?w=600 600w,
        ${src}?w=1200 1200w
      `}
      sizes="(max-width: 640px) 300px, (max-width: 1024px) 600px, 1200px"
      alt={alt}
      className={`w-full h-full object-cover ${className}`}
      loading={eager ? "eager" : "lazy"}
      fetchpriority={eager ? "high" : "auto"}
    />
  );
}

// helper component that adds parameters to the image url so that it's different sizes
// small for mobile, medium, full width.
