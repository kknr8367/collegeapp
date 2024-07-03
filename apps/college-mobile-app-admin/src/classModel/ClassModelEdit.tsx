import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CourseMaterialTitle } from "../courseMaterial/CourseMaterialTitle";
import { UserTitle } from "../user/UserTitle";

export const ClassModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="courseMaterials"
          reference="CourseMaterial"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CourseMaterialTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <BooleanInput label="notification" source="notification" />
        <TextInput label="schedule" multiline source="schedule" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
