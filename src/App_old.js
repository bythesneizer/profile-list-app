import React from "react";
import Profiles from "./components/Profiles/Profiles.js";
import "./App.css";
import Api from "./utils/Api.js";

class App extends React.Component {
  state = {
    profiles: [],
    error: null,
    isLoaded: false
  };

  componentDidMount() {
    // this.getProfiles();
    Api.get("?results=10").then(
      result => {
        console.log(result.data.results);
        this.setState({
          isLoaded: true,
          profiles: result.data.results
        });
      },
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }

  // getProfiles = async () => {
  //   let response = await Axios.get("https://randomuser.me/api/?results=3");
  //   let { data } = response.data;
  //   this.setState({
  //     profiles: data
  //   });
  //   console.log(this.state.profiles);
  // };

  render() {
    const { error, isLoaded, profiles } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <Profiles profiles={profiles} />
        </div>
      );
    }
  }
}

export default App;
