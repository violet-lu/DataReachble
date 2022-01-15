import { createSelector } from "reselect"

export const getText = (state) => state.text

const getTask = state => state.task.data

const getBorderColor = state => state.task.bordeCrolor

