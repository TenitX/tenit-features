var TENIT_API_TOKEN : string = "";

type FeaturesResponse = {
    enabled: boolean
}

export function init(apiToken : string) {
    TENIT_API_TOKEN = apiToken;
}

export async function isEnabled(feature : string, userId : string) : Promise<boolean> {
    if (TENIT_API_TOKEN === "") {
        throw new Error("No Api token was set for Tenit Features. Call Features.init(your-api-token); to set one.")
    }
    try {
    return fetch(`https://features.tenitx.com/${feature}/enabled?user=${userId}`, 
    {
        headers: {
            'x-tenit-api-token': TENIT_API_TOKEN
        }
    })
    .then(apiResponse => apiResponse.json() as Promise<FeaturesResponse>)
    .then(flag => flag.enabled);
    } catch (error) {
        console.error("Error fetching Tenit Feature Flag", error);
        // A Default fallback incase things go wrong.
        return false;
    }
}