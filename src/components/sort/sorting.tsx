import classnames from 'classnames';
import { SORT_TYPES } from '../../constants';
import { useAppSelector } from '../../hooks';
import { getCurrentSort } from '../../store/reducer';
import SortingTypes from './sort-types';
import { useState } from 'react';

export default function Sorting() {
  const currentSort = useAppSelector(getCurrentSort);
  const [isOpened, setIsOpened] = useState(false);
  const handleClick = () => {
    setIsOpened((prevState) => !prevState);
  };

  return (
    <form className="places__sorting" action="#" method="get" onClick={handleClick}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classnames('places__options places__options--custom', {'places__options--opened': isOpened})}>
        {SORT_TYPES.map((sorting) => <SortingTypes sort={sorting} key={sorting}/>)}
      </ul>
    </form>
  );
}
