import { QuestionsType } from "@/entities/questions";
import { apiFdlMax } from "../api";

export async function getAll() {
  const { data } = await apiFdlMax.get<QuestionsType>("survey.json")

  return data
}