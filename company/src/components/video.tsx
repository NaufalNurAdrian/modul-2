import { getVideo } from "@/libs/contentful";
import { IVideo } from "@/types/video";

export default async function Video() {
  const data: IVideo[] = await getVideo();

  if (!data || data.length === 0) {
    return (
      <div className="p-20 bg-slate-100 text-center">
        <p className="text-gray-500">Video tidak tersedia saat ini.</p>
      </div>
    );
  }

  return (
    <div className="p-8 sm:p-12 bg-slate-100">
      {data.map((item, idx) => {
        const videoUrl = item.fields.introduction?.fields?.file?.url;
        if (!videoUrl) {
          return (
            <p key={idx} className="text-center text-red-500">
              URL video tidak valid.
            </p>
          );
        }

        return (
          <div key={idx} className="mb-8">
            <video
              src={`https:${videoUrl}`}
              muted={false}
              controls
              onError={() =>
                console.error(`Gagal memuat video: ${videoUrl}`)
              }
              preload="metadata"
              className="video-player w-full max-w-4xl mx-auto rounded-xl shadow-lg"
            />
          </div>
        );
      })}
    </div>
  );
}
