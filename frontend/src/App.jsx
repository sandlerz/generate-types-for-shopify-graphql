import { Button } from './components/Button'
import ellipse from './assets/ellipse.png'
import substrap from './assets/substrap.png'
import { useState } from 'react'
import { Code } from './components/Code'
import { getData } from './utils/getData'

function App() {
  const [inputs, setInputs] = useState({
    url: '',
    token: '',
  })
  const [codeData, setCodeData] = useState(null)
  const [file, setFile] = useState(null)

  const handleOnChange = (value, state) =>
    setInputs(prev => ({
      ...prev,
      [state]: value,
    }))

  const handleData = ({ fileUrl, text }) => {
    setCodeData(text)
    setFile(fileUrl)
  }

  return (
    <>
      <main className="flex flex-col items-center py-14 px-4 min-h-screen max-w-[1440px] w-full mx-auto">
        <span className="font-semibold text-3xl text-center mx-auto mb-4">
          Storefront API
        </span>

        <Button
          href="https://shopify.dev/docs/api/storefront"
          className="mb-8 w-24"
          type="anchor"
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

        <Button
          onClick={() =>
            getData({
              callBack: handleData,
              data: {
                access_token: inputs.token,
                url: inputs.url,
              },
            })
          }
          className="mb-6"
          type="button"
        >
          Generate {codeData && 'New'} Types
        </Button>

        <Code codeData={codeData} file={file} />
      </main>

      <img src={ellipse} className="max-w-xl absolute -z-10 top-48 -left-28" />
      <img src={ellipse} className="max-w-xl absolute -z-10  top-5 -right-28" />
      <img src={substrap} className="absolute top-[50vh] w-full -z-20" />
    </>
  )
}

export default App
