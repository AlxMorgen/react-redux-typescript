import * as UserActionCreator from "./user"
import * as TodoActionCreator from "./todo"
const actions = {
    ...TodoActionCreator,
    ...UserActionCreator,
}

export default actions