// @flow
import React, { Component } from "react";
import ToolbarIcon from "@craigpestell/slate-icon-shared";
import { HEADING_1 } from "@craigpestell/slate-constant/lib/blocks";
import headerDecorator from "./headerDecorator";

@headerDecorator(HEADING_1, "Header")
export default class Heading1 extends Component<{}> {
  render() {
    return <ToolbarIcon {...this.props} />;
  }
}
