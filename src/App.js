import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Hero from './components/Hero/Hero';
import ServicesSection from './components/Services/ServicesSection';
import PricingTable from './components/Pricing/PricingTable';
import ContactForm from './components/Contact/ContactForm';
import UserList from './components/UserData/UserList';
import Footer from './components/Layout/Footer';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchUsers } from './utils/api';

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setIsLoading(true);
        const userData = await fetchUsers();
        setUsers(userData);
        setFilteredUsers(userData);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch users');
        setIsLoading(false);
      }
    };

    loadUsers();
  }, []);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredUsers(users);
      return;
    }
    
    const filtered = users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <PricingTable />
        <section className="user-section">
          <div className="container">
            <h2>Our Users</h2>
            <SearchBar onSearch={handleSearch} />
            {isLoading ? (
              <div className="loading">Loading users...</div>
            ) : error ? (
              <div className="error">{error}</div>
            ) : (
              <UserList users={filteredUsers} />
            )}
          </div>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;