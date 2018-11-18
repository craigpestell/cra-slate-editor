import OlListIcon from "./olList";
import UlListIcon from "./ulList";
import { OL_LIST, UL_LIST, LIST_ITEM } from "@canner/slate-constant/lib/blocks";

import { nodeAttrs } from "@canner/slate-icon-shared";
import commonNode from "@canner/slate-editor-renderer/lib/commonNode";

export const ListPlugin = opt => {
  const options = Object.assign(
    {
      olType: OL_LIST,
      ulType: UL_LIST,
      liType: LIST_ITEM
    },
    opt
  );

  return {
    renderNode: props => {
      if (props.node.type === options.ulType)
        return commonNode("ul", nodeAttrs)(props);
      else if (props.node.type === options.olType)
        return commonNode("ol", nodeAttrs)(props);
      else if (props.node.type === options.liType)
        return commonNode("li", nodeAttrs)(props);
    }
  };
};

export const OlList = OlListIcon;
export const UlList = UlListIcon;
