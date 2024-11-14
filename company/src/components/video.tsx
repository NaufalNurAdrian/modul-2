'use client';

import { getVideo } from "@/libs/contentful";
import { IVideo } from "@/types/video";
import { useEffect, useState } from "react";

export default function Video() {
  const [data, setData] = useState<IVideo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const videos = await getVideo();
      setData(videos);
    };
    fetchData();
  }, []);

  return (
    <div className="p-20 bg-slate-100">
      {data.map((item, idx) => {
        return (
          <div key={idx}>
            <video
              src={`https:${item.fields.introduction.fields.file.url}`}
              muted={false}
              controls
              preload="metadata"
              className="video-player w-full rounded-xl"
              onError={() => console.error("Video failed to load")}
            />
          </div>
        );
      })}
    </div>
  );
}
