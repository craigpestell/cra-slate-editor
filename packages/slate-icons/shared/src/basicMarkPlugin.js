// @flow
import commonMark from "@craigpestell/slate-editor-renderer/lib/commonMark";
import isHotkey from "is-hotkey";

export default function(options, hotkey) {
  return {
    renderMark: props => {
      if (props.mark.type === options.type)
        return commonMark(options.tagName)(props);
    },
    onKeyDown(event, change) {
      if (isHotkey(hotkey, event)) {
        change.call(change => change.toggleMark(options.type));
      }
    }
  };
}
