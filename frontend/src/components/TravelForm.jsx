import { useState } from "react";

function TravelForm() {
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [budget, setBudget] = useState("");
  const [travelers, setTravelers] = useState("");
  const [travelStyle, setTravelStyle] = useState("");
  const [interests, setInterests] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !destination ||
      !duration ||
      !budget ||
      !travelers ||
      !travelStyle ||
      !interests
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    const tripData = {
      destination,
      duration,
      budget,
      travelers,
      travelStyle,
      interests,
    };

    console.log("Trip Details:");
    console.log(tripData);

    alert("Trip details captured successfully! Check the browser console.");
  };

  return (
    <main className="container">
      <h2>Create Your Dream Trip</h2>

      <form onSubmit={handleSubmit}>

        <label>Destination</label>
        <input
          type="text"
          placeholder="Enter destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        <label>Duration (Days)</label>
        <input
          type="number"
          placeholder="e.g. 5"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        <label>Budget</label>
        <select
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        >
          <option value="">Select Budget</option>
          <option value="Budget">Budget</option>
          <option value="Standard">Standard</option>
          <option value="Luxury">Luxury</option>
        </select>

        <label>Number of Travelers</label>
        <input
          type="number"
          placeholder="e.g. 2"
          value={travelers}
          onChange={(e) => setTravelers(e.target.value)}
        />

        <label>Travel Style</label>
        <select
          value={travelStyle}
          onChange={(e) => setTravelStyle(e.target.value)}
        >
          <option value="">Select Travel Style</option>
          <option value="Backpacking">Backpacking</option>
          <option value="Adventure">Adventure</option>
          <option value="Family">Family</option>
          <option value="Luxury">Luxury</option>
          <option value="Solo">Solo</option>
        </select>

        <label>Interests</label>
        <input
          type="text"
          placeholder="Nature, Beaches, Food, Adventure..."
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
        />

        <button type="submit">
          Generate AI Trip
        </button>

      </form>
    </main>
  );
}

export default TravelForm;