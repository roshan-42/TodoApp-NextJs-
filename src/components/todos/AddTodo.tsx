import React from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import Form from "../form/Form";
// import { createTodo } from "@/actions";
import * as actions from "@/actions";

const AddTodo = () => {
  debugger;
  return (
    <div>
      <Form action={actions.createTodo}>
        <div className="gap-2">
          <Input
            name="input"
            type="text"
            placeholder="Add Todo Here..."
            // value=""
          />
          <Input
            name="desc"
            type="text"
            placeholder="Add description Here..."
            // value=""
          />

          <Button type="submit" text="Add" bgColor="bg-blue-600" />
        </div>
      </Form>
    </div>
  );
};

export default AddTodo;
