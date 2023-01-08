export function rot13(str: string) {
  return str.replace(/[a-z]/gi, (c) => {
    const code = c.charCodeAt(0);
    return String.fromCharCode(code + (code < 78 ? 13 : -13));
  });
}
