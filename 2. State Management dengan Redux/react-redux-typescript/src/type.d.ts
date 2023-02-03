interface IArticle {
  id: number
  title: string
  body: string
}

interface State {
  articles: ArticleState
}

interface ArticleState {
  articles: IArticle[]
}

interface ArticleAction {
  type: string
  article: IArticle
}

type DispatchType = (args: ArticleAction) => ArticleAction
