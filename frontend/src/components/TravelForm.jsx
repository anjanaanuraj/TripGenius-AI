function TravelForm() {
  return (
    <main className="container">
      <h2>Create Your Dream Trip</h2>

      <form>
        <label>Destination</label>
        <input type="text" placeholder="Enter destination" />

        <label>Duration (Days)</label>
        <input type="number" placeholder="e.g. 5" />

        <label>Budget</label>
        <select>
          <option>Budget</option>
          <option>Standard</option>
          <option>Luxury</option>
        </select>

        <label>Interests</label>
        <input
          type="text"
          placeholder="Nature, Beaches, Adventure..."
        />

        <button type="submit">
          Generate AI Trip
        </button>
      </form>
    </main>
  );
}

export default TravelForm;