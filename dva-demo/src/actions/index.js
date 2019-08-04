import { createAction } from 'redux-actions';

export const productUpdateList = createAction("product/updateList");
export const productUpdateListAsync = createAction("product/updateListAsync");
export const productUpdateListHttp = createAction("product/updateListHttp");

