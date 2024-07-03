import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DiningMenuEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="hours" multiline source="hours" />
        <TextInput label="item" source="item" />
      </SimpleForm>
    </Edit>
  );
};
