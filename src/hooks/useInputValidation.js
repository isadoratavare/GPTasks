export function useInputValidation() {
  function emptyText(text) {
    return text == "";
  }

  return {
    emptyText,
  };
}
