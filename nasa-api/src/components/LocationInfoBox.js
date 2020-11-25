import moment from 'moment'

const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Event Info</h2>
            <ul>
                <li>ID: <strong>{ info.id }</strong></li>
                <li>Title: <strong>{ info.title }</strong></li>
                <li>Sources: <strong>{ info.sources + ' ' }</strong></li>
                <br/>  
                <li>Date: <strong>{ moment.utc(info.date).format('DD/MM/YYYY') }</strong></li>
                <li>Time: <strong>{ moment.utc(info.date).format('LTS') }</strong></li>
                <li>Latitude: <strong>{ info.lat }</strong></li>
                <li>Longitude: <strong>{ info.lng }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
