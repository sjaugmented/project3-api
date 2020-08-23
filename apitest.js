let spotifyURL = `https://api.spotify.com/v1/tracks/{id}`

let key = '3dfb23664b73446abdb76ccb50b15c0e'

const test = async() => {
try {
    const result = await fetch(`${spotifyURL}`)
    console.log(result)
    const response = await result.json()
    console.log(response)
} catch (error) {
    console.log(error)
}}
