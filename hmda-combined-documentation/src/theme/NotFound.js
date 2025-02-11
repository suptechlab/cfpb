import React, { useEffect, useState } from 'react'
import Translate, { translate } from '@docusaurus/Translate'
import { PageMetadata } from '@docusaurus/theme-common'
import Layout from '@theme/Layout'
import SearchBar from './SearchBar'

export default function NotFound() {
  const [urlLocation, setUrllocation] = useState()
  const [showNotFoundPage, setShowNotFoundPage] = useState(false)

  useEffect(() => {
    if (!window) return
    setUrllocation(window.location.pathname)

    if (window.location.pathname.includes('/documentation/')) {
      setShowNotFoundPage(true)
    }
  }, [])
  return (
    <>
      {showNotFoundPage ? (
        <>
          <PageMetadata
            title={translate({
              id: 'theme.NotFound.title',
              message: 'Page Not Found',
            })}
          />
          <Layout>
            <main className='container margin-vert--xl not-found'>
              <div className='row'>
                <div className='col col--6 col--offset-3'>
                  <h1 className='hero__title'>
                    <Translate
                      id='theme.NotFound.title'
                      description='The title of the 404 page'
                    >
                      Page Not Found
                    </Translate>
                  </h1>
                  <div>
                    <p style={{ fontWeight: 600 }}>
                      URL:{' '}
                      <span style={{ fontWeight: 500 }}>{urlLocation}</span>
                    </p>
                    <p>
                      The above url was not able to direct you to a specific
                      document.
                    </p>
                  </div>
                  <p>
                    <Translate
                      id='theme.NotFound.p1'
                      description='The first paragraph of the 404 page'
                    >
                      Please use the search bar below to search for the content
                      you were looking for.
                    </Translate>
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignContent: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    <SearchBar />
                  </div>
                </div>
              </div>
            </main>
          </Layout>
        </>
      ) : (
        ''
      )}
    </>
  )
}
