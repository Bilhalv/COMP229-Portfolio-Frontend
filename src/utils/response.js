export function unwrapResponse(response, fallbackMessage = "Request failed.") {
  if (!response?.success) {
    throw new Error(response?.message || fallbackMessage);
  }

  return response;
}
