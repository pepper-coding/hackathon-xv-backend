import { Reflector } from "@nestjs/core";

import * as zod from "zod";

import { SchemaOutput } from "@common/interfaces/schema-output.interface";
import { SchemaInput } from "@common/interfaces/schema-input.interface";

export const SchemaDecorator = Reflector.createDecorator<SchemaInput, SchemaOutput>({
    transform: (value) => zod.object(value),
    key: "schema"
});