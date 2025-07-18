import { createSelector } from '@reduxjs/toolkit';
import { AuthStatus } from '../../../types/models';
import { NameSpace } from '../../../constants';
import { State } from '../../../types/state';

const currentAuth = (state: Pick<State, NameSpace.Auth>) => state[NameSpace.Auth].authStatus;

export const getCurrentAuth = createSelector([currentAuth], (auth : AuthStatus) => auth);
