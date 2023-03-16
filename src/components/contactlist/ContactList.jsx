import styles from './ContactList.module.css';

function ContactList({ contacts }) {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li className={styles.item} key={contact.id}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
