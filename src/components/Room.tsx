type RoomProps = {
    id: number;
    name: string;
    tools: string[];
}

const Room = ({
    name,
    tools
}: RoomProps) => {
    return (
        <div className="room border border-gray-300 p-4">
            <h2>{name}</h2>
            <h3>Strumenti disponibili</h3>
            <ul>
                {tools.map(tool => <li key={tool}>{tool}</li>)}
            </ul>
        </div>
    )
}
export default Room;