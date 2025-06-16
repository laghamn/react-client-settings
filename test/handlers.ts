import { http, HttpResponse } from "msw";
import type { SettingsData } from "./settings";

export const handlers = [
  http.get("/api/settings", async () =>
    HttpResponse.json<SettingsData>({
      showDevelopmentFeature: true,
    }),
  ),
];
