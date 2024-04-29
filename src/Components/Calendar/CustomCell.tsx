// @ts-nocheck

import { eventsDB } from '../../Data/data.ts';

// didn't want to bother with fixing the types here sorry.

function getCellCssClass({ date, view }) {
    let cssClass = '';

    if (view === 'month') {
        eventsDB.forEach((item) => {
            if (cssClass == '') {
                const eventDate = new Date(item.Date * 1000);
                if (date.getDate() === eventDate.getDate() &&
                    date.getMonth() === eventDate.getMonth()) {
                    cssClass = 'events ' + item.Color;
                }
            }
        });
    }

    return cssClass;
}

function CustomCell({ data: cell }) {
    const { text } = cell;

    const className = getCellCssClass(cell);

    return <span className={className}>{text}</span>;
}

export default CustomCell;
