import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import { ICONS, AM_TITLE_BLUE, STARS_ORANGE, MOBILE_MAX_WIDTH } from '../../../layout/GlobalStyles';
import Icon from '../../../assets/icons/Icons';

const SEARCH_NAME_FILTER = 'searchName';
const STARS_FILTER = 'stars'
const MOBILE_FILTERS = 'mobileFilters';

const FilterBox = css`
  background-color: #FFF;
  margin-bottom: 5px;
  padding: 8px 15px;
`;

const FiltersContainer = styled.div`
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  border-radius: 2px;
`;
  
const CurrentFilters = styled.div`
  ${FilterBox};
  font-weight: bold;
  padding: 15px;

  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
    display: flex;
    justify-content: center;
    color: ${AM_TITLE_BLUE};
  }
`;

const FilterSection = styled.div`
  ${FilterBox};
  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
    &.hidden {
      display: none;
    }
  }
`;

const FilterTitle = styled.div`
  color: ${AM_TITLE_BLUE};
  cursor: pointer;
  padding: 10px 0;

  svg {
    margin-bottom: -7px;
  }
`;

const Arrow = styled.span`
  width: 0; 
  height: 0; 
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid ${AM_TITLE_BLUE};
  float: right;
  margin-top: 5px;
  
  &.mobileFilters {
    display:none;

    @media (max-width: ${MOBILE_MAX_WIDTH}px) {
      display: inline-block;
      margin-left: 10px;
    }
  }
`;

const NameFilterContent = styled.form`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding-bottom: 10px;
`;

const StarsFilterContent = styled.div`
  display: inline-flex;
  flex-direction: column-reverse;
  cursor: pointer;
`;

const SearchInput = styled.input`
  height: 34px;
  margin-right: 8px;
  flex: 1;
`;

const Button = styled.button`
  width: 30%;
  border-radius: 3px;
  border: 1px solid #013E7B;
  height: 35px;
`;

const StarsOption = styled.div`
  padding: 5px 0;
  label {
    cursor: pointer;

    span {
      vertical-align: sub;
    }
  }
  input {
    margin-right: 12px;
  }

  &.stars-all{
    font-size: 14px;
    input {
      margin-right: 8px;
    }
    span {
      vertical-align: middle;
    }
  }
`;

/**
 * @description Filters component.
 */
class Filters extends PureComponent {
  state = {
    searchNameValue: '',
    starsValue: [],
    searchNameCollapsed: false,
    starsCollapsed: false,
    mobileFiltersCollapsed: true
  }

  handleCheckboxToggle = (starsNumber) => {
    let value;
    if (!starsNumber) {
      value = [];
    } else {
      let indexInArray = this.state.starsValue.indexOf(starsNumber);
      value =  indexInArray === -1 ?
        [...this.state.starsValue, starsNumber] : 
        [...this.state.starsValue.filter((el, i) => i !== indexInArray)]; 
    }
    this.changeFilterValue(STARS_FILTER, value);
  }

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.changeFilterValue(SEARCH_NAME_FILTER, this.searchInput.value);
  }

  applyFilters = () => {
    this.props.callback(
      {
        ...this.state.starsValue.length && { stars: this.state.starsValue.join() },
        ...this.state.searchNameValue && { name: this.state.searchNameValue }
      }
    );
  }

  changeFilterValue = (filterType, filterValue) => {
    this.setState({
      [`${filterType}Value`]: filterValue
    }, () => {
      this.applyFilters();
    });
  }

  resetStarsFilter = (element) => {
    this.handleCheckboxToggle();
    [...Array(5)].forEach((e, index) => {
      index++;
      this.refs[`stars${index}`].checked = false;
    });
  }

  toggleCollapseDrawer = (filterType) => {
    let changingState = `${filterType}Collapsed`;
    this.setState({
      [`${changingState}`]: !this.state[changingState]
    })
  }

  render() {
    const starLabels = [...Array(5)].map((e, index) => {
      index++;
      return (
        <StarsOption key={index} >
          <input type="checkbox" id={`star-${index}`} ref={`stars${index}`} name={index} onClick={() => this.handleCheckboxToggle(index)}/>
          <label htmlFor={`star-${index}`}>  
            <span>
              {[...Array(index)].map((element, index) => <Icon key={index} icon={ICONS.STAR} color={STARS_ORANGE} size={24} />)}
            </span>
          </label>
        </StarsOption>
      )
    });

    return (
      <FiltersContainer>
        <CurrentFilters onClick={() => this.toggleCollapseDrawer(MOBILE_FILTERS)} >
          <span>Filtros</span>
          <Arrow className="mobileFilters" style={ this.state.mobileFiltersCollapsed ? { transform: 'rotate(180deg)' } : {} }/>
        </CurrentFilters>

        <FilterSection className={ this.state.mobileFiltersCollapsed ? 'hidden' : 'show' }>
          <FilterTitle onClick={() => this.toggleCollapseDrawer(SEARCH_NAME_FILTER)}>
            <Icon icon={ICONS.SEARCH} color={AM_TITLE_BLUE} size={30} />
            <span>Nombre de hotel</span>
            <Arrow style={ !this.state.searchNameCollapsed ? { transform: 'rotate(180deg)' } : {} }/>
          </FilterTitle>

          <NameFilterContent style={ this.state.searchNameCollapsed ? {display: 'none'} : {} } action="" onSubmit={this.handleSearchSubmit} >  
            <SearchInput className="almundoInput" type="text" innerRef={x => { this.searchInput = x }} placeholder="Ingrese el nombre del hotel"/>
            <Button className="almundoButton" type="submit">Aceptar</Button>
          </NameFilterContent>
        </FilterSection>

        <FilterSection className={ this.state.mobileFiltersCollapsed ? 'hidden' : 'show' }>
          <FilterTitle onClick={() => this.toggleCollapseDrawer(STARS_FILTER)}>
            <Icon icon={ICONS.STAR} color={AM_TITLE_BLUE} size={30} />
            <span>Estrellas</span>
            <Arrow style={ !this.state.starsCollapsed ? {transform: 'rotate(180deg)'} : {} }/>
          </FilterTitle>

          <StarsFilterContent style={ this.state.starsCollapsed ? {display: 'none'} : {} }>
            {starLabels}
            <StarsOption className="stars-all">
              <input checked={!this.state.starsValue.length} onChange={this.resetStarsFilter} type="checkbox" disabled={!this.state.starsValue.length} id="all" ref={`starsAll`} name="all" />
              <label htmlFor="all">  
                <span>
                  Todas las estrellas
                </span>
              </label>
            </StarsOption>
          </StarsFilterContent>
        </FilterSection>
      </FiltersContainer>
    );
  }
}

export default Filters;
