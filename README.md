## About
React library for rendering components based on screen window size.

## Example usage
    <MediaSizeRender  minWidth={1024}  component={<p>desktop and up</p>} />
    
    <MediaSizeRender  minWidth={768}  maxWidth={1024}  component={<p>tablet only</p>} />
    
    <MediaSizeRender  maxWidth={1024}  component={<p>tablet and lower</p>} />
