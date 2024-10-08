import { Schema } from "zod";

import { SchemaField } from "@common/enums/schema-field.enum";

export interface SchemaInput extends Partial<Record<SchemaField, Schema>> {}