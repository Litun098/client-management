import {FaEnvelope,FaPhone,FaIdBadge} from 'react-icons/fa'

const ClientInfo = (client) => {

  return (
    <>
      <h5 className='mt-5'>Client Information</h5>
      <ul className='list-group'>
        <li className='list-group-item'>
            <FaIdBadge className='icon'/>{client.client.name}
        </li>
        <li className='list-group-item'>
            <FaEnvelope className='icon'/>{client.client.email}
        </li>
        <li className='list-group-item'>
            <FaPhone className='icon'/>{client.client.phone}
        </li>
      </ul>
    </>
  )
}

export default ClientInfo
