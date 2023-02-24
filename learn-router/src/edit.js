import { Form, useLoaderData , redirect,useNavigate} from "react-router-dom";
import { updateContact } from "./api";
import './edit.css'
export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
  }
export default function EditContact() {
  const contact = useLoaderData();
  const navigate =useNavigate()
  return (
    <Form method="post" id="contact-form">
        <div id="edit-container">
        <div class='label'><span>Name</span></div>
        <input
        id="name"
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact.first}
        />
        <input
        id="name"
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact.last}
        />
        <div class='label'><span>Twitter</span></div>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact.twitter}
        />

        <div class='label'><span>Avatar URL</span></div>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact.avatar}
        />
        <div class='label'><span>Notes</span></div>
        <textarea
          name="notes"
          defaultValue={contact.notes}
          rows={6}
        />
        <button type="submit" id="save">Save</button>
        <button type="button" onClick={()=>{navigate(-1)}}>Cancel</button>
      </div>
    </Form>
  );
}