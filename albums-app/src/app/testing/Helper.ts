export function enterText(element: HTMLInputElement, text: string) {
  element.value = text;
  element.dispatchEvent(new Event('input'));
}
