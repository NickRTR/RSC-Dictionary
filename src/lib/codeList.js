export const codes = {
	100: { title: "Continue", additionalInformation: true },
	101: { title: "Switching Protocols", additionalInformation: true },
	102: { title: "Processing (WebDav)", additionalInformation: false },
	103: { title: "Early Hints (experimental)", additionalInformation: true },
	200: { title: "OK", additionalInformation: true },
	201: { title: "Created", additionalInformation: true },
	202: { title: "Accepted", additionalInformation: true },
	203: { title: "Non-Authoritative Information", additionalInformation: true },
	204: { title: "No Content", additionalInformation: true },
	205: { title: "Reset Content", additionalInformation: true },
	206: { title: "Partial Content", additionalInformation: true },
	207: { title: "Multi-Status (WebDAV)", additionalInformation: false },
	208: { title: "Already Reported (WebDAV)", additionalInformation: false },
	226: { title: "IM Used", additionalInformation: false },
	300: { title: "Multiple Choices", additionalInformation: true },
	301: { title: "Moved Permanently", additionalInformation: true },
	302: { title: "Found", additionalInformation: true },
	303: { title: "See Other", additionalInformation: true },
	304: { title: "Not Modified", additionalInformation: true },
	305: { title: "Use Proxy (deprecated)", additionalInformation: false },
	306: { title: "unused", additionalInformation: false },
	307: { title: "Temporary Redirect", additionalInformation: true },
	308: { title: "Permanent Redirect", additionalInformation: true },
	400: { title: "Bad Request", additionalInformation: true },
	401: { title: "Unauthorized", additionalInformation: true },
	402: { title: "Payment Required", additionalInformation: true },
	403: { title: "Forbidden", additionalInformation: true },
	404: { title: "Not Found", additionalInformation: true },
	405: { title: "Method Not Allowed", additionalInformation: true },
	406: { title: "Not Acceptable", additionalInformation: true },
	407: { title: "Proxy Authentication Required", additionalInformation: true },
	408: { title: "Request Timeout", additionalInformation: true },
	409: { title: "Conflict", additionalInformation: true },
	410: { title: "Gone", additionalInformation: true },
	411: { title: "Length Required", additionalInformation: true },
	412: { title: "Precondition Failed", additionalInformation: true },
	413: { title: "Payload Too Large", additionalInformation: true },
	414: { title: "URI Too Long", additionalInformation: true },
	415: { title: "Unsupported Media Type", additionalInformation: true },
	416: { title: "Range Not Satisfiable", additionalInformation: true },
	417: { title: "Expectation Failed", additionalInformation: true },
	418: { title: "I'm a teapot", additionalInformation: true },
	421: { title: "Misdirected Request", additionalInformation: false },
	422: { title: "Unprocessable Entity (WebDAV)", additionalInformation: true },
	423: { title: "Locked (WebDAV)", additionalInformation: false },
	424: { title: "Failed Dependency (WebDAV)", additionalInformation: false },
	425: { title: "Too Early (experimental)", additionalInformation: true },
	426: { title: "Upgrade Required", additionalInformation: true },
	428: { title: "Precondition Required", additionalInformation: true },
	429: { title: "Too Many Requests", additionalInformation: true },
	431: { title: "Request Header Fields Too Large", additionalInformation: true },
	451: { title: "Unavailable For Legal Reasons", additionalInformation: true },
	500: { title: "Internal Server Error", additionalInformation: true },
	501: { title: "Not Implemented", additionalInformation: true },
	502: { title: "Bad Gateway", additionalInformation: true },
	503: { title: "Service Unavailable", additionalInformation: true },
	504: { title: "Gateway Timeout", additionalInformation: true },
	505: { title: "HTTP Version Not Supported", additionalInformation: true },
	506: { title: "Variant Also Negotiates", additionalInformation: true },
	507: { title: "Insufficient Storage (WebDAV)", additionalInformation: true },
	508: { title: "Loop Detected (WebDAV)", additionalInformation: true },
	509: { title: "Bandwidth Limit Exceeded (Apache)", additionalInformation: true },
	510: { title: "Not Extended", additionalInformation: true },
	511: { title: "Network Authentication Required", additionalInformation: true }
};