import { storageService } from './storageService.js'
import { utilService } from './utilService'

import { makeId } from './utilService.js'

export const contactService = {
    query,
    save,
    remove,
    getById,
    getEmptyContact,
    tryContact
}

const STORAGE_KEY = 'contacts'

const gDefaultContacts = [
    {
        "_id": "5a56640269f443a5d64b32ca",
        "name": "Ochoa Hyde",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824",
        "picture": `https://randomuser.me/api/portraits/women/${utilService.getRandomInt(1,99)}.jpg`
    },
    {
        "_id": "5a5664025f6ae9aa24a99fde",
        "name": "Hallie Mclean",
        "email": "halliemclean@renovize.com",
        "phone": "+1 (948) 464-2888",
        "picture": `https://randomuser.me/api/portraits/${utilService.getRandomInt(1,3) === 1? 'women':'men'}/${utilService.getRandomInt(1,99)}.jpg`
    },
    {
        "_id": "5a56640252d6acddd183d319",
        "name": "Parsons Norris",
        "email": "parsonsnorris@renovize.com",
        "phone": "+1 (958) 502-3495",
        "picture": `https://randomuser.me/api/portraits/${utilService.getRandomInt(1,3) === 1? 'women':'men'}/${utilService.getRandomInt(1,99)}.jpg`
    },
    {
        "_id": "5a566402ed1cf349f0b47b4d",
        "name": "Rachel Lowe",
        "email": "rachellowe@renovize.com",
        "phone": "+1 (911) 475-2312",
        "picture": `https://randomuser.me/api/portraits/${utilService.getRandomInt(1,3) === 1? 'women':'men'}/${utilService.getRandomInt(1,99)}.jpg`
    },
    {
        "_id": "5a566402abce24c6bfe4699d",
        "name": "Dominique Soto",
        "email": "dominiquesoto@renovize.com",
        "phone": "+1 (807) 551-3258",
        "picture": `https://randomuser.me/api/portraits/${utilService.getRandomInt(1,3) === 1? 'women':'men'}/${utilService.getRandomInt(1,99)}.jpg`
    },
    {
        "_id": "5a566402a6499c1d4da9220a",
        "name": "Shana Pope",
        "email": "shanapope@renovize.com",
        "phone": "+1 (970) 527-3082",
        "picture": `https://randomuser.me/api/portraits/${utilService.getRandomInt(1,3) === 1? 'women':'men'}/${utilService.getRandomInt(1,99)}.jpg`
    },
    {
        "_id": "5a566402f90ae30e97f990db",
        "name": "Faulkner Flores",
        "email": "faulknerflores@renovize.com",
        "phone": "+1 (952) 501-2678",
        "picture": `https://randomuser.me/api/portraits/${utilService.getRandomInt(1,3) === 1? 'women':'men'}/${utilService.getRandomInt(1,99)}.jpg`
    },
    {
        "_id": "5a5664027bae84ef280ffbdf",
        "name": "Holder Bean",
        "email": "holderbean@renovize.com",
        "phone": "+1 (989) 503-2663",
        "picture": `https://randomuser.me/api/portraits/${utilService.getRandomInt(1,3) === 1? 'women':'men'}/${utilService.getRandomInt(1,99)}.jpg`
    },
    {
        "_id": "5a566402e3b846c5f6aec652",
        "name": "Rosanne Shelton",
        "email": "rosanneshelton@renovize.com",
        "phone": "+1 (968) 454-3851",
        "picture": `https://randomuser.me/api/portraits/${utilService.getRandomInt(1,3) === 1? 'women':'men'}/${utilService.getRandomInt(1,99)}.jpg`
    },
    {
        "_id": "5a56640272c7dcdf59c3d411",
        "name": "Pamela Nolan",
        "email": "pamelanolan@renovize.com",
        "phone": "+1 (986) 545-2166",
        "picture": `https://randomuser.me/api/portraits/${utilService.getRandomInt(1,3) === 1? 'women':'men'}/${utilService.getRandomInt(1,99)}.jpg`
    },
    {
        "_id": "5a5664029a8dd82a6178b15f",
        "name": "Roy Cantu",
        "email": "roycantu@renovize.com",
        "phone": "+1 (929) 571-2295",
        "picture": `https://randomuser.me/api/portraits/${utilService.getRandomInt(1,3) === 1? 'women':'men'}/${utilService.getRandomInt(1,99)}.jpg`
    },
    {
        "_id": "5a5664028c096d08eeb13a8a",
        "name": "Ollie Christian",
        "email": "olliechristian@renovize.com",
        "phone": "+1 (977) 419-3550",
        "picture": `https://randomuser.me/api/portraits/${utilService.getRandomInt(1,3) === 1? 'women':'men'}/${utilService.getRandomInt(1,99)}.jpg`
    },
    {
        "_id": "5a5664026c53582bb9ebe9d1",
        "name": "Nguyen Walls",
        "email": "nguyenwalls@renovize.com",
        "phone": "+1 (963) 471-3181",
        "picture": `https://randomuser.me/api/portraits/${utilService.getRandomInt(1,3) === 1? 'women':'men'}/${utilService.getRandomInt(1,99)}.jpg`
    },
    {
        "_id": "5a56640298ab77236845b82b",

        "name": "Glenna Santana",
        "email": "glennasantana@renovize.com",
        "phone": "+1 (860) 467-2376",
        "picture": `https://randomuser.me/api/portraits/${utilService.getRandomInt(1,3) === 1? 'women':'men'}/${utilService.getRandomInt(1,99)}.jpg`
    },
    {
        "_id": "5a56640208fba3e8ecb97305",
        "name": "Malone Clark",
        "email": "maloneclark@renovize.com",
        "phone": "+1 (818) 565-2557",
        "picture": `https://randomuser.me/api/portraits/${utilService.getRandomInt(1,3) === 1? 'women':'men'}/${utilService.getRandomInt(1,99)}.jpg`
    },
    {
        "_id": "5a566402abb3146207bc4ec5",
        "name": "Floyd Rutledge",
        "email": "floydrutledge@renovize.com",
        "phone": "+1 (807) 597-3629",
        "picture": `https://randomuser.me/api/portraits/${utilService.getRandomInt(1,3) === 1? 'women':'men'}/${utilService.getRandomInt(1,99)}.jpg`
    },
    {
        "_id": "5a56640298500fead8cb1ee5",
        "name": "Grace James",
        "email": "gracejames@renovize.com",
        "phone": "+1 (959) 525-2529",
        "picture": `https://randomuser.me/api/portraits/${utilService.getRandomInt(1,3) === 1? 'women':'men'}/${utilService.getRandomInt(1,99)}.jpg`
    },
    {
        "_id": "5a56640243427b8f8445231e",
        "name": "Tanner Gates",
        "email": "tannergates@renovize.com",
        "phone": "+1 (978) 591-2291",
        "picture": `https://randomuser.me/api/portraits/${utilService.getRandomInt(1,3) === 1? 'women':'men'}/${utilService.getRandomInt(1,99)}.jpg`
    },
    {
        "_id": "5a5664025c3abdad6f5e098c",
        "name": "Lilly Conner",
        "email": "lillyconner@renovize.com",
        "phone": "+1 (842) 587-3812",
        "picture": `https://randomuser.me/api/portraits/${utilService.getRandomInt(1,3) === 1? 'women':'men'}/${utilService.getRandomInt(1,99)}.jpg`
    }
];

var gContacts = _loadContacts()

// function query(filterBy) {
//     let contactsToReturn = gContacts;
//     if (filterBy) {
//         var { type, maxBatteryStatus, minBatteryStatus, model } = filterBy
//         maxBatteryStatus = maxBatteryStatus || Infinity
//         minBatteryStatus = minBatteryStatus || 0
//         contactsToReturn = gContacts.filter(contact => contact.type.toLowerCase().includes(type.toLowerCase()) && contact.model.toLowerCase().includes(model.toLowerCase())
//             && (contact.batteryStatus < maxBatteryStatus)
//             && contact.batteryStatus > minBatteryStatus)
//     }
//     return Promise.resolve([...contactsToReturn]);
// }

function query(filterBy) {
    let contactsToReturn = gContacts;
    if (filterBy) {
        var { name,phone } = filterBy
        contactsToReturn = gContacts.filter(contact => (contact.name.toLowerCase().includes(name.toLowerCase()) || contact.email.toLowerCase().includes(name.toLowerCase())) && contact.phone.includes(phone)
        )
    }
    return Promise.resolve([...contactsToReturn]);
}

function tryContact(id) {
    const contact = gContacts.find(contact => contact._id === id)
    contact.batteryStatus -= 10
    return Promise.resolve()
}
function getById(id) {
    const contact = gContacts.find(contact => contact._id === id)
    return Promise.resolve({ ...contact })
}

function remove(id) {
    const idx = gContacts.findIndex(contact => contact._id === id)
    gContacts.splice(idx, 1)
    if (!gContacts.length) gContacts = gDefaultContacts.slice()
    storageService.store(STORAGE_KEY, gContacts)
    return Promise.resolve()
}

function save(contactToSave) {
    if (contactToSave._id) {
        const idx = gContacts.findIndex(contact => contact._id === contactToSave._id)
        gContacts.splice(idx, 1, contactToSave)
    } else {
        contactToSave._id = makeId()
        contactToSave.batteryStatus = 100
        gContacts.push(contactToSave)
    }
    storageService.store(STORAGE_KEY, gContacts)
    return Promise.resolve(contactToSave);
}

function getEmptyContact() {
    return {
        email: '',
        name: '',
        phone: ''
    }
}

function _loadContacts() {
    let contacts = storageService.load(STORAGE_KEY)
    if (!contacts || !contacts.length) contacts = gDefaultContacts
    storageService.store(STORAGE_KEY, contacts)
    return contacts
}



// export const contactService {
//   getContacts,
//   getContactById,
//   deleteContact,
//   saveContact,
//   getEmptyContact
// }




// function sort(arr) {
//   return arr.sort((a, b) => {
//     if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
//       return -1;
//     }
//     if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
//       return 1;
//     }

//     return 0;
//   })
// }

// function getContacts(filterBy = null) {
//   return new Promise((resolve, reject) => {
//     var contactsToReturn = contacts;
//     if (filterBy && filterBy.term) {
//       contactsToReturn = filter(filterBy.term)
//     }
//     resolve(sort(contactsToReturn))
//   })
// }

// function getContactById(id) {
//   return new Promise((resolve, reject) => {
//     const contact = contacts.find(contact => contact._id === id)
//     contact ? resolve(contact) : reject(`Contact id ${id} not found!`)
//   })
// }

// function deleteContact(id) {
//   return new Promise((resolve, reject) => {
//     const index = contacts.findIndex(contact => contact._id === id)
//     if (index !== -1) {
//       contacts.splice(index, 1)
//     }

//     resolve(contacts)
//   })
// }

// function _updateContact(contact) {
//   return new Promise((resolve, reject) => {
//     const index = contacts.findIndex(c => contact._id === c._id)
//     if (index !== -1) {
//       contacts[index] = contact
//     }
//     resolve(contact)
//   })
// }

// function _addContact(contact) {
//   return new Promise((resolve, reject) => {
//     contact._id = _makeId()
//     contacts.push(contact)
//     resolve(contact)
//   })
// }

// function saveContact(contact) {
//   return contact._id ? _updateContact(contact) : _addContact(contact)
// }

// function getEmptyContact() {
//   return {
//     name: '',
//     email: '',
//     phone: ''
//   }
// }

// function filter(term) {
//   term = term.toLocaleLowerCase()
//   return contacts.filter(contact => {
//     return contact.name.toLocaleLowerCase().includes(term) ||
//       contact.phone.toLocaleLowerCase().includes(term) ||
//       contact.email.toLocaleLowerCase().includes(term)
//   })
// }



// function _makeId(length = 10) {
//   var txt = ''
//   var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//   for (var i = 0; i < length; i++) {
//     txt += possible.charAt(Math.floor(Math.random() * possible.length))
//   }
//   return txt
// }