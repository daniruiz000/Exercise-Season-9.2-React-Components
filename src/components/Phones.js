import './Phones.css';

const Phones = () => {
    const phones = ["iPhone", "Galaxy", "Redmi", "OnePlus"];
    return (
        
            <ul className='phones'>
                <h2 className='phones__title'>Teléfonos:</h2>
                {phones.map(phone => {
                    return (
                        <li className='phones__phone'>{phone}</li>
                    );
                })}
            </ul>
    );
};

export default Phones;