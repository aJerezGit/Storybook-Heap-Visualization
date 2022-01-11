import { Block } from "./block";

export interface Data {
    heap_region: HeapRegion,
}

export interface HeapRegion {
    start_address: number,
    length: number,
    blocks: Block[]
}