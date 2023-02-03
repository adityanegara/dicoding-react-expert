import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { type Dispatch } from 'redux'
import { addArticle, removeArticle } from './store/actionCreator'
import { AddArticle } from './components/AddArticle'
import { Article } from './components/Article'
import './styles.css'

const App: React.FC = () => {
  const { articles } = useSelector((state: State) => state.articles)

  const dispatch: Dispatch = useDispatch()

  const saveArticle = useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  )

  return (
    <main>
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
    </main>
  )
}

export default App
