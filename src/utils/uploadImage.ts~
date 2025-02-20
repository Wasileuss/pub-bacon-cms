export const uploadImage = async (file: File): Promise<{ url: string, public_id: string } | null> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'bacon_preset');
    formData.append('folder', 'menus');

    try {
        const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`, {
            method: 'POST',
            body: formData,
        });

        if (!res.ok) {
            console.error(`Cloudinary upload failed: ${res.statusText}`);
            return null;
        }

        const data = await res.json();
        return {
            url: data.secure_url,
            public_id: data.public_id,
        };
    } catch (error) {
        console.error('Error uploading image:', error);
        return null;
    }
};
