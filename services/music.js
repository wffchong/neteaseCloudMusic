import { httpRequest } from "./index";

export function getMusicBanner(type = 0) {
    return httpRequest.get({
        url: "/banner",
        data: {
            type
        }
    })
}