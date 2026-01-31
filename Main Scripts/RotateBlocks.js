Blockly.getMainWorkspace().getAllBlocks().forEach(b => b.getSvgRoot().setAttribute("transform", b.getSvgRoot().getAttribute("transform") + " rotate(5)"));
