import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    image: []
  };

  render() {
    const {
      image: { webformatURL, largeImageURL, tags },
    } = this.props;

    return(
        <li>
            <img src={webformatURL} alt={tags} />
        </li>
    )
  }
}

 