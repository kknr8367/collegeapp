import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const LibraryResourceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <BooleanInput label="availability" source="availability" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
