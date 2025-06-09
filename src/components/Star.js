import { FaStar } from 'react-icons/fa';

function Star({ selected = false, onClick }) {
  return (
    <FaStar
      color={selected ? 'gold' : 'lightgray'}
      size={30}
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    />
  );
}

export default Star;