import PieChart, {
    Legend,
    Export,
    Series,
} from 'devextreme-react/pie-chart';
import { chartDB } from '../../Data/data';
import AmenitiesCard from '../../Components/AmenitiesCard';

export function Booking() {
    return <div className='row'>
        <div className='col'>
            <div className='box primary left'>
                <h3>User</h3>
                <p>Try changing the user?</p>
            </div>
            <AmenitiesCard
                title='Github'
                description='Check out all the source code here.'
                link={{
                    href: "https://github.com/lcraver/dashboard-mvp",
                    name: "Check It!"
                }} />
        </div>
        <div className='col'>
            <div className='box'>
                <p>Check your notifs and mail 👍</p>
            </div>
            <div className='box success left expand'>
                <h3>Calendar</h3>
                <p>Make sure to check your Calendar~</p>
                <p>Make to view this app on different screen sizes as it's fully responsive!</p>
            </div>
        </div>
        <div className='col'>

            <PieChart id="pie"
                palette="Material"
                dataSource={chartDB}
            >
                <Legend
                    orientation="horizontal"
                    itemTextPosition="right"
                    horizontalAlignment="center"
                    verticalAlignment="bottom"
                    columnCount={4} />
                <Export enabled={true} />
                <Series argumentField="country" valueField="medals">
                </Series>
            </PieChart>
        </div>
    </div>;
}

export default Booking;