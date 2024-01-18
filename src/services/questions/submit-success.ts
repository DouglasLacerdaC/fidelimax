import { apiFdlMax } from "../api";

export async function submitSuccess() {
  const { data } = await apiFdlMax.get("/survey-post-success.json")

  return data
}