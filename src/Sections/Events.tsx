/* eslint-disable @typescript-eslint/no-explicit-any */

export function Events(props: any) {
    return <div className='row'>
        <div className='col'>
            <div className='box primary left expand'>
                <h4>Lily Craver</h4>
                <p>Hello thank you for looking at this quick dashboard mockup.
                    It's fully responsive and features some levels of interactivity.
                    So feel free to mess around!</p>
                <b>This was made in ~3 hours over the weekend of April 27th, 2024.</b>
            </div>
        </div>
        <div className='col'>
            <div className='box'>
                <h5>Made In React.</h5>
            </div>
            <div className='box secondary'>
                <p>Demographics</p>
                <h3>20</h3>
            </div>
        </div>
    </div>;
}

Events.propTypes = {};
Events.defaultProps = {};

export default Events;