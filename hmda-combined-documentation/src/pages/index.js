import React from 'react';
import { Redirect } from '@docusaurus/router'

import '@docsearch/css'

// Redirects users from the base route '/'
export default function Home() {

  return (
    <>
      <Redirect to='/documentation/category/frequently-asked-questions' />
    </>
  )
}
