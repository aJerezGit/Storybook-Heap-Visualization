import { Block } from "./block";

export interface HeapDump {
    heap_region: HeapRegion;
}

interface HeapRegion {
    start_address: number,
    lenght: number,
    blocks: Block[]
}