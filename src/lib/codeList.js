export const codes = {
	100: {
		title: "Continue",
		description: "This interim response indicates that the client should continue the request or ignore the response if the request is already finished.",
		additionalInformation: true
	},
	101: {
		title: "Switching Protocols",
		description: "This code is sent in response to an Upgrade request header from the client and indicates the protocol the server is switching to.",
		additionalInformation: true
	},
	102: { title: "Processing (WebDav)", description: "This code indicates that the server has received and is processing the request, but no response is available yet.", additionalInformation: false },
	103: {
		title: "Early Hints (experimental)",
		description: "This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response.",
		additionalInformation: true
	},
	200: {
		title: "OK",
		description:
			'The request succeeded. The result meaning of "success" depends on the HTTP method. GET: The resource has been fetched and transmitted in the message body. HEAD: The representation headers are included in the response without any message body. PUT or POST: The resource describing the result of the action is transmitted in the message body. TRACE: The message body contains the request message as received by the server.',
		additionalInformation: true
	},
	201: {
		title: "Created",
		description: "The request succeeded, and a new resource was created as a result. This is typically the response sent after POST requests, or some PUT requests.",
		additionalInformation: true
	},
	202: {
		title: "Accepted",
		description:
			"The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.",
		additionalInformation: true
	},
	203: {
		title: "Non-Authoritative Information",
		description:
			"This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the 200 OK response is preferred to this status.",
		additionalInformation: true
	},
	204: {
		title: "No Content",
		description: "There is no content to send for this request, but the headers may be useful. The user agent may update its cached headers for this resource with the new ones.",
		additionalInformation: true
	},
	205: { title: "Reset Content", description: "Tells the user agent to reset the document which sent this request.", additionalInformation: true },
	206: { title: "Partial Content", description: "This response code is used when the Range header is sent from the client to request only part of a resource.", additionalInformation: true },
	207: { title: "Multi-Status (WebDAV)", description: "Conveys information about multiple resources, for situations where multiple status codes might be appropriate.", additionalInformation: false },
	208: {
		title: "Already Reported (WebDAV)",
		description: "Used inside a <dav:propstat> response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.",
		additionalInformation: false
	},
	226: {
		title: "IM Used",
		description: "The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.",
		additionalInformation: false
	},
	300: {
		title: "Multiple Choices",
		description:
			"The request has more than one possible response. The user agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)",
		additionalInformation: true
	},
	301: { title: "Moved Permanently", description: "The URL of the requested resource has been changed permanently. The new URL is given in the response.", additionalInformation: true },
	302: {
		title: "Found",
		description:
			"This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.",
		additionalInformation: true
	},
	303: { title: "See Other", description: "The server sent this response to direct the client to get the requested resource at another URI with a GET request.", additionalInformation: true },
	304: {
		title: "Not Modified",
		description: "This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.",
		additionalInformation: true
	},
	305: {
		title: "Use Proxy (deprecated)",
		description:
			"Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.",
		additionalInformation: false
	},
	306: { title: "unused", description: "This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification.", additionalInformation: false },
	307: {
		title: "Temporary Redirect",
		description:
			"The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.",
		additionalInformation: true
	},
	308: {
		title: "Permanent Redirect",
		description:
			"This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.",
		additionalInformation: true
	},
	400: {
		title: "Bad Request",
		description:
			"The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).",
		additionalInformation: true
	},
	401: {
		title: "Unauthorized",
		description: 'Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.',
		additionalInformation: true
	},
	402: {
		title: "Payment Required (experimental)",
		description:
			"This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.",
		additionalInformation: true
	},
	403: {
		title: "Forbidden",
		description:
			"The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.",
		additionalInformation: true
	},
	404: {
		title: "Not Found",
		description:
			"The server cannot find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web.",
		additionalInformation: true
	},
	405: {
		title: "Method Not Allowed",
		description: "The request method is known by the server but is not supported by the target resource. For example, an API may not allow calling DELETE to remove a resource.",
		additionalInformation: true
	},
	406: {
		title: "Not Acceptable",
		description: "This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent.",
		additionalInformation: true
	},
	407: { title: "Proxy Authentication Required", description: "This is similar to 401 Unauthorized but authentication is needed to be done by a proxy.", additionalInformation: true },
	408: {
		title: "Request Timeout",
		description:
			"This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.",
		additionalInformation: true
	},
	409: { title: "Conflict", description: "This response is sent when a request conflicts with the current state of the server.", additionalInformation: true },
	410: {
		title: "Gone",
		description:
			'This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.',
		additionalInformation: true
	},
	411: { title: "Length Required", description: "Server rejected the request because the Content-Length header field is not defined and the server requires it.", additionalInformation: true },
	412: { title: "Precondition Failed", description: "The client has indicated preconditions in its headers which the server does not meet.", additionalInformation: true },
	413: {
		title: "Payload Too Large",
		description: "Request entity is larger than limits defined by server. The server might close the connection or return an Retry-After header field.",
		additionalInformation: true
	},
	414: { title: "URI Too Long", description: "The URI requested by the client is longer than the server is willing to interpret.", additionalInformation: true },
	415: { title: "Unsupported Media Type", description: "The media format of the requested data is not supported by the server, so the server is rejecting the request.", additionalInformation: true },
	416: {
		title: "Range Not Satisfiable",
		description: "The range specified by the Range header field in the request cannot be fulfilled. It's possible that the range is outside the size of the target URI's data.",
		additionalInformation: true
	},
	417: { title: "Expectation Failed", description: "This response code means the expectation indicated by the Expect request header field cannot be met by the server.", additionalInformation: true },
	418: { title: "I'm a teapot", description: "The server refuses the attempt to brew coffee with a teapot.", additionalInformation: true },
	421: {
		title: "Misdirected Request",
		description:
			"The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI. ",
		additionalInformation: false
	},
	422: { title: "Unprocessable Entity (WebDAV)", description: "The request was well-formed but was unable to be followed due to semantic errors.", additionalInformation: true },
	423: { title: "Locked (WebDAV)", description: "The resource that is being accessed is locked.", additionalInformation: false },
	424: { title: "Failed Dependency (WebDAV)", description: "The request failed due to failure of a previous request.", additionalInformation: false },
	425: { title: "Too Early (experimental)", description: "Indicates that the server is unwilling to risk processing a request that might be replayed.", additionalInformation: true },
	426: {
		title: "Upgrade Required",
		description:
			"The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an Upgrade header in a 426 response to indicate the required protocol(s).",
		additionalInformation: true
	},
	428: {
		title: "Precondition Required",
		description:
			"The origin server requires the request to be conditional. This response is intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.",
		additionalInformation: true
	},
	429: { title: "Too Many Requests", description: 'The user has sent too many requests in a given amount of time ("rate limiting").', additionalInformation: true },
	431: {
		title: "Request Header Fields Too Large",
		description: "The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.",
		additionalInformation: true
	},
	451: {
		title: "Unavailable For Legal Reasons",
		description: "The user agent requested a resource that cannot legally be provided, such as a web page censored by a government.",
		additionalInformation: true
	},
	500: { title: "Internal Server Error", description: "The server has encountered a situation it does not know how to handle.", additionalInformation: true },
	501: {
		title: "Not Implemented",
		description:
			"The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.",
		additionalInformation: true
	},
	502: {
		title: "Bad Gateway",
		description: "This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.",
		additionalInformation: true
	},
	503: {
		title: "Service Unavailable",
		description:
			"The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the Retry-After HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.",
		additionalInformation: true
	},
	504: { title: "Gateway Timeout", description: "This error response is given when the server is acting as a gateway and cannot get a response in time.", additionalInformation: true },
	505: { title: "HTTP Version Not Supported", description: "The HTTP version used in the request is not supported by the server.", additionalInformation: true },
	506: {
		title: "Variant Also Negotiates",
		description:
			"The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.",
		additionalInformation: true
	},
	507: {
		title: "Insufficient Storage (WebDAV)",
		description: "The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.",
		additionalInformation: true
	},
	508: { title: "Loop Detected (WebDAV)", description: "The server detected an infinite loop while processing the request.", additionalInformation: true },
	510: { title: "Not Extended", description: "Further extensions to the request are required for the server to fulfill it.", additionalInformation: true },
	511: { title: "Network Authentication Required", description: "Indicates that the client needs to authenticate to gain network access.", additionalInformation: true }
};
