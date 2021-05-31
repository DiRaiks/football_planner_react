import { IErrorKeys, IExtractedFlatErrors } from './types';

export const EMPTY_ERRORS: IExtractedFlatErrors = Object.freeze({
  global: null,
  fields: null,
  status: null,
});

export const GLOBAL_ERRORS_TRANSLATION_PREFIX = 'globalErrors';

export const ERROR_KEYS: IErrorKeys = {
  400: 'badRequest',
  401: 'unauthorized',
  402: 'paymentRequired',
  403: 'forbidden',
  404: 'notFound',
  405: 'methodNotAllowed',
  406: 'notAcceptable',
  407: 'proxyAuthenticationRequired',
  408: 'requestTimeout',
  409: 'conflict',
  410: 'gone',
  411: 'lengthRequired',
  412: 'preconditionFailed',
  413: 'payloadTooLarge',
  414: 'uriTooLong',
  415: 'unsupportedMediaType',
  416: 'rangeNotSatisfiable',
  417: 'expectationFailed',
  419: 'authenticationTimeout',
  421: 'misdirectedRequest',
  422: 'unprocessable Entity',
  423: 'locked',
  424: 'failedDependency',
  426: 'upgradeRequired',
  428: 'preconditionRequired',
  429: 'tooManyRequests',
  431: 'requestHeaderFieldsTooLarge',
  449: 'retryWith',
  451: 'unavailableForLegalReasons',
  499: 'clientClosedRequest',
  500: 'internalServerError',
  501: 'notImplemented',
  502: 'badGateway',
  503: 'serviceUnavailable',
  504: 'gatewayTimeout',
  505: 'httpVersionNotSupported',
  506: 'variantAlsoNegotiates',
  507: 'insufficientStorage',
  508: 'loopDetected',
  509: 'bandwidthLimitExceeded',
  510: 'notExtended',
  511: 'networkAuthenticationRequired',
  520: 'unknownError',
  521: 'webServerIsDown',
  522: 'connectionTimedOut',
  523: 'originIsUnreachable',
  524: 'aTimeoutOccurred',
  525: 'sslHandshakeFailed',
  526: 'invalidSSLCertificate',
};
