import React from "react";

import { Button, ButtonText } from "./styles";

export default function ButtonComp({label, color, width, height, teste}) {
  return (
    <Button style={{ backgroundColor: `${color}`, width, height}} onPress={teste}>
      <ButtonText>{label}</ButtonText>
    </Button>
  );
}
