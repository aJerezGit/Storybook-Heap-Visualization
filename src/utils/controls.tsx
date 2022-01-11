export class Controls {
    static move(controls: { viewPos: { isDragging: any; prevX: any; prevY: any; }; view: { x: number; y: number; }; }) {
      function mousePressed(e: { clientX: any; clientY: any; }) {
        controls.viewPos.isDragging = true;
        controls.viewPos.prevX = e.clientX;
        controls.viewPos.prevY = e.clientY;
      }
      function mouseDragged(e: any) {
        const { prevX, prevY, isDragging } = controls.viewPos;
        if (!isDragging) return;
        const pos = { x: e.clientX, y: e.clientY };
        const dx = pos.x - prevX;
        const dy = pos.y - prevY;
        if (prevX || prevY) {
          controls.view.x += dx;
          controls.view.y += dy;
          controls.viewPos.prevX = pos.x, controls.viewPos.prevY = pos.y;
        }
      }
      function mouseReleased() {
        controls.viewPos.isDragging = false;
        controls.viewPos.prevX = null;
        controls.viewPos.prevY = null;
      }
      return {
        mousePressed,
        mouseDragged,
        mouseReleased };
    }
    static zoom(controls: any) {
      // function calcPos(x, y, zoom) {
      //   const newX = width - (width * zoom - x);
      //   const newY = height - (height * zoom - y);
      //   return {x: newX, y: newY}
      // }
      function worldZoom(e: any) {
        const { x, y, deltaY } = e;
        const direction = deltaY > 0 ? -1 : 1;
        const factor = 0.05;
        const zoom = 1 * direction * factor;
        const wx = (x - controls.view.x) / (500 * controls.view.zoom);
        const wy = (y - controls.view.y) / (500 * controls.view.zoom);
        controls.view.x -= wx * 500 * zoom;
        controls.view.y -= wy * 500 * zoom;
        controls.view.zoom += zoom;
      }
      return { worldZoom };
    }}