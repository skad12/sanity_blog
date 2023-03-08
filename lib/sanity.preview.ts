import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";

function onPublicAccessOnly() {
  throw new Error(`unable to load preview as you are not logged in`);
}

if (!projectId || !dataset) {
  throw new Error(
    `Missing ProjectId or Dataset. check your sanity.json oe .env`
  );
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
