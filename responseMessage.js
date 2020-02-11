let errorMessage = "";
if (response.status) {
  errorMessage = response.responseMessages.join(",");
  if (response.status.length > 1) {
    errorMessage += ".";
  }
}
