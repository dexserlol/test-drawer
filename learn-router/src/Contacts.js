import { Outlet, Link, useLoaderData, Form , useFetcher} from "react-router-dom";
import './Contacts.css'
import { getContact , updateContactf} from "./api.js";
export async function loader({ params }) {
    const contact = await getContact(params.contactId);
    return { contact };
  }

  export async function action({ request, params }) {
    let formData = await request.formData();
    return updateContactf(params.contactId, {
      favorite: formData.get("favorite") === "true",
    });
  }
export default function Contacts() {
  const contact = useLoaderData().contact;
  return (
    <div id="contacts">
        <div class="img-container">
            <img src={contact.avatar || null} />
        </div>
        <div class="info">
            <h1>{contact.first || contact.last ? (
                <>{contact.first} {contact.last}</>
            ):(<i>no name</i>)}{" "}<Favorite contact={contact}/></h1>
            {contact.twitter && (
                <p class="link-twitter">
                    <a 
                    target="_blank"
                    href={`https://twitter.com/${contact.twitter}`}
                    >
                    {contact.twitter}
                    </a>
                </p>
            )}

            {contact.notes && <p class='notes'>{contact.notes}</p>}

            <div class="destroy-btn">
                <Form  action="edit">
                    <button type="submit">Edit</button>
                </Form>
                <Form
                    
                    method="post"
                    action="destroy"
                    onSubmit={(event) => {
                    if (!window.confirm("Please confirm you want to delete this record.")) {
                        event.preventDefault();
                    }
                    }}
                >
                    <button type="submit">Delete</button>
                </Form>
            </div>
        </div>
    </div>
  )
}
function Favorite({ contact }) {
    const fetcher = useFetcher();
    let favorite = contact.favorite;
    if (fetcher.formData) {
        favorite = fetcher.formData.get("favorite") === "true";
      }
    return (
      <fetcher.Form method="post" class="favorite">
        <button
          name="favorite"
          value={favorite ? "false" : "true"}
          aria-label={
            favorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
        >
          {favorite ? "★" : "☆"}
        </button>
      </fetcher.Form>
    );
  }