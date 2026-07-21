export const FB_PIXEL = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

declare global {
    interface Window {
        fbq?: (
            command: string,
            eventName: string,
            parameters?: Record<string, unknown>
        ) => void;
    }
}

export const pageView = (): void => {
    if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "PageView")
    }
};

export const event = (
    eventName: string,
    parameters?: Record<string, unknown>
): void => {
    if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", eventName, parameters)
    }
};

export const customEvent = (
    eventName: string,
    parameters?: Record <string, unknown>
): void => {
    if (typeof window !== "undefined" && window.fbq){   
        window.fbq("trackCustom", eventName, parameters)
    }
}