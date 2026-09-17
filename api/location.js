export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    
    res.status(200).json({
        country: req.headers['x-vercel-ip-country'] || null,
        region: req.headers['x-vercel-ip-country-region'] || null,
        city: req.headers['x-vercel-ip-city'] || null,
        lat: req.headers['x-vercel-ip-latitude'] || null,
        lon: req.headers['x-vercel-ip-longitude'] || null,
    });
}