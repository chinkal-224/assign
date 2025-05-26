import React from 'react';
import FriendsCard from './FriendsCard'; // ✅ Import your component
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Import Bootstrap

// ✅ Create the data array
const friendsData = [
  {
    name: "Alice",
    image: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg",
    hobby: "Painting",
    quote: "Every artist was first an amateur.",
    contact: "alice@example.com"
  },
  {
    name: "Bob",
    image: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg",
    hobby: "Gaming",
    quote: "Game on!",
    contact: "bob@example.com"
  },
  {
    name: "Charlie",
    image: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg",
    hobby: "Hiking",
    quote: "The best view comes after the hardest climb.",
    contact: "charlie@example.com"
  }
];

// ✅ Main App Component
function App() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Friends</h2>
      <div className="row">
        {friendsData.map((friend, index) => (
          <FriendsCard
            key={index}
            name={friend.name}
            image={friend.image}
            hobby={friend.hobby}
            quote={friend.quote}
            contact={friend.contact}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

