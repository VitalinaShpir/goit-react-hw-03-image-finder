import { getImagesAPI } from 'services/getImage';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images: [],
    value: '',
  };

  async componentDidUpdate(_, prevState) {
    const { value, images, page } = this.state;
    if (
      (prevState.value !== value && value !== '') ||
      prevState.page !== page
    ) {
      try {
        const {
          data: { hits },
        } = await getImagesAPI({ value, page });
      } catch (error) {}
    }
  }

  // getImages = async () =>{
  //   const {textSearch, currentPage} = this.state;

  //   try{
  //     this.state({isLoading: true});

  //     const data = await getImagesAPI(
  //       textSearch,
  //       currentPage,
  //     )
  //   }
  //   catch(error){
  //   }
  // }

  handleSearchSubmit = value => this.setState({ value, images: [], page: 1 });

  render() {
    // console.log(this.state)
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}
