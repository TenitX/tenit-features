import axios from 'axios';

var setAccountId: number;

export function init(accountId: number): void {
   setAccountId = accountId;
}

export async function isEnabled(feature: string, user: number): Promise<Boolean> {
    const f : Feature = await getFeature(feature);
    if (!f) {
        return false;
    }
    return ((f.featureBase * user) % 100) > f.percentEnabled;
}

async function getFeature(feature: string): Promise<Feature> {
    if (!setAccountId) {
        console.error("No account Id was set for the tenit feature library. Please call Feature.init(accountId); to initalize the library.");
        return null;
    }
   return axios.get<Feature>(`https://features-gcs.tenitx.com/${setAccountId}/${feature}`).then(r => r.data);
}

interface Feature {
    accountId: number;
    name: string;
    featureBase: number;
    percentEnabled: number;
}