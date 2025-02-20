import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "DELETE") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { publicId } = req.body;

    if (!publicId) {
        return res.status(400).json({ error: "Missing publicId" });
    }

    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/destroy`;

    const timestamp = Math.floor(Date.now() / 1000);
    const signature = crypto
        .createHash("sha1")
        .update(`public_id=${publicId}&timestamp=${timestamp}${process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET}`)
        .digest("hex");

    const formData = new URLSearchParams();
    formData.append("public_id", publicId);
    formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!);
    formData.append("timestamp", String(timestamp));
    formData.append("signature", signature);

    try {
        const response = await fetch(cloudinaryUrl, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: formData.toString(),
        });

        const data = await response.json();

        if (data.result !== "ok") {
            throw new Error("Failed to delete image");
        }

        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Cloudinary delete error:", error);
        res.status(500).json({ error: "Failed to delete image" });
    }
}
