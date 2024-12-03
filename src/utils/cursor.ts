export const updateCursorPosition = (
  e: MouseEvent,
  setCursorPosition: (pos: { x: number; y: number }) => void,
  setDotPosition: (pos: { x: number; y: number }) => void
) => {
  setCursorPosition({ x: e.clientX - 10, y: e.clientY - 10 });
  setDotPosition({ x: e.clientX - 2, y: e.clientY - 2 });
};