import Contacts from "./Contacts"

const info =[{
    id:3,
    first: "Your1",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: false,
  },{
    id:2,
    first: "Your2",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: false,
  },{
    id:1,
    first: "Your3",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: false,
  }]

export function getContacts(){
    return info
}
export function getContact (id) {
    for (let i =0; i<info.length; i++) {
        if (info[i].id==id) {
            return info[i]
        }
    }
}
export function updateContact (id, update) {
    console.log(update)
    for (let i =0; i<info.length; i++) {
        if (info[i].id==id) {
            info[i]=update
            info[i].id=id
        }
    }
}
export function updateContactf (id, update) {
    console.log(update)
    for (let i =0; i<info.length; i++) {
        if (info[i].id==id) {
            info[i].favorite=update.favorite
            return "true"
        }
    }
}
export function removeContact (id) {
    for (let i =0; i<info.length; i++) {
        if (info[i].id==id) {
            info.splice(i, 1)
        }
    }
}
export function createContacts(){
    let id=Date.now()
    info.push({
        id:id,
        favorite:false
      })

    return {id:id}
}