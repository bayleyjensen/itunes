export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "100x100");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get Template() {
    return /*html*/ `
    <div class="card" style="">
  <img src=${this.albumArt} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${this.title}</h5>
    <p class="card-text">${this.artist}</p>
    <p class="card-text">${this.album}</p>
    <audio controls>
        <source src="${this.preview}">
      </audio>
      <button class="btn btn-success" type="button" onclick="app.songsController.addSong()">Add</button>
  </div>
  </div>
        `;
  }

  get playlistTemplate() {
    return `

        `;
  }
}
