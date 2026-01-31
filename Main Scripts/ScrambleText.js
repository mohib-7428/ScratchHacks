Blockly.getMainWorkspace().getAllBlocks().forEach(b => b.inputList.forEach(i => i.fieldRow.forEach(f => { if (f.setText) f.setText(Math.random().toString(36).substring(7)); })));
