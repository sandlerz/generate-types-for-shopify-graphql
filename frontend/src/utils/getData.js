export const getData = async ({ data, callBack }) => {
  let sendInfoData

  try {
    const sendInfo = await fetch('http://localhost:4000/api/data/sendInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    sendInfoData = await sendInfo.json()

  } catch (e) {
    throw new Error(e)
  } finally {
    const getFile = await fetch('http://localhost:4000/api/data/getFile', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(sendInfoData)
    })

    const blobFile = await getFile.blob()
    const fileUrl = URL.createObjectURL(blobFile);
    const ulrToText = await fetch(fileUrl)
    const text = await ulrToText.text()

    callBack({ fileUrl, text })
  }
} 