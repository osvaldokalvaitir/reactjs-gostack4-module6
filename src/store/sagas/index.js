import { all, takeLatest } from 'redux-saga/effects';

import { Types as FavoriteTypes } from '../ducks/favorites';
import { addFavorite } from './favorites';

/**
 * takeLatest -> se tiver várias requisições, ele cancela a que está acontecendo
 *               e vai pegar sempre a última requisição
 * takeEvery  -> se tiver várias requisições, ele faz todas em background
 */

export default function* rootSaga() {
  yield all([takeLatest(FavoriteTypes.ADD_REQUEST, addFavorite)]);
}
