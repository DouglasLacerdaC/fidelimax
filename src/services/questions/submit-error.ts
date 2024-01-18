import { apiFdlMax } from "../api";

export async function submitError() {
  const { data } = await apiFdlMax.get("/survey-post-error.json")

  return data
}