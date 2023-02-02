import * as actionTypes from './actionTypes'

export function addArticle (article: IArticle): ArticleAction {
  return {
    type: actionTypes.ADD_ARTICLE,
    article
  }
}

export function removeArticle (article: IArticle): ArticleAction {
  return {
    type: actionTypes.REMOVE_ARTICLE,
    article
  }
}
