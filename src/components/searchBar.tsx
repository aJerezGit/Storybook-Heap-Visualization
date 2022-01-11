import * as React from 'react';
import '../utils/custom.css'

export interface ISearchBarProps {
    suggestions: (string | null)[];
    // children: React.ReactNode;
    suggestionHandler(sugestion: string | null): void;
    freeMemory: boolean;
    zoom: boolean;
    freeMemoryHandler(): void;
    zoomHandler(): void;
    search: string;
    searchHandler(search: string): void;
}

export function SearchBar ({
    suggestions, 
    suggestionHandler, 
    freeMemory, 
    freeMemoryHandler,
    zoom, 
    zoomHandler,
    search,
    searchHandler,
    ...props}: ISearchBarProps) {
  return (
    <div className="box panel card">
      <div className='box title'>
                <h2>HEAP ALLOCATION</h2>
              </div>
              <div className='box search'>
                <input type="text"
                  placeholder='Search'
                  onChange={e => searchHandler(e.target.value)}
                  value={search}
                  />
                {suggestions && suggestions.map((suggestion, i) => 
                    <div className="suggestion" key={i} onClick={() =>suggestionHandler(suggestion)}>
                        {suggestion}
                    </div>
                )}
              </div>
              <div className="box filter">
              
                <label className="form-control"> 
                <input type="checkbox"
                    checked={freeMemory} 
                    onChange={freeMemoryHandler} 
                />
                    Free memory
                </label>
                <label>
                    <input type="checkbox"
                    {...props} 
                        checked={zoom} 
                        onChange={zoomHandler} 
                    />
                    Zoom
                </label>
              </div>
    </div>
  );
}
