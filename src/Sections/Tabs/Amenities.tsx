/* eslint-disable @typescript-eslint/no-explicit-any */

import { amenitiesDB } from '../../data';
import AmenitiesCard from '../../Components/Calendar/AmenitiesCard';

export function Amenities(props: any) {
    return <div className='row' {...props}>
        {
            amenitiesDB.map((amenity) =>
                <AmenitiesCard title={amenity.Name} description={amenity.Description} image={amenity.Image} />
            )
        }
    </div>;
}

Amenities.propTypes = {};
Amenities.defaultProps = {};

export default Amenities;