import { createReducer } from '@reduxjs/toolkit'

const initialState = {
    get: {},
    getById: {},
    getByUserId: {},
    post: {},
    put: {},
    delete: {}
}

const recipeReducer = createReducer(initialState, (builder) => {
    builder
        .addMatcher(
            (action) => action.type.endsWith('recipe/pending'),
            (state, action) => {
                const type = action.type.split('/')

                state[type[0]] = {
                    isPending: true
                }
            }
        )
        .addMatcher(
            (action) => action.type.endsWith('recipe/rejected'),
            (state, action) => {
                const type = action.type.split('/')

                state[type[0]] = {
                    isRejected: true,
                    statusCode: action.payload?.response?.data?.status,
                    errorMessage: action.payload?.response?.data?.data?.message || action.payload?.message
                }
            }
        )
        .addMatcher(
            (action) => action.type.endsWith('recipe/fulfilled'),
            (state, action) => {
                const type = action.type.split('/')
                let data = {
                    isFulfilled: true,
                    response: action.payload?.data?.data
                }

                data = action.type.startsWith('get/recipe') ? {
                    ...data,
                    pagination: action.payload?.data?.pagination
                } : data

                state[type[0]] = data
                console.log(data)
            }
        )
})

export default recipeReducer
