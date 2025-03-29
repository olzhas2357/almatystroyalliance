"use client";
import { useState, useEffect } from "react";

const projects = [
  { src: "/0320(1).mp4", thumbnail: "/0320.jpg", title: "Проект 1" },
  { src: "/0320(1).mp4", thumbnail: "/0320.jpg", title: "Проект 2" },
  { src: "/0320(1).mp4", thumbnail: "/0320.jpg", title: "Проект 3" },
];

const VideoGallery = () => {
  const [videoSrc, setVideoSrc] = useState("");

  // Устанавливаем первый проект после монтирования
  useEffect(() => {
    setVideoSrc(projects[0]?.src || "");
  }, []);

  return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Видео</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Наши проекты</h2>
              <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Посмотрите, как мы строим дома для наших клиентов
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl mt-8">
            <div className="aspect-video overflow-hidden rounded-xl">
              {videoSrc && (
                  <video key={videoSrc} className="w-full h-full object-cover" controls>
                    <source src={videoSrc} type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                  </video>
              )}
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {projects.map((project, index) => (
                  <button
                      key={index}
                      className={`aspect-video overflow-hidden rounded-lg border-2 ${
                          videoSrc === project.src ? "border-blue-500" : "border-transparent"
                      }`}
                      onClick={() => setVideoSrc(project.src)}
                  >
                    <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
                  </button>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default VideoGallery;
