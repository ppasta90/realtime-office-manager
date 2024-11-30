import rooms from '../data/rooms.json';
import Room from "./Room.tsx";

const FloorPlan = () => {
    return (
        <div id="floor-plan" className="grid grid-cols-3 gap-4">
            {rooms.map(room => <Room key={room.id} id={room.id} name={room.name} tools={room.tools} />)}
        </div>
    )
}

export default FloorPlan;