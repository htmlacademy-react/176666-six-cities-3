import {AuthorizationStatus} from './constants';
import { Result } from './types';

export const authorization = (auth: AuthorizationStatus, trueResult: Result, falseResult: Result) => auth === AuthorizationStatus.Auth ? trueResult : falseResult;
