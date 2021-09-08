function dublicateParam(url) {
    const urlSplit = url.split('&')
    const lastRemove = urlSplit.pop()
    let urlReady = urlSplit.toString()
    
    console.log(urlReady)
    }

    dublicateParam("https://devtailor.com?first=1&second=2&first=2") 