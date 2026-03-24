import { useEffect, useState } from "react";

function App() {

  const [user, setUser] = useState([]);
  const [city, setCity] = useState("");
  const [rating, setRating] = useState("");

  // FETCH DATA WHEN FILTER CHANGES
  useEffect(() => {

  const timer = setTimeout(() => {

    let url = "http://localhost:5000/api/users?";

    if (city) {
      url += `city=${city}&`;
    }

    if (rating) {
      url += `rating=${rating}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.log(err));

  }, 500); // ⏳ delay

  return () => clearTimeout(timer); // 🧹 cleanup

}, [city, rating]); // 🔥 runs whenever city or rating changes

  return (
    <div>
      <h1>User List</h1>

      {/* FILTER INPUTS */}
      <input
        type="text"
        placeholder="Search city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <input
        type="number"
        placeholder="Search rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      {/* USER LIST */}
      <ul>
        {user.map(u => (
          <li key={u._id}>
            {u.name} - {u.city} - {u.rating}
          </li>
        ))}
      </ul>

    </div>
  );

}

export default App;