declare module React {
  namespace JSX {
    interface IntrinsicElements {
      "inpost-geowidget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        onpoint?: (event: CustomEvent<any>) => void;
        token: string;
        language?: "pl" | "en" | "uk";
        config:
          | "parcelCollect"
          | "parcelCollectPayment"
          | "parcelCollect247"
          | "parcelSend";
      };
    }
  }
}
