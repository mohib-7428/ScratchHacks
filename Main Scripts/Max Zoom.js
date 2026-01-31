const ws = Blockly.getMainWorkspace(); 
if (ws && ws.options && ws.options.zoomOptions) { 
    ws.options.zoomOptions.minScale = 0.000000001; 
    ws.options.zoomOptions.maxScale = 100; 
    console.log("Zoom limits expanded!"); 
}
