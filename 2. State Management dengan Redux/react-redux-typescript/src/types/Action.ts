export interface Action<T> {
  type: string
  payload: T
}

export interface TodoAction {
  id: string
  text?: string
}

export interface GoalAction {
  id: string
  text?: string
}
