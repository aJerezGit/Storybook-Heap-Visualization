export interface Block {
    start_address: number,
    length: number,
    free: boolean,
    field_name: string | null
    color?: string,
    coox?: number,
    cooy?: number
}