import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: 'Chat GPT Prompts',
    description: 'Descrube y Comparte Prompts de Chat GPT'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='es'>
        <body>
            <Provider>
              <div className='main'>
                  <div className='gradient' />
              </div>
  
              <main className='app'>
                  <Nav />
                  {children}
              </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout