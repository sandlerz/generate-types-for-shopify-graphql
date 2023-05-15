import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useEffect, useState } from 'react'
import copyIcon from '../assets/copy.png'
import { Button } from './Button'

export const Code = ({ codeData = '', file }) => {
  const [showCopy, setShowCopy] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowCopy(false)
    }, 600)
  }, [showCopy])

  const handleCopyClick = () => {
    navigator.clipboard.writeText(codeData)
    setShowCopy(true)
  }

  return (
    <div className=" w-full bg-aswad-black rounded-md p-10 relative">
      <span className="absolute top-3 text-mortar-grey text-sm">
        Shopify-schema.d.ts
      </span>
      <div className="w-full bg-verified-black min-h-[80px] rounded-md relative">
        <SyntaxHighlighter
          language="typescript"
          style={atomDark}
          wrapLongLines
          customStyle={{ margin: '0' }}
        >
          {codeData || 'Generate Types...'}
        </SyntaxHighlighter>

        {codeData && (
          <div className="absolute top-3 right-3 flex gap-2">
            {file && (
              <Button href={file} type="anchor">
                Download
              </Button>
            )}

            <div onClick={handleCopyClick} className="relative">
              <span
                className={`absolute ${
                  showCopy ? 'opacity-100' : 'opacity-0'
                } -top-7 left-2/4 -translate-x-1/2 transition duration-500 pointer-events-none`}
              >
                Copy!
              </span>
              <img
                src={copyIcon}
                className="w-12 cursor-pointer hover:border-2 rounded-md"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
