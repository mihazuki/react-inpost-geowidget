# react-inpost-geowidget

**Unofficial React wrapper for the InPost GeoWidget.**

This package allows you to easily integrate the InPost GeoWidget in your React applications with TypeScript support.

---

## Installation

```bash
npm install @velesx/react-inpost-geowidget
```

## Usage

```tsx
import React from "react";
import {
  InPostGeoWidget,
  type InPostGeoWidgetProps,
  type InPostPoint,
} from "react-inpost-geowidget";

export default function App() {
  const handlePoint = (point: InPostPoint) => {
    console.log("Selected point:", point);
  };

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <InPostGeoWidget
        token="your-inpost-widget-token"
        config="parcelCollect"
        sandbox={true} // optional, default: false
        debug={true} // optional, default: false
        onPoint={handlePoint}
      />
    </div>
  );
}
```

> **Note:** Make sure the container of `<InPostGeoWidget>` has a defined width and height, otherwise the map may not render correctly.

| Prop       | Type                                                                              | Required | Description                                            |
| ---------- | --------------------------------------------------------------------------------- | -------- | ------------------------------------------------------ |
| `token`    | `string`                                                                          | ✅       | Public token generated in the InPost Manager app       |
| `language` | `"pl" \| "en" \| "uk"`                                                            | ❌       | Optional language for the widget UI (default: `"pl"`)  |
| `config`   | `"parcelCollect" \| "parcelCollectPayment" \| "parcelCollect247" \| "parcelSend"` | ✅       | Widget configuration                                   |
| `sandbox`  | `boolean`                                                                         | ✅       | Whether to use sandbox (dev) environment               |
| `debug`    | `boolean`                                                                         | ❌       | Enable debug logs in console (default: `false`)        |
| `onPoint`  | `(point: InPostPoint) => any`                                                     | ✅       | Callback triggered when a point is selected on the map |

## License

MIT
