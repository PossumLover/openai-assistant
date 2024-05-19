"use client";

import { useState } from "react";
import Chat from "@/components/chat";
import WeatherWidget from "@/components/weather-widget";
import { WeatherWidgetProps } from "@/components/weather-widget";
import FileViewer from "@/components/file-viewer";

export default function Home() {
  const [weatherData, setWeatherData] = useState<
    Omit<WeatherWidgetProps, "isEmpty">
  >({
    location: "",
    temperature: "",
    conditions: "",
    unit: "",
  });

  return (
    <main className="flex h-screen items-center justify-center">
      <WeatherWidget {...weatherData} isEmpty={!weatherData.location} />
      <FileViewer />
      <div className="w-full h-full max-w-[700px]">
        <Chat setWeatherData={setWeatherData} />
      </div>
    </main>
  );
}
