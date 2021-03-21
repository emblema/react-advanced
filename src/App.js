import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import CartContext from "./context/cartContext";
import Login from "./context/Login";
import Users from "./hooks/Users";

class App extends Component {
  handleLoggedIn = (username) => {
    console.log("Getting the user: " + username);
    const user = { name: "Mosh" };
    this.setState({ currentUser: user });
  };

  state = { currentUser: null };

  render() {
    return (
      <Users />
      // <CartContext.Provider value={{ cart: [] }}>
      //   <UserContext.Provider
      //     value={{
      //       currentUser: this.state.currentUser,
      //       onLoggedIn: this.handleLoggedIn
      //     }}
      //   >
      //     <div>
      //       <MoviePage />
      //       <Login />
      //     </div>
      //   </UserContext.Provider>
      // </CartContext.Provider>
    );
  }
}

export default App;
