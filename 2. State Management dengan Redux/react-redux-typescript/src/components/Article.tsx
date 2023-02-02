/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import React from 'react'
import { type Dispatch } from 'redux'
import { useDispatch } from 'react-redux'

interface Props {
  article: IArticle
  removeArticle: (article: IArticle) => void
}

export const Article: React.FC<Props> = ({ article, removeArticle }) => {
  const dispatch: Dispatch<any> = useDispatch()

  return (
    <div className="Article">
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </div>
      <button onClick={() => { dispatch(removeArticle(article)) }}>Delete</button>
    </div>
  )
}
