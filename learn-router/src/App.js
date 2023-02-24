import logo from './logo.svg';
import './App.css';
import { NavLink,Outlet, useNavigation, useLoaderData, Form,redirect} from "react-router-dom";
import { getContacts ,createContacts} from "./api.js";
export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}
export async function action() {
  const contact = await createContacts();
  return redirect(`/contacts/${contact.id}/edit`);
}
function App() {
  const { contacts } = useLoaderData();
  const navigation = useNavigation();
  return (
    <>
      <div id='sidebar'>
      <h1>React Router Contacts</h1>
        <div class='search'>
          <form id="search-form" role="search">
            <input 
            id='search' 
            aria-label='Seacrh' 
            placeholder='Search' 
            type="searh" 
            name='q'/>
            <div
              id='search-spinner'
              hidden={true}></div>
            <div className='sr-only'></div>
          </form>
          <Form method='post' class="btn-form">
            <button type="submit">New</button>
          </Form>
        </div>
        <hr color='black'/> 
        <nav>
        {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id} class="bar-all">
                  <NavLink to={`contacts/${contact.id}`}
                  className={({isActive, isPending})=>{return isActive ? "obj active": 
                  isPending ? "obj pending" : "obj"}}>
                    {contact.first || contact.last ? (
                      <div class="text-bar">
                        {contact.first} {contact.last}
                      </div>
                    ) : (
                      <i class='text-bar'>No Name</i>
                    )}{" "}
                    {contact.favorite && <span class='star-bar'>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="details" className={navigation.state === "loading" ? " loading" : ""}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
