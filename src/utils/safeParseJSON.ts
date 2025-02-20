export const safeParseJSON = (jsonString: string | null) => {
    try {
        if (!jsonString) return {};

        if (typeof jsonString === "object") return jsonString;

        const parsedOnce = JSON.parse(jsonString);
        return typeof parsedOnce === "string" ? JSON.parse(parsedOnce) : parsedOnce;
    } catch (error) {
        console.error("JSON parsing error:", error);
        return {};
    }
};