import { useReducer } from 'react'
import { Calendar, momentLocalizer, Event, SlotInfo } from 'react-big-calendar'
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css'

type EventsListType = { events: Event[] }
type ActionType = 
| { type: 'addEvent', payload: Event }
| { type: 'updateEvent', payload: Event }
| { type: 'deleteEvent', payload: Event };

const localizer = momentLocalizer(moment)
const initialState: EventsListType = {
  events: [{
    title: 'test',
    start: new Date(),
    end: new Date()
  }]
};

const reducer = (state: EventsListType, action: ActionType) => {
  const { type, payload } = action;

  switch (type) {
    case 'addEvent':
      state.events.push(payload); 
      return state;
    default:
      return state;
  }
}

const GlobalCalendar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSelectSlot = (slot: SlotInfo) => {
    const { slots } = slot;

    slots.forEach(item => {
      dispatch({ type: 'addEvent', payload: {
        title: 'test',
        start: new Date(item),
        end: new Date(item),
      } })
    })
  }

  return (
    <div className='m-5'>
      <Calendar
        localizer={localizer}
        events={state.events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable={true}
        onSelectSlot={handleSelectSlot}
      />
    </div>
  )
}

export default GlobalCalendar