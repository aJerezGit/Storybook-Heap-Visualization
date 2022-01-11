import { Block } from "../models/block";
import p5Types from 'p5';

export enum Colors {
  free = 'rgb(255, 255, 255)',
  notFree = 'rgb(157, 157, 157)',
  selected = 'rgb(121, 180, 183)',
  notSelected = 'rgb(157, 157, 157)',
  unknown = 'rgb(248, 240, 223)'
}

export function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generateCoordenates(blocks: Block[], width: number, size: number): Block[] {
  let x: number = 0, y: number = 0;
    blocks.forEach((block) => {
        if(x == 0) {
            // p5.rect(x, y, size*block.length, size);
            block.coox = x;
            block.cooy = y;
            x+= size*block.length;
        } else {
            let availableWidth: number = width - x;
            let nextItemWidth =  size*block.length;
            if(nextItemWidth < availableWidth) {
                block.coox = x;
                block.cooy = y;
                x+= nextItemWidth;
            } else {
                block.coox = x,
                block.cooy = y;
            while(nextItemWidth > 0) {
                let differenceWidth = nextItemWidth - availableWidth;
                availableWidth = differenceWidth > 0 ? 0 : availableWidth - nextItemWidth;

                if(availableWidth <= 0) {
                    x=0; y += size; availableWidth = width;
                } else {
                    x += nextItemWidth;
                }
                nextItemWidth = differenceWidth;
            }
        }
        }
    });
  return blocks;
}

export function drawGrid(p5: p5Types, height: number, width: number, size: number) {
  p5.stroke(0);
    p5.strokeWeight(0.1);
    for(let y: number = 0; y < height; y+= size) {
        for(let x: number = 0; x < width; x+= size) {
            p5.rect(x, y, size, size);
        }
    }
}

export function drawBlocks(p5: p5Types, blocks: Block[], width: number, size: number) {
  blocks.forEach((block) => {
    let x: number = block.coox ? block.coox : 0, y: number = block.cooy ? block.cooy : 0;
    p5.fill(block.color ? block.color : Colors.free );
    if(block.coox == 0) {
        p5.rect(x, y, size*block.length, size);
    } else {
        let availableWidth: number = width - x;
        let nextItemWidth =  size*block.length;
        if(nextItemWidth < availableWidth) {
            p5.rect(x, y, nextItemWidth, size);
        } else {
            let i = 0;
        while(nextItemWidth > 0 && i<10) {
            let differenceWidth = nextItemWidth - availableWidth;
            p5.rect(x, y, nextItemWidth > availableWidth ? availableWidth : nextItemWidth, size);
            availableWidth = differenceWidth > 0 ? 0 : availableWidth - nextItemWidth;
            if(availableWidth <= 0) {
                x=0; y += size; availableWidth = width;
            } else {
                x += nextItemWidth;
            }
            nextItemWidth = differenceWidth;
            i++;
        }
    }
    }

});
}

export function resetColors(blocks: Block[], checked: boolean) {
    return [...blocks.map(b => {return {...b, color: !b.free ? 
      !checked ? Colors.notFree : b.field_name == 'Unknown' ? Colors.unknown : 
      Colors.selected : Colors.free}})];
}