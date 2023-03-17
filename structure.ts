import { schemaTypes } from "./schemas/index";
import Iframe from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/desk";

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  if (schemaType === "post") {
    return S.document().views([
      S.view.form(),

      S.view
        .component(Iframe)
        .options({
          // Required: Accepts an async function
          // OR a string
          url: `${
            process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
          }/api/preview`,
          // optional: set the default size
          defaultSize: `desktop`,
          // default `desktop
          // you can also add a reload button on new document revisions
          reload: {
            button: true,
          },
          // can also pass attributes to the iframe element
          attributes: {},
        })
        .title("preview"),
    ]);
  }
};
