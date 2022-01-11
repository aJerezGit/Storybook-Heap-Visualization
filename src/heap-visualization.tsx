import React, { useEffect, useState } from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';
import './utils/custom.css'
import { Block } from './models/block';
import { Colors, generateCoordenates, resetColors } from './utils/js-utils';
import { Controls } from './utils/controls';
import { SearchBar } from './components/searchBar';
import { Card } from './components/card';
import { HeapAllocation } from './models/heapAllocation';
import { Data } from './models/data';

const HeapVisualization: React.FC = () => {

  interface P5Config {
    width: number,
    height: number,
    size: number
}
  let heapAllocation;

  const controls = {
    view: { x: 0, y: 0, zoom: 1 },
    viewPos: { prevX: null, prevY: null, isDragging: false } };

  const [blocks, setBlocks] = useState<Block[]>([]);  
  const [filteredblocks, setFilteredBlocks] = useState<Block[]>([]);  
  const [search, setSearch] = useState<string>('');
  const [suggestions, setSuggestions] = useState<(string | null)[]>([]);
  const [p5Config, setP5Config] = useState<P5Config>();
  const [checkedFree, setCheckedFree] = useState<boolean>(false);
  const [checkedZoom, setCheckedZoom] = useState<boolean>(false);

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(window.innerWidth * 0.68, window.innerHeight ).parent(
      canvasParentRef,
    ).mouseWheel((e: any) => {
      return Controls.zoom(controls).worldZoom(e); 
      });
    p5.background(255);
    
  };

    useEffect(() => {
      //replace for json object
      const data: Data ={
                "heap_region": {
                  "start_address": 536887480,
                  "length": 12000,
                  "blocks": [
            {
              "start_address": 536875472,
              "length": 80,
              "free": false,
              "field_name": "sBluetoothConnectionCtx"
            },
            {
              "start_address": 536875552,
              "length": 80,
              "free": false,
              "field_name": "sBluetoothConnectionCtx"
            },
            {
              "start_address": 536875632,
              "length": 80,
              "free": false,
              "field_name": "sBluetoothConnectionCtx"
            },
            {
              "start_address": 536875712,
              "length": 80,
              "free": true,
              "field_name": null
            },
            {
              "start_address": 536875792,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536875832,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536875872,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536875912,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536875952,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536875992,
              "length": 520,
              "free": true,
              "field_name": null
            },
            {
              "start_address": 536876512,
              "length": 80,
              "free": false,
              "field_name": "sBluetoothConnectionCtx"
            },
            {
              "start_address": 536876592,
              "length": 16,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536876608,
              "length": 112,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536876720,
              "length": 80,
              "free": false,
              "field_name": "sBluetoothConnectionCtx"
            },
            {
              "start_address": 536876800,
              "length": 32,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536876832,
              "length": 56,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536876888,
              "length": 96,
              "free": true,
              "field_name": null
            },
            {
              "start_address": 536876984,
              "length": 104,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536877088,
              "length": 104,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536877192,
              "length": 96,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536877288,
              "length": 120,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536877408,
              "length": 72,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536877480,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536877520,
              "length": 32,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536877552,
              "length": 104,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536877656,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536877696,
              "length": 48,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536877744,
              "length": 48,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536877792,
              "length": 1032,
              "free": true,
              "field_name": null
            },
            {
              "start_address": 536878824,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536878864,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536878904,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536878944,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536878984,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536879024,
              "length": 24,
              "free": true,
              "field_name": null
            },
            {
              "start_address": 536879048,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536879088,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536879128,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536879168,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536879208,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536879248,
              "length": 88,
              "free": true,
              "field_name": null
            },
            {
              "start_address": 536879336,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536879376,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536879416,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536879456,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536879496,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536879536,
              "length": 96,
              "free": true,
              "field_name": null
            },
            {
              "start_address": 536879632,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536879672,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536879712,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536879752,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536879792,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536879832,
              "length": 72,
              "free": true,
              "field_name": null
            },
            {
              "start_address": 536879904,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536879944,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536879984,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536880024,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536880064,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536880104,
              "length": 64,
              "free": true,
              "field_name": null
            },
            {
              "start_address": 536880168,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536880208,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536880248,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536880288,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536880328,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536880368,
              "length": 48,
              "free": true,
              "field_name": null
            },
            {
              "start_address": 536880416,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536880456,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536880496,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536880536,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536880576,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536880616,
              "length": 72,
              "free": true,
              "field_name": null
            },
            {
              "start_address": 536880688,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536880728,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536880768,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536880808,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536880848,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536880888,
              "length": 72,
              "free": true,
              "field_name": null
            },
            {
              "start_address": 536880960,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536881000,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536881040,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536881080,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536881120,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536881160,
              "length": 80,
              "free": true,
              "field_name": null
            },
            {
              "start_address": 536881240,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536881280,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536881320,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536881360,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536881400,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536881440,
              "length": 88,
              "free": true,
              "field_name": null
            },
            {
              "start_address": 536881528,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536881568,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536881608,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536881648,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536881688,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536881728,
              "length": 80,
              "free": true,
              "field_name": null
            },
            {
              "start_address": 536881808,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536881848,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536881888,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536881928,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536881968,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536882008,
              "length": 72,
              "free": true,
              "field_name": null
            },
            {
              "start_address": 536882080,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536882120,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536882160,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536882200,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536882240,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536882280,
              "length": 96,
              "free": true,
              "field_name": null
            },
            {
              "start_address": 536882376,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536882416,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536882456,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536882496,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536882536,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536882576,
              "length": 80,
              "free": true,
              "field_name": null
            },
            {
              "start_address": 536882656,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536882696,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536882736,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536882776,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536882816,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536882856,
              "length": 48,
              "free": true,
              "field_name": null
            },
            {
              "start_address": 536882904,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536882944,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536882984,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536883024,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536883064,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536883104,
              "length": 16,
              "free": true,
              "field_name": null
            },
            {
              "start_address": 536883120,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536883160,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536883200,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536883240,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536883280,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536883320,
              "length": 96,
              "free": true,
              "field_name": null
            },
            {
              "start_address": 536883416,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536883456,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536883496,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536883536,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536883576,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536883616,
              "length": 24,
              "free": true,
              "field_name": null
            },
            {
              "start_address": 536883640,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536883680,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536883720,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536883760,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536883800,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536883840,
              "length": 32,
              "free": true,
              "field_name": null
            },
            {
              "start_address": 536883872,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536883912,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536883952,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536883992,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536884032,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536884072,
              "length": 96,
              "free": true,
              "field_name": null
            },
            {
              "start_address": 536884168,
              "length": 64,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536884232,
              "length": 48,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536884280,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536884320,
              "length": 104,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536884424,
              "length": 64,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536884488,
              "length": 56,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536884544,
              "length": 88,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536884632,
              "length": 104,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536884736,
              "length": 112,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536884848,
              "length": 88,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536884936,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536884976,
              "length": 24,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536885000,
              "length": 24,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536885024,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536885064,
              "length": 112,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536885176,
              "length": 88,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536885264,
              "length": 88,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536885352,
              "length": 80,
              "free": false,
              "field_name": "sBluetoothConnectionCtx"
            },
            {
              "start_address": 536885432,
              "length": 96,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536885528,
              "length": 112,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536885640,
              "length": 32,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536885672,
              "length": 56,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536885728,
              "length": 16,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536885744,
              "length": 48,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536885792,
              "length": 32,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536885824,
              "length": 88,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536885912,
              "length": 112,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536886024,
              "length": 120,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536886144,
              "length": 72,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536886216,
              "length": 40,
              "free": false,
              "field_name": "sWorkEntryCtx"
            },
            {
              "start_address": 536886256,
              "length": 64,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536886320,
              "length": 64,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536886384,
              "length": 48,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536886432,
              "length": 96,
              "free": false,
              "field_name": null
            },
            {
              "start_address": 536886528,
              "length": 80,
              "free": false,
              "field_name": "sBluetoothConnectionCtx"
            },
            {
              "start_address": 536886608,
              "length": 80,
              "free": false,
              "field_name": "sBluetoothConnectionCtx"
            },
            {
              "start_address": 536886688,
              "length": 80,
              "free": false,
              "field_name": "sBluetoothConnectionCtx"
            },
            {
              "start_address": 536886768,
              "length": 80,
              "free": false,
              "field_name": "sBluetoothConnectionCtx"
            },
            {
              "start_address": 536886848,
              "length": 80,
              "free": false,
              "field_name": "sBluetoothConnectionCtx"
            },
            {
              "start_address": 536886928,
              "length": 80,
              "free": false,
              "field_name": "sBluetoothConnectionCtx"
            },
            {
              "start_address": 536887008,
              "length": 80,
              "free": false,
              "field_name": "sBluetoothConnectionCtx"
            },
            {
              "start_address": 536887088,
              "length": 80,
              "free": false,
              "field_name": "sBluetoothConnectionCtx"
            },
            {
              "start_address": 536887168,
              "length": 304,
              "free": true,
              "field_name": null
            }
          ]}};
        const modifiedData = data.heap_region.blocks.map(d => { return {...d, 
            field_name: !d.free && d.field_name == null ? 'Unknown' : d.field_name,
            color: d.free ? Colors.free : 
            d.field_name == null ? Colors.unknown : Colors.selected, 
             }}); 
        setBlocks(modifiedData);
        setFilteredBlocks(modifiedData);
        const p5ConfigObj: P5Config = {
            width: data.heap_region.length / 100,
            height: 20,
            size: 5
        }
        if(p5ConfigObj) {
            p5ConfigObj.width *= p5ConfigObj.size;
            p5ConfigObj.height *= p5ConfigObj.size*p5ConfigObj.size
        }
        setP5Config(p5ConfigObj);
    }, []);

    const onChangecheckboxHandler = () => {
        setBlocks(resetColors(blocks, checkedFree));
        setCheckedFree(!checkedFree);
        setSearch('');
    }

  const onChangeHandler = (search: string) => {
    let matches: (string | null)[] = [];
    setBlocks(resetColors(blocks, true));
    if(search.length > 0) {
        const mapBlocks: (string | null)[] = (blocks?.map((b) => b.field_name)).filter((item, pos, self) => {
            return self.indexOf(item) == pos;
        });
        const cleanSuggestions: (string | null)[] = mapBlocks.filter(mb => mb != null);

        matches = cleanSuggestions.filter(block => {
            //case insensitive
            const regex = new RegExp(`${search}`, 'gi');
            return block?.match(regex);
        });
    } else {
      setFilteredBlocks(blocks);
    }
    
    setSuggestions(matches);  
    setSearch(search);
  }

  const onSuggestionHandler = (suggestion: string | null) => {

      setSearch(suggestion!);
      setSuggestions([]);
      const newfilteredBlocks: Block[] = blocks.filter(b => b.field_name == suggestion
        );
      setFilteredBlocks([...newfilteredBlocks]);
      setBlocks(resetColors(blocks, checkedFree));
      const newblocks: Block[] = blocks.map(b => {return {...b, 
        color: b.field_name != suggestion && !b.free  
               ? Colors.notSelected
               : b.color}});
      setBlocks([...newblocks]);
  }

  const onChangeZoom = () => {
    const newConfig: P5Config = {
        size: !checkedZoom ? 10 : 5, 
        width: !checkedZoom ? p5Config?.width! / 5 * 10 : p5Config?.width! / 10 * 5, 
        height: !checkedZoom ? (p5Config?.height! / 5 / 5) * 10 
                            : (p5Config?.height! / 10 / 10) * 5}; 
    setP5Config(newConfig);
    setCheckedZoom(!checkedZoom);
  }

  const draw = (p5: p5Types) => {
    if(!checkedZoom) {
        p5.clear();    
    }
    if(p5Config) {
        setBlocks(generateCoordenates(blocks, p5Config.width, p5Config.size));
        heapAllocation = new HeapAllocation(p5Config);
        heapAllocation.display(p5, blocks);  
    }
  };

  return (
        <div className="heap">
              <SearchBar 
                suggestions={suggestions}
                suggestionHandler={onSuggestionHandler}
                search={search}
                searchHandler={onChangeHandler}
                freeMemory={checkedFree}
                freeMemoryHandler={onChangecheckboxHandler}
                zoom={checkedZoom}
                zoomHandler={onChangeZoom}
              />
            <div className="box card sketch">
                <Sketch setup={setup} draw={draw} />
            </div>
            <div className="box cardList">
                {filteredblocks && filteredblocks.map((block, i) => 
                    <Card key={i} 
                      color={block.color ? block.color : 'rgb(248, 240, 223)'}
                      fieldName={block.field_name}
                      fieldStartAddress={block.start_address}
                      fieldLength={block.length}
                    />
                )}
            </div>

        </div>
    );
};

export default HeapVisualization;