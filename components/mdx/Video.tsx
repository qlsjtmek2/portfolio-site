interface VideoProps {
  src: string;
  caption?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  poster?: string;
}

export default function Video({
  src,
  caption,
  autoPlay = false,
  loop = false,
  muted = true,
  controls = true,
  poster,
}: VideoProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const videoSrc = src.startsWith("/") ? `${basePath}${src}` : src;
  const posterSrc =
    poster && poster.startsWith("/") ? `${basePath}${poster}` : poster;

  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
        <video
          src={videoSrc}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          controls={controls}
          poster={posterSrc}
          playsInline
          className="w-full h-auto"
        >
          브라우저가 비디오를 지원하지 않습니다.
        </video>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
