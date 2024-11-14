import { getVideo } from "@/libs/contentful";
import { IVideo } from "@/types/video";

export default async function Video() {
  const data: IVideo[] = await getVideo()
  return (
    <div className="p-20 bg-slate-100">
      {data.map((item, idx) => {
        return (
          <div key={idx}>
            <video
              src={`https:${item.fields.introduction.fields.file.url}`}
              muted={false}
              controls
              className="video-player w-full rounded-xl"
            />
          </div>
        );
      })}
    </div>
  );
}
