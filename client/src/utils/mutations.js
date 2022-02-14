import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            user {
                _id
                username
            }
        }
    }
`

export const ADD_USER = gpl`
    mutation addUser($username: String!, $email: String!){
        login(email: $email, password: $password){
            token
            user {
                _id
                username
            }
        }
    }
`

export const SAVE_BOOK = gpl`
    mutation saveBook($authors: [String]!, $desciption: String!, $bookId: String!, $image: String!, $link: String!){
        saveBook(authors: $authors, description: $description, bookId: $bookId, image: $image, link: $link){
            _id
            username
            email
            password
            savedBooks
        }
    }
`

export const REMOVE_BOOK = gpl`
    mutation removeBook($bookId: String!){
        removeBook(bookId: $bookId){
            _id
            username
            email
            password
            savedBooks
        }
    }
`