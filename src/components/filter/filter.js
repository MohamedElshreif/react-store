import React from 'react';
import { FilterWrapper } from './Styled';
import { BsSearch } from 'react-icons/bs';

function Filter() {
  return (
    <FilterWrapper className='col-12 col-md-3'>
      <div className='filter_content'>
        <div className='filter__search'>
          <form>
            <input type='search' placeholder='search' />
            <button>
              <BsSearch />
            </button>
          </form>
        </div>
        <div className='filter__Categories my-4'>
          <h4>Categories</h4>
          <form className='pt-4'>
            <ul>
              <li>
                <div className='input_filter'>
                  <div className='input-wrapper'>
                    <input
                      className='input'
                      type='checkbox'
                      id='Antirrhinum-majus'
                    />
                    <label
                      className='input-label'
                      htmlFor='Antirrhinum-majus'
                    ></label>
                    <label htmlFor='Antirrhinum-majus'>Asclepias syriaca</label>
                  </div>
                </div>
              </li>
              <li>
                <div className='input_filter'>
                  <div className='input-wrapper'>
                    <input className='input' type='checkbox' id='Aquilegia' />
                    <label className='input-label' htmlFor='Aquilegia'></label>
                    <label htmlFor='Aquilegia'>Aquilegia</label>
                  </div>
                </div>
              </li>
              <li>
                <div className='input_filter'>
                  <div className='input-wrapper'>
                    <input
                      className='input'
                      type='checkbox'
                      id='All-Categories'
                    />
                    <label
                      className='input-label'
                      htmlFor='All-Categories'
                    ></label>
                    <label htmlFor='All-Categories'>All Categories</label>
                  </div>
                </div>
              </li>
              <li>
                <div className='input_filter'>
                  <div className='input-wrapper'>
                    <input className='input' type='checkbox' id='Billbergias' />
                    <label
                      className='input-label'
                      htmlFor='Billbergias'
                    ></label>
                    <label htmlFor='Billbergias'>Billbergia</label>
                  </div>
                </div>
              </li>
              <li>
                <div className='input_filter'>
                  <div className='input-wrapper'>
                    <input
                      className='input'
                      type='checkbox'
                      id='Bleeding-Heart'
                    />
                    <label
                      className='input-label'
                      htmlFor='Bleeding-Heart'
                    ></label>
                    <label htmlFor='Bleeding-Heart'>Bleeding Heart</label>
                  </div>
                </div>
              </li>
              <li>
                <div className='input_filter'>
                  <div className='input-wrapper'>
                    <input
                      className='input'
                      type='checkbox'
                      id='Babys-Breath'
                    />
                    <label
                      className='input-label'
                      htmlFor='Babys-Breath'
                    ></label>
                    <label htmlFor='Babys-Breath'>Baby's Breath</label>
                  </div>
                </div>
              </li>
              <li>
                <div className='input_filter'>
                  <div className='input-wrapper'>
                    <input
                      className='input'
                      type='checkbox'
                      id='Campanula-latifolia'
                    />
                    <label
                      className='input-label'
                      htmlFor='Campanula-latifolia'
                    ></label>
                    <label htmlFor='Campanula-latifolia'>
                      Campanula latifolia
                    </label>
                  </div>
                </div>
              </li>
              <li>
                <div className='input_filter'>
                  <div className='input-wrapper'>
                    <input
                      className='input'
                      type='checkbox'
                      id='California-Poppys'
                    />
                    <label
                      className='input-label'
                      htmlFor='California-Poppys'
                    ></label>
                    <label htmlFor='California-Poppys'>California Poppy</label>
                  </div>
                </div>
              </li>
              <li>
                <div className='input_filter'>
                  <div className='input-wrapper'>
                    <input
                      className='input'
                      type='checkbox'
                      id='Bee-Balm-Flower'
                    />
                    <label
                      className='input-label'
                      htmlFor='Bee-Balm-Flower'
                    ></label>
                    <label htmlFor='Bee-Balm-Flower'>Bee Balm Flower</label>
                  </div>
                </div>
              </li>
              <li>
                <div className='input_filter'>
                  <div className='input-wrapper'>
                    <input
                      className='input'
                      type='checkbox'
                      id='Bachelor-Button'
                    />
                    <label
                      className='input-label'
                      htmlFor='Bachelor-Button'
                    ></label>
                    <label htmlFor='Bachelor-Button'>Bachelor's Button</label>
                  </div>
                </div>
              </li>
              <li>
                <div className='input_filter'>
                  <div className='input-wrapper'>
                    <input
                      className='input'
                      type='checkbox'
                      id='Campanula-latifolias'
                    />
                    <label
                      className='input-label'
                      htmlFor='Campanula-latifolias'
                    ></label>
                    <label htmlFor='Campanula-latifolias'>
                      Campanula latifolia
                    </label>
                  </div>
                </div>
              </li>
              <li>
                <div className='input_filter'>
                  <div className='input-wrapper'>
                    <input
                      className='input'
                      type='checkbox'
                      id='California-Poppy'
                    />
                    <label
                      className='input-label'
                      htmlFor='California-Poppy'
                    ></label>
                    <label htmlFor='California-Poppy'>California Poppy</label>
                  </div>
                </div>
              </li>
              <li>
                <div className='input_filter'>
                  <div className='input-wrapper'>
                    <input
                      className='input'
                      type='checkbox'
                      id='Bee-Balms-Flower'
                    />
                    <label
                      className='input-label'
                      htmlFor='Bee-Balms-Flower'
                    ></label>
                    <label htmlFor='Bee-Balms-Flower'>Bee Balms Flower</label>
                  </div>
                </div>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </FilterWrapper>
  );
}

export default Filter;
