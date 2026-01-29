interface YouTubeProps {
  url: string;
  caption?: string;
  aspectRatio?: "16:9" | "4:3" | "1:1";
}

function extractYouTubeId(url: string): string | null {
  // 지원 형식:
  // - https://www.youtube.com/watch?v=VIDEO_ID
  // - https://youtu.be/VIDEO_ID
  // - https://www.youtube.com/embed/VIDEO_ID
  const pattern =
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(pattern);
  return match ? match[1] : null;
}

const aspectRatioClasses: Record<string, string> = {
  "16:9": "aspect-video",
  "4:3": "aspect-[4/3]",
  "1:1": "aspect-square",
};

export default function YouTube({
  url,
  caption,
  aspectRatio = "16:9",
}: YouTubeProps) {
  const videoId = extractYouTubeId(url);

  if (!videoId) {
    return (
      <div className="my-8 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg text-red-600 dark:text-red-400">
        유효하지 않은 YouTube URL입니다: {url}
      </div>
    );
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <figure className="my-8">
      <div
        className={`overflow-hidden rounded-lg ${aspectRatioClasses[aspectRatio]}`}
      >
        <iframe
          src={embedUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
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
