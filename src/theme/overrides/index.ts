// ------------------------------------------------------------------------------
// Copyright (c) 2024 Averroes.ai Inc.
// All rights reserved.
//
// This software and associated documentation files (the "Software") may not be
// copied, modified, distributed, or used without express permission from
// Averroes.ai Inc.
//
// For inquiries, contact:
// Averroes.ai Inc.
// Legal@averroes.ai
// ------------------------------------------------------------------------------

import { Components, Theme } from "@mui/material";
import { CardStylesOverrides } from "./card";
import { CardMediaStylesOverrides } from "./card-media";
import { CardContentStylesOverrides } from "./card-content";

export const componentsOverrides: Components<Theme> = {
  MuiCard: CardStylesOverrides,
  MuiCardMedia: CardMediaStylesOverrides,
  MuiCardContent: CardContentStylesOverrides,
};
