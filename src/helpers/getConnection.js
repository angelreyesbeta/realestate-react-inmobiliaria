import Prismic from 'prismic-javascript'

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
export const apiEndpoint = 'https://horizonte2020.cdn.prismic.io/api/v2'

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
const accessToken = ''

// Client method to query documents from the Prismic repo
export const client = Prismic.client(apiEndpoint, { accessToken })
