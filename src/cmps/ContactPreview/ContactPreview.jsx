import { Link } from 'react-router-dom'
import './ContactPreview.scss'

export function ContactPreview({ contact }) {
  return (
    <div className="contact-preview">
      <Link to={'/contact/' + contact._id}>
        <img src={contact.picture} alt="" />
      </Link>
      <p>{contact.name}</p>
      <small>{contact.email}</small>
    </div>
  )
}