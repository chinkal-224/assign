// src/pages/Explore.js
import React, { useEffect, useState, useCallback } from "react";
import "./Explore.css";
import { useAuth } from "../context/AuthContext";

const moods = [
  {
    name: "Happy",
    emoji: "😊",
    songs: [
      { name: "Sunshine Vibes", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
      { name: "Upbeat Mood", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
      { name: "Joyful Beats", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
    ]
  },
  {
    name: "Sad",
    emoji: "😢",
    songs: [
      { name: "Blue Rain", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
      { name: "Lonely Notes", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
      { name: "Tears in Sound", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" }
    ]
  },
  {
    name: "Excited",
    emoji: "🤩",
    songs: [
      { name: "High Energy", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
      { name: "Jumpstart", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
      { name: "Pumped Up", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" }
    ]
  },
  {
    name: "Angry",
    emoji: "😠",
    songs: [
      { name: "Rage Anthem", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
      { name: "Thunder Beats", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
      { name: "Break It Down", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" }
    ]
  },
  {
    name: "Loved",
    emoji: "😍",
    songs: [
      { name: "Heartstrings", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
      { name: "Romantic Vibes", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
      { name: "Slow Love", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" }
    ]
  },
  {
    name: "Anxious",
    emoji: "😰",
    songs: [
      { name: "Calm Waves", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
      { name: "Mind Ease", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3" },
      { name: "Breathing In", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-18.mp3" }
    ]
  },
];

const Explore = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [journalEntry, setJournalEntry] = useState("");
  const [entries, setEntries] = useState([]);
  const [editingEntryId, setEditingEntryId] = useState(null);
  const { user, token } = useAuth();

  const fetchEntries = useCallback(async () => {
    if (!user?.id) return;
    try {
      const res = await fetch(`http://localhost:5000/api/journal/${user.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setEntries(data);
    } catch (err) {
      console.error("Fetch failed:", err);
    }
  }, [user, token]);

  useEffect(() => {
    fetchEntries();
  }, [fetchEntries]);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setJournalEntry("");
    setEditingEntryId(null);
  };

  const handleDropdownSelect = (e) => {
    const mood = moods.find((m) => m.name === e.target.value);
    handleMoodSelect(mood);
  };

  const saveEntry = async () => {
    if (!selectedMood || !journalEntry.trim()) return;

    const payload = {
      userId: user.id,
      mood: selectedMood.name,
      thought: journalEntry,
    };

    const isUpdate = editingEntryId?.length === 24;
    const url = isUpdate
      ? `http://localhost:5000/api/journal/${editingEntryId}`
      : "http://localhost:5000/api/journal/add";
    const method = isUpdate ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(isUpdate ? "Update failed" : "Save failed");

      alert(isUpdate ? "Entry updated!" : "Entry saved!");
      setJournalEntry("");
      setEditingEntryId(null);
      fetchEntries();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleEdit = (entry) => {
    const moodObj = moods.find((m) => m.name === entry.mood);
    setSelectedMood(moodObj);
    setJournalEntry(entry.thought);
    setEditingEntryId(entry._id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this entry?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/journal/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Delete failed");
      alert("Deleted!");
      fetchEntries();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="explore-page">
      {/* Left Section */}
      <div className="explore-left">
        <h2 className="glow">Feelin' Fab? Feelin' Meh?</h2>
        <p>SELF CARE MEANS SOUL CARE ~</p>

        <label htmlFor="mood-select">select your mood</label>
        <select id="mood-select" onChange={handleDropdownSelect} value={selectedMood?.name || ""}>
          <option value="" disabled>Select Mood</option>
          {moods.map((m, i) => (
            <option key={i} value={m.name}>{m.name}</option>
          ))}
        </select>

        {!selectedMood ? (
          <div className="mood-orbit-container">
            <div className="orbit-circle">
              <div className="center-circle">mood?</div>
              {moods.map((mood, i) => (
                <div
                  key={i}
                  className={`orbit-emoji orbit-${i}`}
                  onClick={() => handleMoodSelect(mood)}
                >
                  {mood.emoji}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="selected-mood">
            <h3>You're feeling {selectedMood.name}</h3>
            <div className="big-emoji">{selectedMood.emoji}</div>

            {/* Mood Music Moved Here */}
            <div className="mood-music-section">
              <h4 className="glow">Your Mood, Your Vibe 🎶</h4>
              <div className="song-list">
                <h5>{selectedMood.name} Songs</h5>
                {selectedMood.songs.map((song, index) => (
                  <div key={index} className="song-item">
                    <p>{song.name}</p>
                    <audio controls>
                      <source src={song.url} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="explore-right">
        <h3>Write about your thoughts</h3>
        <textarea
          placeholder="how you feelin'..."
          value={journalEntry}
          onChange={(e) => setJournalEntry(e.target.value)}
        />
        <button onClick={saveEntry}>
          {editingEntryId ? "Update Entry" : "Save Entry"}
        </button>

        {/* Entry List */}
        <div className="entry-list">
          {entries.map((entry) => (
            <div key={entry._id} className="entry-item">
              <p><strong>{entry.mood}</strong></p>
              <p>{entry.thought}</p>
              <p>{new Date(entry.timestamp).toLocaleString()}</p>
              <div className="entry-actions">
                <button onClick={() => handleEdit(entry)} style={{ backgroundColor: "#ffc107" }}>Edit</button>
                <button onClick={() => handleDelete(entry._id)} style={{ backgroundColor: "#ff4d4d" }}>Delete</button>
              </div>
            </div>
          ))}
        </div>

        {/* Mood Chart */}
        <div className="mood-chart-section">
          <h4 className="glow">Mood Chart 📈</h4>
          <div className="mood-bars">
            {moods.map((mood, index) => {
              const count = entries.filter((e) => e.mood === mood.name).length;
              return (
                <div key={index} className="mood-bar-item">
                  <span className="emoji-label">{mood.emoji}</span>
                  <div
                    className="mood-bar"
                    style={{
                      height: `${count * 20}px`,
                      backgroundColor: "#57f287",
                      transition: "height 0.5s ease",
                    }}
                    title={`${mood.name}: ${count}`}
                  ></div>
                  <span className="mood-count">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
