import { redirect } from "react-router-dom";
import { removeContact } from "./api.js";

export async function action({ params }) {
  await removeContact(params.contactId);
  return redirect("/");
}