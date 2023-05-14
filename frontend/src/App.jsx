import { Button } from './components/Button'
import ellipse from './assets/ellipse.png'
import substrap from './assets/substrap.png'
import { useState } from 'react'
import { Code } from './components/Code'

function App() {
  const [inputs, setInputs] = useState({
    url: '',
    token: '',
  })

  const handleOnChange = (value, state) =>
    setInputs(prev => ({
      ...prev,
      [state]: value,
    }))

  return (
    <>
      <main className="flex flex-col items-center py-14 pl-2 min-h-screen max-w-[1440px] w-full">
        <span className="font-semibold text-3xl text-center mx-auto mb-4">
          Storefront API
        </span>

        <Button
          href="https://shopify.dev/docs/api/storefront"
          className="mb-8 w-24"
        >
          Docs
        </Button>

        <h1 className="font-semibold text-6xl text-center mb-7 leading-[70px]">
          Generate types for you Shopify
          <br /> SraphQL Proyect
        </h1>

        <input
          className="text-white max-w-md w-full h-11 bg-aswad-black mx-auto mb-6 rounded-md pl-7"
          type="text"
          onChange={e => handleOnChange(e.target.value, 'url')}
          value={inputs.url}
          placeholder="Shopify store URL"
        />

        <input
          className="text-white max-w-md w-full h-11 bg-aswad-black mx-auto rounded-md mb-6 pl-7"
          type="text"
          onChange={e => handleOnChange(e.target.value, 'token')}
          value={inputs.token}
          placeholder="Access Token"
        />

        <Button onClick={() => {}} className="mb-6">
          Generate Types
        </Button>

        <Code codeData={"console.log('hello world')"} />
      </main>

      <img src={ellipse} className="max-w-xl absolute -z-10 top-48 -left-28" />
      <img src={ellipse} className="max-w-xl absolute -z-10  top-5 -right-28" />
      <img src={substrap} className="absolute top-[50vh] w-full -z-20" />
    </>
  )
}

export default App
