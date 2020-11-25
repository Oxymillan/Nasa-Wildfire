import { useState, useEffect } from "react";
import Map from "./components/Map";
import Header from "./components/Header";
import Loader from "react-loader-spinner";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState([false]);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);

      console.log(events);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Header />
      {!loading ? (
        <Map eventData={eventData} />
      ) : (
        <div className="loader">
          <Loader
            type="Circles"
            color="#0F3A97"
            height={80}
            width={80}
          />
          <p><strong>Loading Data</strong></p>
        </div>
      )}
    </div>
  );
}

export default App;
