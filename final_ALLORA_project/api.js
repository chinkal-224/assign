const BASE_URL = "http://localhost:5000"; // Replace with your backend URL

// ---------- AUTH ----------
export const loginUser = async (credentials) => {
  try {
    const res = await fetch(`${BASE_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    return await res.json();
  } catch (err) {
    console.error("Login error:", err);
    return { error: "Server error" };
  }
};

export const signupUser = async (newUser) => {
  try {
    const res = await fetch(`${BASE_URL}/api/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    return await res.json();
  } catch (err) {
    console.error("Signup error:", err);
    return { error: "Server error" };
  }
};

// ---------- JOURNAL ENTRIES ----------
export const saveEntry = async (entryData, token) => {
  try {
    const res = await fetch(`${BASE_URL}/api/entries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(entryData),
    });
    return await res.json();
  } catch (err) {
    console.error("Save entry error:", err);
    return { error: "Server error" };
  }
};

export const getEntries = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/api/entries`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return await res.json();
  } catch (err) {
    console.error("Get entries error:", err);
    return [];
  }
};

export const updateEntry = async (id, updatedData, token) => {
  try {
    const res = await fetch(`${BASE_URL}/api/entries/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    });
    return await res.json();
  } catch (err) {
    console.error("Update error:", err);
    return { error: "Server error" };
  }
};

export const deleteEntry = async (id, token) => {
  try {
    const res = await fetch(`${BASE_URL}/api/entries/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    return await res.json();
  } catch (err) {
    console.error("Delete error:", err);
    return { error: "Server error" };
  }
};
