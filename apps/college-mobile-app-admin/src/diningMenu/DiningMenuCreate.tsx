import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DiningMenuCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="hours" multiline source="hours" />
        <TextInput label="item" source="item" />
      </SimpleForm>
    </Create>
  );
};
