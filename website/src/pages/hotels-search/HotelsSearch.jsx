import React, { Component } from 'react';
import styled from 'styled-components';
import HotelCard from './components/HotelCard';
import Filters from './components/Filters';
import { GetHotels } from '../../services/HotelServices';
import { DESKTOP_CONTENT_MAX_WIDTH, MOBILE_MAX_WIDTH } from '../../layout/GlobalStyles';

const HotelsSearchContainer = styled.div`
  margin: auto;
  max-width: ${DESKTOP_CONTENT_MAX_WIDTH};
  display: flex;
  padding: 15px;

  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
    flex-direction: column;
  }
`;

const HotelsResultsContainer = styled.main`
  width: 75%;
  flex: 1;
  padding: 15px 0 15px 15px;

  ul, li {
    width: 100%;
    list-style: none;
  }

  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
  width: 100%;
  padding: 0;
  }
`;

const FiltersContainer = styled.aside`
  width: 25%;
  padding: 15px 0 15px 15px;

  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
    width: auto;
    padding: 0;
  }
`;

/**
 * @description HotelsSearch Page
 */
class HotelsSearch extends Component {
  state = {
    results: [],
    dataLoaded: false
  };

  getHotels = (selectedFilters) => {
    if (!this.state.dataLoaded) {
      this.setState({ dataLoaded: false })
    }
    GetHotels(selectedFilters)
      .then((response) => this.setState({ dataLoaded: true, results: response.data }))
      .catch((error) => {
          console.log(error);
      });
  }

  renderResults = () => {
    return this.state.results.map((hotelProps, index) => {
      return (
        <li key={index}>
            <HotelCard {...hotelProps}/>
        </li>
      );
    })
  }

  componentDidMount() {
    this.getHotels();
  }

  render() {
    return (
      <HotelsSearchContainer>
        <FiltersContainer>
          <Filters callback={this.getHotels} location={this.props.location} />
        </FiltersContainer>
        <HotelsResultsContainer>
            <ul>
              {this.state.dataLoaded && this.renderResults()}  
            </ul>     
        </HotelsResultsContainer>
       </HotelsSearchContainer>
    );
  }
}

export default HotelsSearch;
