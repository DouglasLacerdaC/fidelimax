import { apiJsonPlaceholder } from "../api";

export async function submit(body: any) {
  const { data } = await apiJsonPlaceholder.post("/posts", {
    ...body
  })

  return data
}