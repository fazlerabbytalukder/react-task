import React, { useState, useEffect } from 'react';

const ModalA = ({ closeModal, openModalC }) => {
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        // Fetch contacts from the API
        const fetchContacts = async () => {
            try {
                // Construct the API URL
                const apiUrl = `https://contact.mediusware.com/api/contacts?page=${page}&search=${searchTerm}`;

                // Make the API request
                const response = await fetch(apiUrl);

                if (response.ok) {
                    const data = await response.json();
                    setContacts(data.contacts);
                }
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchContacts();
    }, [searchTerm, page]);
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Modal A - All Contacts</h5>
                    <button type="button" className="close" onClick={closeModal}>
                        <span>&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <input
                        type="text"
                        placeholder="Search contacts"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <ul className="contact-list">
                        {contacts.map((contact) => (
                            <li key={contact.id} onClick={() => openModalC(contact)}>
                                {contact.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" onClick={closeModal}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalA;