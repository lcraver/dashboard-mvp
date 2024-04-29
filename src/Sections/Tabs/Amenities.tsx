import { amenitiesDB } from '../../Data/data';
import AmenitiesCard from '../../Components/AmenitiesCard';

export function Amenities() {
    return <div className='row'>
        {
            amenitiesDB.map((amenity) =>
                <AmenitiesCard title={amenity.Name} description={amenity.Description} image={amenity.Image} />
            )
        }
    </div>;
}

export default Amenities;