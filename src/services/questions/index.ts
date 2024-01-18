import { getAll } from "./getAll"
import { submit } from "./submit"
import { submitError } from "./submit-error"
import { submitSuccess } from "./submit-success"

export const questionsService = {
  getAll,
  submit,
  submitError,
  submitSuccess
}