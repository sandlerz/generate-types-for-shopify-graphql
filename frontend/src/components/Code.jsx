export const Code = ({ codeData }) => {
  return (
    <div className="max-w-4xl w-full bg-aswad-black rounded-md p-10 relative">
      <span className="absolute top-3 text-mortar-grey text-sm">
        Shopify-types.d.ts
      </span>
      <pre className="w-full bg-verified-black min-h-[700px] p-5 rounded-md">
        <code>{codeData}</code>
      </pre>
    </div>
  )
}
