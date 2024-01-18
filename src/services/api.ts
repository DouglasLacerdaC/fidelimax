import axios from "axios"

export const apiFdlMax = axios.create({
  baseURL: "https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/"
})

export const apiJsonPlaceholder = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
})