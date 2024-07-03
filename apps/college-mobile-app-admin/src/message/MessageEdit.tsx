import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="Receiver" source="receiver" />
        <TextInput label="Sender" source="sender" />
      </SimpleForm>
    </Edit>
  );
};
