export async function getVans(){
    const res = await fetch("api/vans")
    if(!res.ok){
        const error = new Error("Failed to fetch vans")
        error.statusText = res.statusText
        error.status = res.status
        throw error
    }
    const data = await res.json()
    return data.vans
}