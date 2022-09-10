// Create the Dog class here

class dogClass {
  constructor(data) {
    Object.assign(this, data);
  }

  getHasBeenLikedHtml() {
    this.hasBeenLiked = true;
    return `<img src="images/badge-like.png">`;
  }

  getHasBeenSwipedHtml() {
    this.hasBeenSwiped = true;
    return `<img src="images/badge-nope.png">`;
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this;

    return `<div class="container">
                    <div class="header">
                        <img src="images/icon-profile.png">
                        <img src="images/logo.png">
                        <img src="images/icon-chat.png">
                    </div>
                    <div class="img-container">
                        <div id="img-like-nope" class="img-like-nope">
                        </div>
                        <div id="img">
                        </div>
                        <img class="img" src="${avatar}">
                            <div class="img-text">
                                <p class="img-text-name">${name}, ${age}</p>
                                <p>${bio}</p>
                            </div>    
                    </div>
                    <div id="btn" class="footer">
                        <button id="btn-cross"><img src="images/icon-cross.png"></button>
                        <button id="btn-heart"><img src="images/icon-heart.png"></button>
                    </div>
                 </div>`;
  }
}

export default dogClass;
