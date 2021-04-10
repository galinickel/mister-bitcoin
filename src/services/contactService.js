import { httpService } from './http.service.js'
import { storageService } from './storageService.js'
import { utilService } from './utilService'


export const contactService = {
    checkConnection,
    query,
    save,
    remove,
    getById,
    getEmptyContact,
    tryContact
}

const STORAGE_KEY = 'contacts'
const CONTACT_URL = 'contact/'
const gDefaultContacts = [
    {
        "_id": "6071912ba4b756e3b21092f9",
        "name": "Hallie Mcleanaaa",
        "email": "halliemclean@renovize.com",
        "phone": "+1 (948) 464-2888",
        "picture": "https://randomuser.me/api/portraits/women/96.jpg"
    },
    {
        "_id": "60719145a4b756e3b2109e0b",
        "name": "Ochoa Hyde",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824",
        "picture": "https://randomuser.me/api/portraits/women/56.jpg"
    },
    {
        "_id": "60719150a4b756e3b210a229",
        "name": "Parsons Norris",
        "email": "parsonsnorris@renovize.com",
        "phone": "+1 (958) 502-3495",
        "picture": "https://randomuser.me/api/portraits/men/56.jpg"
    },
    {
        "_id": "60719166a4b756e3b210ac28",
        "name": "Rachel Lowe",
        "email": "rachellowe@renovize.com",
        "phone": "+1 (911) 475-2312",
        "picture": "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        "_id": "6071918da4b756e3b210bc31",
        "name": "Rosanne Shelton",
        "email": "rosanneshelton@renovize.com",
        "phone": "+1 (968) 454-3851",
        "picture": "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
        "_id": "60719196a4b756e3b210bff2",
        "name": "Pamela Nolan",
        "email": "pamelanolan@renovize.com",
        "phone": "+1 (986) 545-2166",
        "picture": "https://randomuser.me/api/portraits/men/19.jpg"
    },
    {
        "_id": "607191a3a4b756e3b210c57b",
        "name": "Roy Cantu",
        "email": "roycantu@renovize.com",
        "phone": "+1 (929) 571-2295",
        "picture": "https://randomuser.me/api/portraits/men/96.jpg"
    },
    {
        "_id": "607191aba4b756e3b210c8d5",
        "name": "Ollie Christian",
        "email": "olliechristian@renovize.com",
        "phone": "+1 (977) 419-3550",
        "picture": "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
        "_id": "607191bea4b756e3b210d1a8",
        "name": "Malone Clark",
        "email": "maloneclark@renovize.com",
        "phone": "+1 (818) 565-2557",
        "picture": "https://randomuser.me/api/portraits/women/56.jpg"
    },
    {
        "_id": "607191c8a4b756e3b210d5e5",
        "name": "Floyd Rutledge",
        "email": "floydrutledge@renovize.com",
        "phone": "+1 (807) 597-3629",
        "picture": "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        "_id": "60719696bd69673150059e38",
        "email": "gali.girlx@gmail.com",
        "name": "gali nickel",
        "phone": "",
        "picture": "https://randomuser.me/api/portraits/men/31.jpg"
    },
    {
        "_id": "6071972da7e2eb3d74a35c55",
        "email": "cabbit@windowslive.com",
        "name": "gali nickel",
        "phone": "0526780959",
        "picture": "https://randomuser.me/api/portraits/women/75.jpg"
    }
]

var gContacts = _loadContacts()

function checkConnection() {
    return window.navigator.onLine
}
async function query(filterBy) {
    var contacts = []
    console.log('checkConnection()', checkConnection())
    if (!checkConnection()) contacts = gContacts;
    else {
        contacts = await httpService.get(CONTACT_URL);
        storageService.store(STORAGE_KEY, contacts)
    }
    if (filterBy) {
        var contactsToReturn = []
        var { name, phone } = filterBy
        contactsToReturn = contacts.filter(contact =>
            (contact.name.toLowerCase().includes(name.toLowerCase()) ||
                contact.email.toLowerCase().includes(name.toLowerCase())) &&
            contact.phone.includes(phone)
        )
        return Promise.resolve(contactsToReturn)
    }
    else return Promise.resolve([...contacts])
}

function tryContact(id) {
    const contact = gContacts.find(contact => contact._id === id)
    contact.batteryStatus -= 10
    return Promise.resolve()
}
async function getById(id) {
    const contact = await httpService.get(CONTACT_URL + id)
    return Promise.resolve({ ...contact })
}

async function remove(id) {
    if (!checkConnection()) {
        const idx = gContacts.findIndex(contact => contact._id === id)
        gContacts.splice(idx, 1)
        if (!gContacts.length) gContacts = gDefaultContacts.slice()
        storageService.store(STORAGE_KEY, gContacts)
        return Promise.resolve()
    }
    else {
        await httpService.delete(CONTACT_URL + id);
        return Promise.resolve()
    }
}

function save(contactToSave) {
    if (contactToSave._id) {
        httpService.put(CONTACT_URL + contactToSave._id, contactToSave)
    } else {
        contactToSave.picture = `https://randomuser.me/api/portraits/${utilService.getRandomInt(1, 3) === 1 ? 'women' : 'men'}/${utilService.getRandomInt(1, 99)}.jpg`
        httpService.post(CONTACT_URL, contactToSave)
    }
    return Promise.resolve(contactToSave);
}

function getEmptyContact() {
    return {
        email: '',
        name: '',
        phone: ''
    }
}

async function _loadContacts() {
    let contacts = await httpService.get(CONTACT_URL)
    return contacts
}


