import React from "react";

import { Button, ButtonText } from "./styles";

export default function ButtonComp({label, color, width, height}) {
  return (
    <Button style={{ backgroundColor: `${color}`, width, height}}>
      <ButtonText>{label}</ButtonText>
    </Button>
  );
}
