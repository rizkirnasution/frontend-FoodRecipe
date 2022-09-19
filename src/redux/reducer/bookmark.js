import { createReducer } from '@reduxjs/toolkit'

const initialState = {
    get: {},
    getByUserId: {},
    post: {},
    delete: {}
}

const bookmarkReducer = createReducer(initialState, (builder) => {
    builder
        .addMatcher(
            (action) => action.type.endsWith('bookmark/pending'),
            (state, action) => {
                const type = action.type.split('/')

                state[type[0]] = {
                    isPending: true
                }
            }
        )
        .addMatcher(
            (action) => action.type.endsWith('bookmark/rejected'),
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
            (action) => action.type.endsWith('bookmark/fulfilled'),
            (state, action) => {
                const type = action.type.split('/')
                let data = {
                    isFulfilled: true,
                    response: action.payload?.data?.data
                }

                data = action.type.startsWith('get/bookmark') ? {
                    ...data,
                    pagination: action.payload?.data?.pagination
                } : data

                state[type[0]] = data
            }
        )
})

export default bookmarkReducer
