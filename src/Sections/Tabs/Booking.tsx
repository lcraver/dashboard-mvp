/* eslint-disable @typescript-eslint/no-explicit-any */

import PieChart, {
    Legend,
    Export,
    Series,
  } from 'devextreme-react/pie-chart';
import { chartDB } from '../../data';

export function Booking(props: any) {
    return <div className='row' {...props}>
        <div className='col'>
            <div className='box primary left expand'>
                <h3>User</h3>
                <p>Try changing the user?</p>
            </div>
            <div className='box'>
                <p>Demographics</p>
                <h3>20</h3>
            </div>
        </div>
        <div className='col'>
            <div className='box'>
                <p>Check your notifications and mail 👀</p>
            </div>
            <div className='box success left expand'>
                <h3>Calendar</h3>
                <p>Make sure to check your Calendar~</p>
            </div>
        </div>
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
    </div>;
}

Booking.propTypes = {};
Booking.defaultProps = {};

export default Booking;