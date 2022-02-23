
import React from 'react';
import Unsplash from './api/unsplash';
import Searchbar from './components/searchbar/searchbar';
import Imagelist from './components/imagelist/imagelist';

class App extends React.Component {

  state = {
    images: [],
  }

  onSearchSubmit = async (term) => {

    const result = await Unsplash.get('/search/photos', {
      params: { query: term, per_page: 50 },
    });

    this.setState({ images: result.data.results })
    console.log(this.state.images);
  }

  render() {
    return (
      <div className='ui center aligned container ' style={{ marginTop: '1rem' }}>
        <Searchbar onSubmit={this.onSearchSubmit} imageNumber={this.state.images.length} />
        <Imagelist Images={this.state.images} />
      </div >
    )
  }
};

export default App;

