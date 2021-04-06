import './ContactPreview.scss'
export function ContactPreview({ contact, onSelectContact }) {

  return (
    <div className="contact-preview" onClick={() => onSelectContact(contact._id)}>
      <img src={contact.picture} alt="" />
      <p>{contact.name}</p>
      <small>{contact.email}</small>
    </div>
  )
}
