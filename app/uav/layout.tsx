import type { Metadata } from "next";
import type { ReactNode } from "react";
import AppBootstrap from "@/components/uav/AppBootstrap";
import UavNav from "@/components/uav/UavNav";

export const metadata: Metadata = {
  title: "UAV Predictive Maintenance — Digital Twin",
  description:
    "Deep-learning predictive maintenance digital twin: LSTM, Transformer, and 1D-CNN models forecast Remaining Useful Life on the NASA C-MAPSS turbofan benchmark and a synthesized multirotor UAV fleet, with explainable-AI diagnostics.",
};

export default function UavLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppBootstrap />
      <UavNav />
      {children}
    </>
  );
}
