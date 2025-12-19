import React from "react";

import type { InPostPoint } from "./types";

export interface InPostGeoWidgetProps {
  /** Public token generated in the InPost Manager app */
  token: string;
  /** Optional language for widget UI */
  language?: "pl" | "en" | "uk";
  /** Widget configuration */
  config:
    | "parcelCollect"
    | "parcelCollectPayment"
    | "parcelCollect247"
    | "parcelSend";
  /** Whether to use sandbox (dev) environment */
  sandbox: boolean;
  /** Enable debug logs in console */
  debug?: boolean;
  /** Callback when a point is selected */
  onPoint: (point: InPostPoint) => any;
}

export function InPostGeoWidget({
  token,
  language = "pl",
  config,
  sandbox = false,
  onPoint,
  debug = false,
}: InPostGeoWidgetProps) {
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = sandbox
      ? "https://sandbox-easy-geowidget-sdk.easypack24.net/inpost-geowidget.css"
      : "https://geowidget.inpost.pl/inpost-geowidget.css";

    const script = document.createElement("script");
    script.src = sandbox
      ? "https://sandbox-easy-geowidget-sdk.easypack24.net/inpost-geowidget.js"
      : "https://geowidget.inpost.pl/inpost-geowidget.js";
    script.async = true;

    document.head.appendChild(css);
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(css);
      document.body.removeChild(script);
    };
  }, [sandbox]);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.setAttribute("token", token);
    el.setAttribute("config", config);
    el.setAttribute("language", language);

    const onInit = (event: any) => {
      const api = event.detail.api;

      if (debug) {
        console.log("Widget initialized", api);
      }

      api.addPointSelectedCallback((point: any) => {
        if (debug) {
          console.log("POINT SELECTED", point);
        }
        onPoint(point);
      });
    };

    el.addEventListener("inpost.geowidget.init", onInit);

    return () => {
      el.removeEventListener("inpost.geowidget.init", onInit);
    };
  }, [token, config, language, onPoint, debug]);

  return (
    <inpost-geowidget
      ref={ref}
      token={token}
      language={language}
      config={config}
    />
  );
}
