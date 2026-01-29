interface ImageProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  priority?: boolean;
}

export default function Image({
  src,
  alt,
  caption,
  width,
  priority = false,
}: ImageProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imageSrc = src.startsWith("/") ? `${basePath}${src}` : src;

  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-lg">
        <img
          src={imageSrc}
          alt={alt}
          width={width}
          loading={priority ? "eager" : "lazy"}
          className="w-full h-auto"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
