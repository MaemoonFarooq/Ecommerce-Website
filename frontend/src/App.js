// App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './shared/components/Navigation/mainnavbar';
import Home from './pages/home';
import Services from './pages/services';
import Cart from './pages/cart'; // Correct import name
import Contact from './pages/contact';
import About from './pages/about';
import SecondNavbar from './shared/components/Navigation/secondnavbar';
import { CartProvider } from './pages/cartcontext';
import Login from './pages/login';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  // Function to handle login
  const handleLogin = () => {
    // Perform login logic here
    setIsLoggedIn(true);
  };
  return (
    <div className="app-container">
      <Router>
        <div className="App">
          <header className="App-header">
            {/* Conditional rendering for the navbar based on login status */}
            {isLoggedIn ? (
              <>
                <SecondNavbar />
                <Navbar />
              </>
            ) : null}
          </header>
          <main>
            <Switch>
              <Route path="/login" exact>
                {/* Pass the handleLogin function to the Login component */}
                <Login onLogin={handleLogin} />
              </Route>
              {/* Protected routes, accessible only when logged in */}
              <CartProvider>
                {isLoggedIn ? (
                  <>
                    <Route path="/" exact component={Home} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/about" exact component={About} />
                    <Route path="/services" exact component={Services} />
                    <Route path="/contact" exact component={Contact} />
                  </>
                ) : (
                  // Redirect to login page if not logged in
                  <Redirect to="/login" />
                )}
              </CartProvider>
            </Switch>
          </main>
          <footer>{/* Your footer */}</footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
