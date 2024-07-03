import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const LibraryResourceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <BooleanInput label="availability" source="availability" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
