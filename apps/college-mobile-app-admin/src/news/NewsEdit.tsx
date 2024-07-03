import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const NewsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="announcement" multiline source="announcement" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
