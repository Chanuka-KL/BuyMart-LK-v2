export default function handler(req, res) {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const userAgent = req.headers["user-agent"];
    const time = new Date().toISOString();

    const visitorData = { time, ip, userAgent };
    console.log("Visitor:", visitorData);

    res.status(200).json({ status: "success", visitor: visitorData });
}