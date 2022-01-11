import p5Types from 'p5';
import { Colors, drawBlocks, drawGrid } from '../utils/js-utils';
import { Block } from './block';

interface P5Config {
    width: number,
    height: number,
    size: number
}

interface IHeapAllocationProps {
    display(p5: p5Types, blocks: Block[]): void;
}

export class HeapAllocation implements IHeapAllocationProps {
    p5Config: P5Config;

    constructor(p5Config: P5Config) {
        this.p5Config = p5Config;
    }

    // const controls = {
    //     view: { x: 0, y: 0, zoom: 1 },
    //     viewPos: { prevX: null, prevY: null, isDragging: false } };  

  public display(p5: p5Types, blocks: Block[]) {
    const width: number = this.p5Config?.width ? this.p5Config?.width : 0;
    const height: number = this.p5Config?.height ? this.p5Config?.height : 0;
    const size: number = this.p5Config?.size ? this.p5Config?.size : 0;
    drawGrid(p5, height, width, size);
    
    drawBlocks(p5, blocks, width, size);
    p5.fill(Colors.free);
    // p5.noLoop();  

    //TODO: whole section for zooming and translation, 
    // p5.translate(controls.view.x, controls.view.y);
    // p5.scale(controls.view.zoom);
    //  p5.mousePressed((e: any) => Controls.move(controls).mousePressed(e)); 
    //  p5.mouseDragged((e: any) => Controls.move(controls).mouseDragged(e)); 
    //  p5.mouseReleased((e: any) => Controls.move(controls).mouseReleased(e)); 
  }
}
