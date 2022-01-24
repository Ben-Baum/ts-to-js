const $ = document.querySelector

const  ApiBaseUrl:String = `http://localhost:3200`;



function init() {

    $("#searchButton").addEventListener("click", function () {
        addFruit()
    })

    Promise.race([getAllFish(), getAllFruits()]).then((results) => {
        console.log(results)
        // drawMiniSuper("fishData", results[0])
        // drawMiniSuper("fruitsData", results[1])
    }).catch(ex => {
        alert("Failed!!!!")
    })


}
function addFruit() {
    const fruitsUrl:string = "fruit"
    const currentFruit:string = $("#searchInput").value
    const payload:object = { fruit: currentFruit }
    if (!currentFruit) return;
    fetch(`${ApiBaseUrl}/${fruitsUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(_setJson).then(_addFruitSuccess).catch(_setError)

    function _setJson(response) {
        return response.json()
    }

    function _addFruitSuccess(message:string) {
        popUpSuccessModal()
        getAllFruits()
    }
    function _setError(ex) {
        console.log(ex)
    }
}
async function getAllFruits() {
    const fruitsUrl:string = "fruits"
    try {
        const result = await fetch(`${ApiBaseUrl}/${fruitsUrl}`);
        const resultJson = await result.json()
        return resultJson
        // _loadFruits(resultJson)
    } catch (error:any) {
        throw new Error()
        _setError(error)
    }

    function _loadFruits(fruitsData:any = "fruitsData", ArrayOfFruits:Array<string>) {
        drawMiniSuper(fruitsData, ArrayOfFruits)
    }

    function _setError(error:any) {
        console.log(error)
    }

}

async function getAllFish() {
    const fishUrl:string = "fish"
    try {
        const result = await fetch(`${ApiBaseUrl}/${fishUrl}`);
        const resultJson = await result.json()
        return resultJson
        // _loadFish(resultJson)
    } catch (error:any) {
        throw new Error()
        _setError(error)
    }

    function _loadFish(fishData:any = "fishData", arrayOfFish:Array<string>) {
        drawMiniSuper(fishData, arrayOfFish)
    }

    function _setError(error:string) {
        console.log(error)
    }

}


init()



function drawMiniSuper(category:Array<string>, data:Array<string>) {
    if (!Array.isArray(data)) return;
    const content = document.querySelector(`#${category}`)
    const h1List = data.map(msItem => {
        console.log(msItem)
        const h1 = document.createElement("h1")
        h1.innerText = msItem;
        return h1
    })

    content.append(...h1List)
}



function popUpSuccessModal() {
    const alert = document.getElementById("alertModalSuccess")
    alert.style.display = "visible" 
    setTimeout(function () {
        alert.style.display =  "hidden" 
    }, 5000);
}

function printMe(str:any, options = {}) {
    const isUpper:object = options
    const whatToPrint = isUpper ? str.toUpperCase() : str
    console.log(whatToPrint)
}