import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const NewsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="announcement" multiline source="announcement" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
