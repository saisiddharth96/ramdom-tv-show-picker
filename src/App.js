import React, { Component } from "react";
import "./App.css";

import Modal from "react-responsive-modal";

class App extends Component {
  state = {
    title: "",
    season: "",
    episode: "",
    open: false,
    chosenSeason: "",
    chosenEpisode: ""
  };

  handleNameChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleSeasonChange(event) {
    this.setState({
      season: event.target.value
    });
  }

  handleEpisodeChange(event) {
    this.setState({
      episode: event.target.value
    });
  }

  onOpenModal() {
    this.setState({ open: true });
  }

  onCloseModal() {
    this.setState({ open: false });
  }

  chooseSeason() {
    if (this.state.episode === "" || this.state.season === "") {
      alert("Please enter a value in Season and Episode");
    } else {
      const seasonNumber = this.state.season;
      const episodeNumber = this.state.episode;
      const min = 1;
      const SeasonResult =
        Math.floor(Math.random() * (seasonNumber - min + 1)) + min;
      const EpisodeResult =
        Math.floor(Math.random() * (episodeNumber - min + 1)) + min;
      this.setState({
        chosenSeason: SeasonResult,
        chosenEpisode: EpisodeResult,
        open: true
      });
    }
  }

  chooseEpisode() {
    const episodeNumber = this.state.episode;
    const min = 1;
    const result = Math.floor(Math.random() * (episodeNumber - min + 1)) + min;
    console.log(result);
    return result;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Random TV-Show Episode Picker</h1>
          <h2 className="App-subtitle">
            Confused on which episode to watch of your favourite TV show?
          </h2>
          <h2 className="App-subtitle">
            Wait no more, just enter the number of seasons and number of
            episodes per season down below and we'll help you figure out
          </h2>
        </header>

        <div className="App-intro">
          <h2 className="Input-Name">Enter the name of your TV show</h2>
          <input
            min="1"
            className="TV-Show-Input"
            type="text"
            name="tv-show-name"
            value={this.state.title}
            onChange={this.handleNameChange.bind(this)}
            placeholder="Ex:- F.R.I.E.N.D.S"
          />
        </div>
        <div className="App-intro">
          <h2 className="Input-Name">Enter The Total Number of Seasons</h2>
          <input
            min="1"
            className="TV-Show-Input"
            type="number"
            name="tv-show-name"
            value={this.state.season}
            onChange={this.handleSeasonChange.bind(this)}
            placeholder="Ex:- 10"
          />
        </div>
        <div className="App-intro">
          <h2 className="Input-Name">
            Enter The Number of Episodes per Season
          </h2>
          <input
            min="1"
            className="TV-Show-Input"
            type="Number"
            name="tv-show-name"
            value={this.state.episode}
            onChange={this.handleEpisodeChange.bind(this)}
            placeholder="Ex:- 25"
          />
        </div>
        <Modal
          open={this.state.open}
          onClose={this.onCloseModal.bind(this)}
          center
          showCloseIcon={false}
          classNames={{
            transitionEnter: "transition-enter",
            transitionEnterActive: "transition-enter-active"
          }}
        >
          <div className="modal-container-div">
            <p>
              Have fun watching Season <span>{this.state.chosenSeason}</span>{" "}
              and Episode <span>{this.state.chosenEpisode}</span>
            </p>
            <button
              className="modal-button"
              onClick={this.onCloseModal.bind(this)}
            >
              Sure
            </button>
          </div>
        </Modal>
        <button
          className="Calculate-Random-Show"
          onClick={this.chooseSeason.bind(this)}
        >
          Hit Me!
        </button>
      </div>
    );
  }
}

export default App;
