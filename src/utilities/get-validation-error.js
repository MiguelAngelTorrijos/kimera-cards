export const getValidationError = errorCode => {
	const codeMatcher = {
		ERR_NETWORK: 'Se rompió la red',
		ERR_TIMEOUT: 'Se acabó el tiempo',
		ERR_CANCEL: 'Se canceló la petición',
		ERR_UNKNOWN: 'Error desconocido',
		ERR_400: 'Error 400',
		ERR_401: 'Error 401',
		ERR_403: 'Error 403',
		ERR_BAD_REQUEST: 'Error 404',
	}

	return codeMatcher[errorCode]
}
