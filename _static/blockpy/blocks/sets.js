Blockly.Python['set_create'] = function(block) {
    // Create a list with any number of elements of any type.
  var elements = new Array(block.itemCount_);
  console.log(block.itemCount_)
  for (var i = 0; i < block.itemCount_; i++) {
    elements[i] = Blockly.Python.valueToCode(block, 'ADD' + i,
        Blockly.Python.ORDER_NONE) || '___';
  }
  var code = '{' + elements.join(', ') + '}';
  return [code, Blockly.Python.ORDER_ATOMIC];
}
Blockly.Blocks['set_create'] = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.LISTS_CREATE_WITH_HELPURL[$.i18n().locale]);
    this.setColour(Blockly.Blocks.lists.HUE);
    this.itemCount_ = 3;
    this.updateShape_();
    this.setOutput(true, 'Set');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP[$.i18n().locale]);
  },
  /**
   * Create XML to represent list inputs.
   * @return {!Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this Blockly.Block
   */
  updateShape_: PLUS_MINUS_updateShape('ADD', "create set of")
};