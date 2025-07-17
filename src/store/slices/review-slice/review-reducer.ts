import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../constants';
import { State } from '../../../types/state';
import { Reviews } from '../../../types/models';

const reviews = (state: State) => state[NameSpace.Review].reviews;

export const getReviewsData = createSelector([reviews], (reviewsData: Reviews) => reviewsData);
